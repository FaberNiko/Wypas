import style from "./Trimmings.module.scss";

export default function Trimmings() {
	return (
		<section className={style.trimmingsSection}>
			<div className={style.container}>
				<ul className={style.trimmingsList}>
					<li className={style.trimmingsItem}>
						<p className={style.trimmingTitle}>frytki belgijskie</p>
						<p className={style.trimmingsPrice}>11zł</p>
						<p className={style.info}>w zestawie z burgerem</p>
						<p className={style.trimmingsPrice}>9zł</p>
					</li>
					<li className={style.trimmingsItem}>
						<p className={style.trimmingTitle}>nuggetsy</p>
						<p className={style.info}>(150g)</p>
						<p className={style.trimmingsPrice}>11zł</p>
					</li>
					<li className={style.trimmingsItem}>
						<p className={style.trimmingTitle}>SOS</p>
						<p className={style.info}>czosnkowy, majonezowy, BBQ, miodowo-musztardowy, ostry</p>
						<p className={style.trimmingsPrice}>2zł</p>
					</li>
					<li className={style.trimmingsItem}>
						<p className={style.trimmingTitle}>napój</p>
						<p className={style.trimmingsPrice}>7zł</p>
					</li>
					<li className={style.trimmingsItem}>
						<p className={style.trimmingTitle}>torba papierowa</p>
						<p className={style.trimmingsPrice}>1zł</p>
					</li>
				</ul>
			</div>
		</section>
	);
}
