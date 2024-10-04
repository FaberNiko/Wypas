import styles from "./Contact.module.scss";
import logo from "../images/wypas.jpg";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Fb from "../images/facebook.png";
import Insta from '../images/instagram.png'
export default function Contact() {
	const { t } = useTranslation();
	return (
		<section id="contact" className={styles.contactSection}>
			<motion.h2
				className="sectionTitle"
				initial={{ opacity: 0, x: -30 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ type: "tween" }}>
				{t("contact")}
			</motion.h2>
			<div className={styles.container}>
				<motion.img
					src={logo}
					alt="Wypas burger logo"
					className={styles.logo}
					initial={{ opacity: 0, x: 30 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ type: "tween" }}></motion.img>
				<motion.p
					className={styles.delivery}
					initial={{ opacity: 0, x: 30 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ type: "tween" }}>
					{t("delivery")}
				</motion.p>
				<motion.div
					className={styles.info}
					initial={{ opacity: 0, x: -30 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ type: "tween" }}>
					<p className={styles.infoItem}>tel: +48 730 925 570</p>
					<p className={styles.infoItem}>email:</p>
					<p className={styles.infoItem}>burgerwypas@gmail.com</p>
					<p className={styles.infoItem}>ul. targowa 2</p>
					<p className={styles.infoItem}>kalwaria zebrzydowska</p>
				</motion.div>

				<motion.div
					className={styles.hours}
					initial={{ opacity: 0, x: 30 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ type: "tween" }}>
					<p className={styles.listName}>{t("hours")}</p>
					<ul>
						<li>
							{t("mon")} - {t("thr")} 12:00 - 21:00
						</li>
						<li>
							{t("fr")} - {t("sat")} 12:00 - 22:00
						</li>
						<li>{t("sun")} 14:00 - 21:00</li>
					</ul>
				</motion.div>
				<div className={styles.icons}>
					<a
						className={styles.socialIcon}
						href="https://www.instagram.com/wypas_burger_foodtruck/"
						target="blank">
						<img src={Insta} alt="Instagram icon" className={styles.icon} />
					</a>
					<a
						className={styles.socialIcon}
						href="https://www.facebook.com/p/Wypas-Burger-100063973456060/"
						target="blank">
						<img src={Fb} alt="Facebook icon" className={styles.icon} />
					</a>
				</div>
			</div>
		</section>
	);
}
