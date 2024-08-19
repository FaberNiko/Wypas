import styles from "./MonthlyBurger.module.scss";
import monthImg from "../images/MonthBurger/francuzSm.jpg";
import { useTranslation } from "react-i18next";

export default function MonthlyBurger({ name, link }) {
	const {t} = useTranslation()
	return (
		<section id="monthly">
			<div className={styles.heroBg}>
				<div className={styles.heroShadow}></div>
				<h2 className={styles.sectionTitle}>{t('month_burger')}</h2>
				<div className={styles.content}>
					<img src={monthImg} alt="Photo of burger" />
					<div className={styles.infoContainer}>
						<p className={styles.name}>{name}</p>
						<p className={styles.info}>
							{t('month_info')}
							<a href={link} target="blank">
								{" "}
								{t('read_more')}
							</a>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
