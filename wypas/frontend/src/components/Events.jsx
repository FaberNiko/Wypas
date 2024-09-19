import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./Events.module.scss";
import eventImg from "../images/event.jpg";

export const Events = () => {
	const { i18n, t } = useTranslation(); // Pobieranie funkcji tłumaczeń oraz informacji o języku
	return (
		<section id="events" className={styles.eventsSection}>
			<h2 className="sectionTitle">{t("events")}</h2>
			<div className={styles.container}>
				<div className={styles.photoBox}>
                    <img src={eventImg} alt="Photo of Wypas Burger foodtruck" />
				</div>
				<div className={styles.textBox}>{t("eventDesc")}</div>
			</div>
		</section>
	);
};
