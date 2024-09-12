import "./App.scss";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Menu from "./components/Menu.jsx";
import MonthlyBurger from "./components/MonthlyBurger.jsx";
import Navbar from "./components/Navbar.jsx";
import News from "./components/News.jsx";

function App() {
	return (
		<>
			<Navbar />
			<Header />
			<News/>
			<Menu/>
			<MonthlyBurger  link={"https://www.facebook.com/photo/?fbid=939582584850848&set=a.465692378906540"} name={'francuz'}/>
			<Contact/>
			<Footer/>
		</>
	);
}

export default App;
