import styles from "./MenuList.module.scss";
import { motion } from "framer-motion";

export default function MenuList({ title, desc, price, icons }) {
	return (
		<ul className={styles.list}>
			<motion.li
				className={styles.listItem}
				initial={{ opacity: 0, x: -30 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ type: "spring", duration: 1, delay: .2 }}>
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
			</motion.li>
		</ul>
	);
}
