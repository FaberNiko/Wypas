import React from "react";
import styles from "./About.module.scss";
import gast1 from "../images/gastr24.jpg";
import gast2 from "../images/gastr23.jpg";
import gast3 from "../images/gastr22.jpg";
import star from "../images/star.png";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export const About = () => {
	const { t } = useTranslation(); // Pobieranie funkcji tłumaczeń oraz informacji o języku

	return (
		<section id="about" className={styles.aboutSection}>
			<motion.h2
				className="sectionTitle"
				initial={{ opacity: 0, x: -30 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ type: "spring", duration: 1.5 }}>
				{t("about")}
			</motion.h2>
			<div className={styles.container}>
				<div className={styles.card}>
					<img
						src={gast1}
						alt="diploma of gastronomy eagles"
						className={styles.eaglesImg}
					/>
				</div>
				<div className={styles.card}>
					<img
						src={gast2}
						alt="diploma of gastronomy eagles"
						className={styles.eaglesImg}
					/>
				</div>
				<div className={styles.card}>
					<img
						src={gast3}
						alt="diploma of gastronomy eagles"
						className={styles.eaglesImg}
					/>
				</div>
			</div>
			<motion.p
				className={styles.text}
				initial={{ opacity: 0, x: 30 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ type: "spring", duration: 1.5 }}>
				{t("about1")}
			</motion.p>
			<motion.p
				className={styles.text}
				initial={{ opacity: 0, x: -30 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ type: "spring", duration: 1.5 }}>
				{t("about2")}
			</motion.p>
			<motion.p
				className={styles.rate}
				initial={{ opacity: 0, x: -30 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ type: "spring", duration: 1.5 }}>
				<a
					href="https://www.google.com/maps/place/Wypas+Burger+-+foodtruck/@49.8698102,19.6769623,17z/data=!4m8!3m7!1s0x4716638cd7c00d63:0x14adfa4cab98916e!8m2!3d49.8698102!4d19.6769623!9m1!1b1!16s%2Fg%2F11q_c8djz0?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D"
					target="_blank">
					5,0
					<img src={star} alt="star" className={styles.starImg} />
				</a>
				{t("opinion")}
			</motion.p>
			<motion.p
				className={styles.text}
				initial={{ opacity: 0, x: 30 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ type: "spring", duration: 1.5 }}>
				{t("about3")}
			</motion.p>
		</section>
	);
};
