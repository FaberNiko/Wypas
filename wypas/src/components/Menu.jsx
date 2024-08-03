import styles from './Menu.module.scss'
import MenuList from './MenuList'

export default function Menu() {
    return (
        <section id="menu" className={styles.menu}>
            <div className={styles.menuHero}>
                <div className={styles.overlay}/>
                    <h2 className={styles.menuTitle}>menu</h2>
                    <MenuList/>
                    
            </div>
        </section>
    )
}