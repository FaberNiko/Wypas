import styles from "./MenuList.module.scss";

export default function MenuList() {
	return (
		<ul>
			<li className={styles.listItem}>
				<p className={styles.title}>KLASYK</p>
				<p className={styles.description}>
					wołowina 200g/ sałata/ pikle/ pomidor/ cebula czerwona/ prażona
					cebula/ sos remulada
				</p>
				<p className={styles.price}>23zł</p>
			</li>
			<li className={styles.listItem}>
				<p className={styles.title}>CHEDDAR</p>
				<p className={styles.description}>
					wołowina 200g/ cheddar/ sałata/ pikle/ pomidor/ cebula czerwona/
					prażona cebula/ sos remulada
				</p>
				<p className={styles.price}>25zł</p>
			</li>
			<li className={styles.listItem}>
				<p className={styles.title}>BEKON</p>
				<p className={styles.description}>
					wołowina 200g/ bekon/ cheddar/ sałata/ pikle/ pomidor/ krążki
					cebulowe/ sos remulada/ sos BBQ
				</p>
				<p className={styles.price}>28zł</p>
			</li>
			<li className={styles.listItem}>
				<p className={styles.title}>MEKSYK</p>
				<p className={styles.description}>
					wołowina 200g/ bekon/ cheddar/ nachosy/ jalapeño/ sałata/ pikle/
					pomidor/ cebula czerwona/ sos remulada/ sos sambal
				</p>
				<p className={styles.price}>27zł</p>
			</li>
			<li className={styles.listItem}>
				<p className={styles.title}>EL DIABLO</p>
				<p className={styles.description}>
					wołowina 200g/ bekon/ cheddar/ jalapeño/ sałata/ pikle/ pomidor/
					cebula czerwona/ prażona cebula/ sos sriracha/ sos habanero
				</p>
				<p className={styles.price}>26zł</p>
			</li>
			<li className={styles.listItem}>
				<p className={styles.title}>WYPAS</p>
				<p className={styles.description}>
					wołowina 400g/ 2x bekon/ 2x cheddar/ sałata/ pikle/ pomidor/ cebula
					czerwona/ prażona cebula/ sos remulada/ sos BBQ
				</p>
				<p className={styles.price}>35zł</p>
			</li>
			<li className={styles.listItem}>
				<p className={styles.title}>SZTYGAR</p>
				<p className={styles.description}>
					wołowina 200g/ bekon/ cheddar/ panierowany na czarno cheddar/ sałata/
					pikle/ pomidor/ cebula czerwona/ sos remulada/ prażona cebula
				</p>
				<p className={styles.price}>29zł</p>
			</li>
			<li className={styles.listItem}>
				<p className={styles.title}>JACK</p>
				<p className={styles.description}>
					wołowina 200g/ 3x bekon/ cheddar/ panierowana mozarella/ sałata/
					pikle/ pomidor/ cebula czerwona/ sos koktajlowy z Jack&apos;iem
					Danielsem/ sos BBQ/ prażona cebula
				</p>
				<p className={styles.price}>29zł</p>
			</li>
			<li className={styles.listItem}>
				<p className={styles.title}>JUHAS</p>
				<p className={styles.description}>
					wołowina 200g/ bekon/ oscypek/ sałata/ pikle/ pomidor/ cebula
					czerwona/ sos remulada/ konfitura żurawinowa
				</p>
				<p className={styles.price}>29zł</p>
			</li>
			<li className={styles.listItem}>
				<p className={styles.title}>HISZPAN</p>
				<p className={styles.description}>
					wołowina 200g/ cheddar/ chorizzo/ nachosy/ sałata/ pikle/ pomidor/
					cebula czerwona/ sos miodowo-musztardowy
				</p>
				<p className={styles.price}>29zł</p>
			</li>
			<li className={styles.listItem}>
				<p className={styles.title}>VEGE BURAK</p>
				<p className={styles.description}>
					kotlet buraczany/ rukola/ pomidor/ cebula czerwona/ nasiona
					słonecznika/ sos żurawinowy/ sos remulada
				</p>
				<p className={styles.price}>23zł</p>
			</li>
			<li className={styles.listItem}>
				<p className={styles.title}>BURGER MIESIĄCA</p>
				<p className={styles.price}>29zł</p>
			</li>
		</ul>
	);
}
