import "../App.scss";
import logo from "../assets/logo.svg";
import eng from '../images/eng.png'
import polish from '../images/polish.png'
import { useState } from "react";
export default function Navbar() {
	const [isClicked, setIsClicked] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	const handleClick = () => {
		setIsClicked(!isClicked);
		setMenuOpen(!menuOpen);
	};
	return (
		<div>
			<nav>
				<a href='#'className="logoContainer">
					<img src={logo} alt="Wypas burger logo" className="logo" />
				</a>
				<button className={`burgerBtn ${isClicked ?  'clicked' : ''}`} onClick={handleClick}>
					<span></span>
					<span></span>
					<span></span>
				</button>
			</nav>
			<div className={`navList ${menuOpen ? "active" : ""}`}>
				<ul className="nav-ul">
					<li className="nav-ul__item">
						<a href="#menu" className="nav-item" onClick={handleClick}>menu</a>
					</li>
					<li className="nav-ul__item">
						<a href="#news" className="nav-item"  onClick={handleClick}>aktualności</a>
					</li>
					<li className="nav-ul__item">
						<a href="#gallery" className="nav-item"  onClick={handleClick}>galeria</a>
					</li>
					<li className="nav-ul__item">
						<a href="#contact" className="nav-item"  onClick={handleClick}>kontakt</a>
					</li>
				</ul>
				<div className="languages">
					<button className="language">
						<img src={polish} alt="polish flag" />
						<p>PL</p>
					</button>
					<button className="language">
						<img src={eng} alt="english flag" />
						<p>ENG</p>
					</button>

					
				</div>
			</div>
		</div>
	);
}
