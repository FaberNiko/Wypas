import styles from "./MenuList.module.scss";

export default function MenuList({title, desc , price}) {
	return (
		<ul>
			<li className={styles.listItem}>
				<p className={styles.title}>{title}</p>
				<p className={styles.description}>
					{desc}
				</p>
				<p className={styles.price}>{price}zł</p>
			</li>

		</ul>
	);
}
