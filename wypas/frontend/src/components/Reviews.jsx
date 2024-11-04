import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./Reviews.module.scss";
import { FaStar } from "react-icons/fa";
import Slider from "react-slick"; // Import slidera
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useFetch from "../hooks/useFetch";

export const Reviews = () => {
	const { t } = useTranslation();
	const MAX_LENGTH = 100;

	// Użycie useFetch do pobrania danych z Strapi
	const {
		loading,
		error,
		data = [],
	} = useFetch(`http://burgerwypas.pl:1337/api/reviews`);

	const trimReviewText = text => {
		if (text.length > MAX_LENGTH) {
			return text.substring(0, MAX_LENGTH) + "..."; // Przycinanie tekstu
		}
		return text; // Zwracaj oryginalny tekst, jeśli jest wystarczająco krótki
	};

	// Sprawdzenie błędów lub ładowania
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

	// Przetwarzanie danych
	const reviews = data.map(review => ({
		name: review.attributes.Autor, // Pobierz imię
		review: review.attributes.Opinia, // Pobierz opinię
		rating: review.attributes.Rating, // Pobierz ocenę
	}));

	// Ustawienia dla slidera
	const settings = {
		dots: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<section id= "reviews" className={styles.reviewsSection}>
			<h2 className="sectionTitle">{t("reviews")}</h2>
			<div className={styles.sliderContainer}>
				<Slider {...settings}>
					{reviews.map((review, index) => (
						<div key={index} className={styles.card}>
							<div className={styles.info}>
								<p className={styles.name}>{review.name}</p>
								<div className={styles.stars}>
									{[...Array(5)].map((star, i) => (
										<FaStar
											key={i}
											className={styles.star}
											color={i < review.rating ? "#ffc107" : "#e4e5e9"}
										/>
									))}
								</div>
								<p className={styles.review}>{trimReviewText(review.review)}</p>
							<a href="https://www.google.pl/maps/place/Wypas+Burger+-+foodtruck/@49.8698102,19.6743874,17z/data=!4m8!3m7!1s0x4716638cd7c00d63:0x14adfa4cab98916e!8m2!3d49.8698102!4d19.6769623!9m1!1b1!16s%2Fg%2F11q_c8djz0?entry=ttu&g_ep=EgoyMDI0MTAxMy4wIKXMDSoASAFQAw%3D%3D" target="_blank">{t("read_more")}</a>
							</div>
						</div>
					))}
				</Slider>
			</div>
		</section>
	);
};
