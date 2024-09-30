import React from "react";
import styles from "./About.module.scss";
import gast1 from "../images/gastr24.jpg";
import gast2 from "../images/gastr23.jpg";
import gast3 from "../images/gastr22.jpg";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export const About = () => {
	const { t } = useTranslation(); // Pobieranie funkcji tłumaczeń oraz informacji o języku

	return (
		<section id="about" className={styles.aboutSection}>
			<h2 className="sectionTitle">{t("about")}</h2>
			<div className={styles.container}>
				<motion.div
					className={styles.card}
					initial={{ opacity: 0, x: -30 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ type: "spring", duration: 1.5 }}>
					<div className={styles.imgBox}>
						<img
							src={gast1}
							alt="diploma of gastronomy eagles"
							className={styles.eaglesImg}
						/>
					</div>
					<p className={styles.text}>
					{t('about1')}
					</p>
				</motion.div>
				<motion.div
					className={styles.card}
					initial={{ opacity: 0, x: -30 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ type: "spring", duration: 1.5 }}>
					<div className={styles.imgBox}>
						<img
							src={gast2}
							alt="diploma of gastronomy eagles"
							className={styles.eaglesImg}
						/>
					</div>
					<p className={styles.text}>
					{t('about2')}
					</p>
				</motion.div>
				<motion.div
					className={styles.card}
					initial={{ opacity: 0, x: -30 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ type: "spring", duration: 1.5 }}>
					<div className={styles.imgBox}>
						<img
							src={gast3}
							alt="diploma of gastronomy eagles"
							className={styles.eaglesImg}
						/>
					</div>
					<p className={styles.text}>
					{t('about3')}
					</p>
				</motion.div>
			</div>
		</section>
	);
};
