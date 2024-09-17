import "./App.scss";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Menu from "./components/Menu.jsx";
import MonthlyBurger from "./components/MonthlyBurger.jsx";
import Navbar from "./components/Navbar.jsx";
import News from "./components/News.jsx";
import { useEffect, useState } from "react";



function App() {
	const [isScrolled, setIsScrolled] = useState(false);
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
	return (
		<>
			<Navbar isScrolled={isScrolled}/>
			<Header />
			<News/>
			<Menu/>
			<MonthlyBurger />
			<Contact/>
			<Footer/>
		</>
	);
}

export default App;
