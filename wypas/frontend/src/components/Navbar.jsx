import "../App.scss";
import logo from "../assets/logo.svg";
import eng from "../images/eng.png";
import polish from "../images/polish.png";
import { useEffect, useState, useRef } from "react";
import { Turn as Hamburger } from "hamburger-react";
import { useTranslation } from "react-i18next";
import phone from "../images/phone.png";
import { motion } from "framer-motion";

export default function Navbar(isScrolled) {
	const [menuOpen, setMenuOpen] = useState(false);
	const navListRef = useRef(null);
	const burgerBtnRef = useRef(null);
	const { i18n } = useTranslation();

	const handleClick = () => {
		setMenuOpen(!menuOpen);
	};

	const changeLanguage = lng => {
		i18n.changeLanguage(lng);
		handleClick();
	};

	const { t } = useTranslation();
	return (
		<div>
			<nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
				<a href="#" className="logoContainer">
					<img src={logo} alt="Wypas burger logo" className="logo" />
				</a>
				<a href="tel:+48730925570" className="phoneContainer">
					<a href="tel:+48730925570" className="number">
						+48 730 925 570
					</a>
					<img className="phoneIcon" src={phone} alt="Phone icon" />
				</a>
				<div className="burgerBtn" ref={burgerBtnRef}>
					<Hamburger
						direction="right"
						duration={0.5}
						toggled={menuOpen}
						toggle={setMenuOpen}
						color="#fff"
					/>
				</div>
			</nav>
			<div className={`navList ${menuOpen ? "active" : ""}`} ref={navListRef}>
				<ul className="nav-ul">
					<motion.li
						className="nav-ul__item"
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ type: "spring", duration: 2 }}>
						<a href="#" className="nav-item" onClick={handleClick}>
							{t("home")}
						</a>
					</motion.li>
					<motion.li
						className="nav-ul__item"
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ type: "spring", duration: 2 }}>
						<a href="#about" className="nav-item" onClick={handleClick}>
							{t("about")}
						</a>
					</motion.li>
					<motion.li
						className="nav-ul__item"
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ type: "spring", duration: 2 }}>
						<a href="#events" className="nav-item" onClick={handleClick}>
							{t("events")}
						</a>
					</motion.li>
					<motion.li
						className="nav-ul__item"
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ type: "spring", duration: 2 }}>
						<a href="#menu" className="nav-item" onClick={handleClick}>
							menu
						</a>
					</motion.li>
					<motion.li
						className="nav-ul__item"
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ type: "spring", duration: 2 }}>
						<a href="#monthly" className="nav-item" onClick={handleClick}>
							{t("month_burger")}
						</a>
					</motion.li>
					<motion.li
						className="nav-ul__item"
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ type: "spring", duration: 2 }}>
						<a href="#contact" className="nav-item" onClick={handleClick}>
							{t("contact")}
						</a>
					</motion.li>
				</ul>
				<div className="languages">
					<button className="language" onClick={() => changeLanguage("pl")}>
						<img src={polish} alt="polish flag" />
						<p>PL</p>
					</button>
					<button className="language" onClick={() => changeLanguage("en")}>
						<img src={eng} alt="english flag" />
						<p>ENG</p>
					</button>
				</div>
			</div>
		</div>
	);
}
