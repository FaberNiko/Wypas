require("dotenv").config();
// Upewnij się, że używasz poprawnego klucza API i identyfikatora miejsca
const PLACE_ID = "ChIJYw3A14xjFkcRbpGYq0z6rRQ";

const STRAPI_API_URL = "http://localhost:1337/api/reviews";

async function fetchReviews() {
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&reviews_sort=newest&key=${process.env.API_KEY}`
    );

    const data = await response.json();

    const reviews = data.result?.reviews || [];

    if (reviews.length === 0) {
      console.log("Brak nowych opinii do pobrania.");
      return;
    }

    for (const review of reviews) {
      await saveReviewInStrapi(review);
    }

    console.log("Opinie zostały pobrane i zapisane do Strapi.");
  } catch (error) {
    console.error("Błąd podczas pobierania opinii:", error.message);
  }
}

async function saveReviewInStrapi(review) {
  try {
    const response = await fetch(STRAPI_API_URL, {
      method: "POST",
      body: JSON.stringify({
        author_name: review.author_name,
        text: review.text,
        rating: review.rating,
      }),
    });

    console.log(`Opinia ${review.author_name} zapisana w Strapi.`);
  } catch (error) {
    console.error(error);
  }
}

fetchReviews();
