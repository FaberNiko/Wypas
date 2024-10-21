import "./App.scss";
import Contact from "./components/Contact.jsx";
import { Events } from "./components/Events.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Menu from "./components/Menu.jsx";
import MonthlyBurger from "./components/MonthlyBurger.jsx";
import Navbar from "./components/Navbar.jsx";
import News from "./components/News.jsx";
import { useEffect, useState } from "react";
import { About } from "./components/About.jsx";
import { Reviews } from "./components/Reviews.jsx";
function App() {
	
	return (
		<>
			<Navbar />
			<Header />
			<About />
			<News />
			<Menu />
			<Events />
			<MonthlyBurger />
			<Reviews/>
			<Contact />
			<Footer />
		</>
	);
}

export default App;
