import styles from './Menu.module.scss'
import MenuList from './MenuList'

export default function Menu() {
    return (
        <section id="menu" className={styles.menu}>
            <div className={styles.menuHero}>
                <div className={styles.overlay}/>
                    <h2 className={styles.menuTitle}>menu</h2>
                    <MenuList  title={'klasyk'} desc={'wołowina 200g/ sałata/ pikle/ pomidor/ cebula czerwona/ prażona cebula/ sos remulada'} price={23}/>
                    <MenuList title={'CHEDDAR'} desc={'wołowina 200g/ cheddar/ sałata/ pikle/ pomidor/ cebula czerwona/ prażona cebula/ sos remulada'} price={25}/>
                    <MenuList title={'BEKON'} desc={'wołowina 200g/ bekon/ cheddar/ sałata/ pikle/ pomidor/ krążki cebulowe/ sos remulada/ sos BBQ'} price={28}/>
                    <MenuList title={'MEKSYK'} desc={'wołowina 200g/ bekon/ cheddar/ nachosy/ jalapeño/ sałata/ pikle/ pomidor/ cebula czerwona/ sos remulada/ sos sambal'} price={27}/>
                    <MenuList title={'EL DIABLO'} desc={'wołowina 200g/ bekon/ cheddar/ jalapeño/ sałata/ pikle/ pomidor/cebula czerwona/ prażona cebula/ sos sriracha/ sos habanero'} price={26}/>
                    <MenuList title={'WYPAS'} desc={'wołowina 400g/ 2x bekon/ 2x cheddar/ sałata/ pikle/ pomidor/ cebula czerwona/ prażona cebula/ sos remulada/ sos BBQ'} price={35}/>
                    <MenuList title={'SZTYGAR'} desc={'wołowina 200g/ sałata/ pikle/ pomidor/ cebula czerwona/ prażona cebula/ sos remulada'} price={29}/>
                    <MenuList title={'JACK'} desc={'wołowina 200g/ 3x bekon/ cheddar/ panierowana mozarella/ sałata/pikle/ pomidor/ cebula czerwona/ sos koktajlowy z Jack&apos;iem Danielsem/ sos BBQ/ prażona cebula'} price={29}/>
                    <MenuList title={'JUHAS'} desc={'wołowina 200g/ bekon/ oscypek/ sałata/ pikle/ pomidor/ cebula czerwona/ sos remulada/ konfitura żurawinowa'} price={29}/>
                    <MenuList title={'HISZPAN'} desc={'wołowina 200g/ cheddar/ chorizzo/ nachosy/ sałata/ pikle/ pomidor/ cebula czerwona/ sos miodowo-musztardowy'} price={29}/>
                    <MenuList title={'VEGE BURAK'} desc={'kotlet buraczany/ rukola pomidor/ cebula czerwona/ nasiona słonecznika/ sos żurawinowy/ sos remulada'} price={23}/>
                    <MenuList title={'BURGER MIESIĄCA'} price={29}/>
            </div>
        </section>
    )
}