import styles from "./Menu.module.scss";
import MenuList from "./MenuList";
import chili from "../images/chili.png";
import vegan from "../images/leaf.png";
import { useState } from "react";
import Trimmings from "./Trimmings.jsx";

export default function Menu() {
	const [selectedTopic, setSelectedTopic] = useState("burgers");

	function handleSelect(selectedTopic) {
		setSelectedTopic(selectedTopic);
	}

	let tabContent = (
		<>
			<div className={styles.menuItems}>
				<MenuList
					title={"klasyk"}
					desc={
						"wołowina 200g/ sałata/ pikle/ pomidor/ cebula czerwona/ prażona cebula/ sos remulada"
					}
					price={23}
				/>
				<MenuList
					title={"CHEDDAR"}
					desc={
						"wołowina 200g/ cheddar/ sałata/ pikle/ pomidor/ cebula czerwona/ prażona cebula/ sos remulada"
					}
					price={25}
				/>
				<MenuList
					title={"BEKON"}
					desc={
						"wołowina 200g/ bekon/ cheddar/ sałata/ pikle/ pomidor/ krążki cebulowe/ sos remulada/ sos BBQ"
					}
					price={28}
				/>
				<MenuList
					title={"MEKSYK"}
					desc={
						"wołowina 200g/ bekon/ cheddar/ nachosy/ jalapeño/ sałata/ pikle/ pomidor/ cebula czerwona/ sos remulada/ sos sambal"
					}
					price={27}
					icons={[chili, chili]}></MenuList>
				<MenuList
					title={"EL DIABLO"}
					desc={
						"wołowina 200g/ bekon/ cheddar/ jalapeño/ sałata/ pikle/ pomidor/cebula czerwona/ prażona cebula/ sos sriracha/ sos habanero"
					}
					price={26}
					icons={[chili, chili, chili]}
				/>
				<MenuList
					title={"WYPAS"}
					desc={
						"wołowina 400g/ 2x bekon/ 2x cheddar/ sałata/ pikle/ pomidor/ cebula czerwona/ prażona cebula/ sos remulada/ sos BBQ"
					}
					price={35}
				/>
				<MenuList
					title={"SZTYGAR"}
					desc={
						"wołowina 200g/ sałata/ pikle/ pomidor/ cebula czerwona/ prażona cebula/ sos remulada"
					}
					price={29}
				/>
				<MenuList
					title={"JACK"}
					desc={
						"wołowina 200g/ 3x bekon/ cheddar/ panierowana mozarella/ sałata/pikle/ pomidor/ cebula czerwona/ sos koktajlowy z Jack&apos;iem Danielsem/ sos BBQ/ prażona cebula"
					}
					price={29}
				/>
				<MenuList
					title={"JUHAS"}
					desc={
						"wołowina 200g/ bekon/ oscypek/ sałata/ pikle/ pomidor/ cebula czerwona/ sos remulada/ konfitura żurawinowa"
					}
					price={29}
				/>
				<MenuList
					title={"HISZPAN"}
					desc={
						"wołowina 200g/ cheddar/ chorizzo/ nachosy/ sałata/ pikle/ pomidor/ cebula czerwona/ sos miodowo-musztardowy"
					}
					price={29}
				/>
				<MenuList
					title={"VEGE BURAK"}
					desc={
						"kotlet buraczany/ rukola pomidor/ cebula czerwona/ nasiona słonecznika/ sos żurawinowy/ sos remulada"
					}
					price={23}
					icons={[vegan]}
				/>
				<MenuList title={"BURGER MIESIĄCA"} price={29} />
			</div>
			<p className={styles.trimmings}>
				Do wyboru <span>bułka maślana</span> lub<span> bułka z sezamem</span>
			</p>
		</>
	);

	if (selectedTopic === "trimmings") {
		tabContent = <Trimmings />;
	}

	return (
		<section id="menu" className={styles.menu}>
			<h2 className={styles.menuTitle}>menu</h2>
			<div className={styles.buttons}>
				<button className={` ${styles.button} ${selectedTopic === 'burgers' ? `${styles.active}` : ''}`}onClick={() => handleSelect("burgers")}>Burgery</button>
				<button className={`${styles.button} ${selectedTopic === 'trimmings' ? `${styles.active}` : ''}`} onClick={() => handleSelect("trimmings")}>Dodatki</button>
			</div>
			{tabContent}
		</section>
	);
}
