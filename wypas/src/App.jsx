import "./App.scss";
import Header from "./components/Header.jsx";
import Menu from "./components/Menu.jsx";
import MonthlyBurger from "./components/MonthlyBurger.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
	return (
		<>
			<Navbar />
			<Header />
			<Menu/>
			<MonthlyBurger info={'Po lipcowej przerwie i powrocie waszej ulubionej TRUFLI, czas wyruszyć w kulinarną podróż i odkrywać nowe smaki , jakich jeszcze w naszym Wypasie nie było 🧳🗺️ W burgerze sierpnia, na którego wymyślenie mieliśmy naprawdę sporo czasu połączyliśmy starannie dobrane składniki, które tworzą naprawdę powalające połączenie 🤯😋 Już dzisiaj zapraszamy na… FRANCUZA..'} link={"https://www.facebook.com/photo/?fbid=939582584850848&set=a.465692378906540"} name={'francuz'}/>
		</>
	);
}

export default App;
