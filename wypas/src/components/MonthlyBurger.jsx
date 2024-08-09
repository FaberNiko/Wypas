import styles from "./MonthlyBurger.module.scss";
import monthImg from "../images/MonthBurger/francuzSm.jpg";

export default function MonthlyBurger({ name, info, link }) {
	return (
		<section id="monthly">
			<div className={styles.heroBg}>
				<div className={styles.heroShadow}></div>
				<h2 className={styles.sectionTitle}>burger miesiąca</h2>
				<div className={styles.content}>
					<img src={monthImg} alt="Photo of burger" />
					<div className={styles.infoContainer}>
						<p className={styles.name}>{name}</p>
						<p className={styles.info}>
							{info}
							<a href={link} target="blank">
								{" "}
								Czytaj dalej
							</a>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
