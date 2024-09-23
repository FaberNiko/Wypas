import React from "react";
import styles from "./About.module.scss";
import gast1 from "../images/gastr24.jpg";
import gast2 from "../images/gastr23.jpg";
import gast3 from "../images/gastr22.jpg";
import { useTranslation } from "react-i18next";

export const About = () => {
	const { t } = useTranslation(); // Pobieranie funkcji tłumaczeń oraz informacji o języku

	return (
		<section id="about" className={styles.aboutSection}>
			<h2 className="sectionTitle">{t("about")}</h2>
			<div className={styles.container}>
				<div className={styles.card}>
					<div className={styles.imgBox}>
						<img
							src={gast1}
							alt="diploma of gastronomy eagles"
							className={styles.eaglesImg}
						/>
					</div>
					<p className={styles.text}>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
						eum quaerat blanditiis velit, dolore quo vitae. Illo voluptas minima
						modi, repellat facilis hic nihil perferendis omnis, saepe odio
						laboriosam consectetur?
					</p>
				</div>
				<div className={styles.card}>
					<div className={styles.imgBox}>
						<img
							src={gast1}
							alt="diploma of gastronomy eagles"
							className={styles.eaglesImg}
						/>
					</div>
					<p className={styles.text}>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
						eum quaerat blanditiis velit, dolore quo vitae. Illo voluptas minima
						modi, repellat facilis hic nihil perferendis omnis, saepe odio
						laboriosam consectetur?
					</p>
				</div>
				<div className={styles.card}>
					<div className={styles.imgBox}>
						<img
							src={gast1}
							alt="diploma of gastronomy eagles"
							className={styles.eaglesImg}
						/>
					</div>
					<p className={styles.text}>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
						eum quaerat blanditiis velit, dolore quo vitae. Illo voluptas minima
						modi, repellat facilis hic nihil perferendis omnis, saepe odio
						laboriosam consectetur?
					</p>
				</div>
			</div>
		</section>
	);
};
