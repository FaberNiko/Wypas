import styles from "./Menu.module.scss";
import MenuList from "./MenuList";
import chili from "../images/chili.png";
import vegan from "../images/leaf.png";
import { useState } from "react";
import Trimmings from "./Trimmings.jsx";
import { useTranslation,Trans } from "react-i18next";

export default function Menu() {
	const { t } = useTranslation();
	const [selectedTopic, setSelectedTopic] = useState("burgers");

	function handleSelect(selectedTopic) {
		setSelectedTopic(selectedTopic);
	}

	let tabContent = (
		<>
			<div className={styles.menuItems}>
				<MenuList title={"KLASYK"} desc={t("klasyk_desc")} price={23} />
				<MenuList title={"CHEDDAR"} desc={t("cheddar_desc")} price={25} />
				<MenuList title={"BEKON"} desc={t("bekon_desc")} price={28} />
				<MenuList
					title={"MEKSYK"}
					desc={t("meksyk_desc")}
					price={27}
					icons={[chili, chili]}></MenuList>
				<MenuList
					title={"EL DIABLO"}
					desc={t("eldiablo_desc")}
					price={26}
					icons={[chili, chili, chili]}
				/>
				<MenuList title={"WYPAS"} desc={t("wypas_desc")} price={35} />
				<MenuList title={"SZTYGAR"} desc={t("sztygar_desc")} price={29} />
				<MenuList title={"JACK"} desc={t("jack_desc")} price={29} />
				<MenuList title={"JUHAS"} desc={t("juhas_desc")} price={29} />
				<MenuList title={"HISZPAN"} desc={t("hiszpan_desc")} price={29} />
				<MenuList
					title={"VEGE BURAK"}
					desc={t("vege_desc")}
					price={23}
					icons={[vegan]}
				/>
				<MenuList title={t("month_burger")} price={29} />
			</div>
			<p className={styles.trimmings} >
				<Trans i18nKey="trimmings_text">
				<span>buttered roll</span>
				<span>sesame seed roll</span>
				</Trans>
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
				<button
					className={` ${styles.button} ${
						selectedTopic === "burgers" ? `${styles.active}` : ""
					}`}
					onClick={() => handleSelect("burgers")}>
					{t("burgers")}
				</button>
				<button
					className={`${styles.button} ${
						selectedTopic === "trimmings" ? `${styles.active}` : ""
					}`}
					onClick={() => handleSelect("trimmings")}>
					{t("trimmings")}
				</button>
			</div>
			{tabContent}
		</section>
	);
}
