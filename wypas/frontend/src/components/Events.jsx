import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./Events.module.scss";
import eventImg from "../images/event.jpg";
import { motion } from "framer-motion";
export const Events = () => {
	const { i18n, t } = useTranslation(); // Pobieranie funkcji tłumaczeń oraz informacji o języku
	return (
		<section id="events" className={styles.eventsSection}>
			<motion.h2
				className="sectionTitle"
				initial={{ opacity: 0, x: -30 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ type: "spring" }}>
				{t("events")}
			</motion.h2>
			<div className={styles.container}>
				<motion.img
					src={eventImg}
					alt="Photo of Wypas Burger foodtruck"
					initial={{ opacity: 0, x: -30 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ type: "spring" }}
				/>

				<motion.div
					className={styles.textBox}
					initial={{ opacity: 0, x: 50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ type: "spring" }}>
					{t("eventDesc")}
				</motion.div>
			</div>
		</section>
	);
};
