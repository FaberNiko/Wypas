import styles from "./MenuList.module.scss";

export default function MenuList({ title, desc, price, icons }) {
	return (
		<ul className={styles.list}>
			<li className={styles.listItem}>
				<p className={styles.title}>{title}</p>
				<div className={styles.menuIcons}>
					{icons &&
						icons.map((icon, index) => (
							<img key={index} src={icon} alt="icon" className={styles.icon} />
						))}
				</div>
				<p className={styles.description}>{desc}</p>
				<p className={styles.price}>{price}zł</p>
				<div className={styles.menuIcons}></div>
			</li>
		</ul>
	);
}
