import "../App.scss";
import logo from "../assets/logo.svg";
import eng from "../images/eng.png";
import polish from "../images/polish.png";
import { useEffect, useState, useRef } from "react";
import { Turn as Hamburger } from "hamburger-react";
import { useTranslation } from "react-i18next";

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const navListRef = useRef(null);
	const burgerBtnRef = useRef(null);
	const { i18n } = useTranslation();

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		const handleClickOutside = (event) => {
			if (
				navListRef.current &&
				!navListRef.current.contains(event.target) &&
				burgerBtnRef.current &&
				!burgerBtnRef.current.contains(event.target)
			) {
				setMenuOpen(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			window.removeEventListener("scroll", handleScroll);
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const handleClick = () => {
		setMenuOpen(!menuOpen);
	};

	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
		handleClick();
	  };

	  const {t} = useTranslation();
	return (
		<div>
			<nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
				<a href="#" className="logoContainer">
					<img src={logo} alt="Wypas burger logo" className="logo" />
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
					<li className="nav-ul__item">
						<a href="#" className="nav-item" onClick={handleClick}>
							{t('home')}
						</a>
					</li>
					<li className="nav-ul__item">
						<a href="#menu" className="nav-item" onClick={handleClick}>
							menu
						</a>
					</li>
					<li className="nav-ul__item">
						<a href="#monthly" className="nav-item" onClick={handleClick}>
							{t('month_burger')}
						</a>
					</li>
					<li className="nav-ul__item">
						<a href="#contact" className="nav-item" onClick={handleClick}>
							{t('contact')}
						</a>
					</li>
				</ul>
				<div className="languages">
					<button className="language" onClick={() => changeLanguage('pl')}>
						<img src={polish} alt="polish flag" />
						<p>PL</p>
					</button>
					<button className="language" onClick={() => changeLanguage('en')}>
						<img src={eng} alt="english flag" />
						<p>ENG</p>
					</button>
				</div>
			</div>
		</div>
	);
}
