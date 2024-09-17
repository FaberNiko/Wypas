import styles from "./Contact.module.scss";
import IconFacebook from "./FacebookIcon";
import IconInstagram from "./InstaIcon";
import logo from '../images/wypas.png'
import { useTranslation } from "react-i18next";

export default function Contact() {
	const {t} = useTranslation();
	return (
		<section id="contact">
			<h2 className='sectionTitle'>{t('contact')}</h2>
			<div className={styles.container}>
			
				<img src={logo} className={styles.logo}></img>
				<div className={styles.info}>
					<p className={styles.infoItem}>tel: +48 730 925 570</p>
					<p className={styles.infoItem}>email:</p>
					<p className={styles.infoItem}>burgerwypas@gmail.com</p>
					<p className={styles.infoItem}>ul. targowa 2</p>
					<p className={styles.infoItem}>kalwaria zebrzydowska</p>
				</div>

                <div className={styles.hours}>
							<p className={styles.listName}>{t('hours')}</p>
							<ul>
								<li>{t('mon')} - {t('thr')} 12:00 - 21:00</li>
								<li>{t('fr')} - {t('sat')} 12:00 - 22:00</li>
								<li>{t('sun')} 14:00 - 21:00</li>
							</ul>
						</div>
			</div>
				<div className={styles.icons}>
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
				</div>
		</section>
	);
}
