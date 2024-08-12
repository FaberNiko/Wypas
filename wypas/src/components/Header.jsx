import IconFacebook from "./FacebookIcon";
import IconInstagram from "./InstaIcon";
import styles from "./Header.module.scss";

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.hero}>
				<div className={styles.overlay}>
					<div className={styles.content}>
						<h1>Wypas burger</h1>
						<p className={styles.subtitle}>Najwyższej jakości burgery!</p>
						<a href="#menu" className={styles.menuButton}>Zobacz menu</a>
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
					
					</div>
				</div>
			</div>
		</header>
	);
}
