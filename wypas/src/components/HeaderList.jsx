import styles from './Header.module.scss'

export default function HeaderList() {
	return (
		<nav className={styles.nav}>
			<ul>
				<li>
					<a href="#">menu</a>
				</li>
				<li>
					<a href="#">aktualności</a>
				</li>
				<li>
					<a href="#">galeria</a>
				</li>
				<li>
					<a href="#" x>
						kontakt
					</a>
				</li>
			</ul>
		</nav>
	);
}
