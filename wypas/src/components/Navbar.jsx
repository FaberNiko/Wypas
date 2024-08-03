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
				<div className="logoContainer">
					<img src={logo} alt="Wypas burger logo" className="logo" />
				</div>
				<button className={`burgerBtn ${isClicked ?  'clicked' : ''}`} onClick={handleClick}>
					<span></span>
					<span></span>
					<span></span>
				</button>
			</nav>
			<div className={`navList ${menuOpen ? "active" : ""}`}>
				<ul>
					<li>
						<a href="#menu">menu</a>
					</li>
					<li>
						<a href="#news">aktualności</a>
					</li>
					<li>
						<a href="#gallery">galeria</a>
					</li>
					<li>
						<a href="#contact">kontakt</a>
					</li>
				</ul>
				<div className="languages">
					<div className="language">
						<img src={polish} alt="polish flag" />
						<p>PL</p>
					</div>
					<div className="language">
						<img src={eng} alt="english flag" />
						<p>ENG</p>
					</div>

					
				</div>
			</div>
		</div>
	);
}
