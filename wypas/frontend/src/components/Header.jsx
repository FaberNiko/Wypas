import IconFacebook from "./FacebookIcon";
import IconInstagram from "./InstaIcon";
import styles from "./Header.module.scss";
import { useTranslation } from "react-i18next";
import Logo from "../images/wypas.png";

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
					<img src={Logo} alt="Wypas Burger logo" className={styles.logo} />
					<a href="#menu" className={styles.menuButton}>
						{t("show_menu")}
					</a>
					{/* <div className={styles.icons}>
					<a
					className={styles.socialIcon}
					href="https://www.instagram.com/wypas_burger_foodtruck/"
					target="blank">
					<IconInstagram />
					</a>
					<a
					className={styles.socialIcon}
					href="https://www.facebook.com/p/Wypas-Burger-100063973456060/"
					target="blank">
					<IconFacebook />
					</a>
					</div> */}
				</div>
			</div>
		</header>
	);
}
