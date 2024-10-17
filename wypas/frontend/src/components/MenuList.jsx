import styles from "./MenuList.module.scss";
import { motion } from "framer-motion";

export default function MenuList({ title, desc, price, icons, miniPrice, style }) {
	return (
		<ul className={styles.list}>
			<li className={styles.listItem} style={style}>
				<p className={styles.title} >{title}</p>
				<div className={styles.menuIcons}>
					{icons &&
						icons.map((icon, index) => (
							<img key={index} src={icon} alt="icon" className={styles.icon} />
						))}
				</div>
				<p className={styles.description}>{desc}</p>
				<p className={styles.price}>{price}zł</p>
				{miniPrice && <p className={styles.price}>{miniPrice}zł</p>}
				<div className={styles.menuIcons}></div>
			</li>
		</ul>
	);
}
