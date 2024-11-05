require("dotenv").config();
// Upewnij się, że używasz poprawnego klucza API i identyfikatora miejsca
const PLACE_ID = "ChIJYw3A14xjFkcRbpGYq0z6rRQ";

const STRAPI_API_URL = "https://burgerwypas.pl/strapi/api/reviews";

async function fetchReviews() {
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&reviews_sort=newest&key=${process.env.API_KEY}&language=pl`
    );

    const data = await response.json();

    const reviews = data.result?.reviews || [];

    if (reviews.length === 0) {
      console.log("Brak nowych opinii do pobrania.");
      return;
    }

    for (const review of reviews) {
      // Check if the review already exists in Strapi
      const exists = await checkReviewExists(review.id);
      if (!exists) {
        // Save the review only if it does not exist
        await saveReviewInStrapi(review);
      } else {
        console.log(`Opinia od ${review.author_name} już istnieje w Strapi.`);
      }
    }

    console.log("Opinie zostały pobrane i zapisane do Strapi.");
  } catch (error) {
    console.error("Błąd podczas pobierania opinii:", error.message);
  }
}

async function checkReviewExists(reviewId) {
  try {
    const response = await fetch(`${STRAPI_API_URL}?filters[review_id]=${reviewId}`);
    const data = await response.json();

    // Check if any reviews with the same ID exist
    return data.data.length > 0;
  } catch (error) {
    console.error("Błąd podczas sprawdzania istnienia opinii:", error.message);
    return false; // If there's an error, assume the review doesn't exist
  }
}

async function saveReviewInStrapi(review) {
  try {
    const response = await fetch(STRAPI_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        data: {
          Autor: review.author_name,
          Opinia: review.text,
          Rating: review.rating,
          review_id: review.id // Save the review ID to identify it later
        },
      }),
    });

    const result = await response.json();
    if (result.error) {
      console.error(result.error.details);
    } else {
      console.log(`Opinia ${review.author_name} zapisana w Strapi.`);
    }
  } catch (error) {
    console.error("Błąd podczas zapisywania opinii:", error.message);
  }
}

fetchReviews();
