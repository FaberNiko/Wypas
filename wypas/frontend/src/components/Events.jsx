import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./Events.module.scss";
import eventImg from "../images/event.jpg";
import { motion } from "framer-motion";
export const Events = () => {
	const { i18n, t } = useTranslation(); // Pobieranie funkcji tłumaczeń oraz informacji o języku
	return (
		<section id="events" className={styles.eventsSection}>
			<div className={styles.eventShadow}></div>
			<motion.h2
				className="sectionTitle"
				initial={{ opacity: 0, x: -30 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ type: "spring" }}>
				{t("events")}
			</motion.h2>
			<div className={styles.container}>
				<div className={styles.imageContainer}>

				<motion.img
					src={eventImg}
					alt="Photo of Wypas Burger foodtruck"
					initial={{ opacity: 0, x: -30 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ type: "spring" }}
					/>
					</div>
				<div className={styles.textContainer}>
				<motion.div
					className={styles.textBox}
					initial={{ opacity: 0, x: 50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ type: "spring" }}>
					{t("eventDesc")}
				</motion.div>
				<motion.div
					className={styles.textBox}
					initial={{ opacity: 0, x: 50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ type: "spring" }}>
					{t("eventDesc2")}
				</motion.div>
				</div>
				
				</div>
				

		</section>
	);
};
