import styles from "./Header.module.scss";
import { useTranslation } from "react-i18next";
import Logo from "../images/wypas.png";
import { motion } from "framer-motion";

export default function Header() {
	const { t } = useTranslation();
	return (
		<header className={styles.header}>
			<div className={styles.textWrapper}>
				<div className={styles.text}>WYPAS BURGER&nbsp;</div>
				<div className={styles.text}>WYPAS BURGER&nbsp;</div>
				<div className={styles.text}>WYPAS BURGER&nbsp;</div>
				<div className={styles.text}>WYPAS BURGER&nbsp;</div>
			</div>
			<div className={styles.hero}>
				<div className={styles.content}>
					<motion.img
						src={Logo}
						alt="Wypas Burger logo"
						className={styles.logo}
						initial={{ opacity: 0, y: -100 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ type: "spring", duration: 1 }}
					/>
					<motion.div
						className={styles.aboutText}
						initial={{ opacity: 0, y: -100 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ type: "spring", duration: 1 }}>
						{t("headerTxt")}
					</motion.div>
					<motion.a
						href="#menu"
						className={styles.menuButton}
						initial={{ opacity: 0, x: -100 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ type: "spring", duration: 1.5 }}>
						{t("show_menu")}
					</motion.a>
						</div>
			</div>
		</header>
	);
}
