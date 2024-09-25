// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources: {
			en: {
				translation: {
					home: "Home",
					about: "About us",
					headerTxt:
						"Welcome to Wypas Burger! Visit us and get to know the place created with passion for good food and interesting flavors, by two experienced chefs.",
					events: "Events",
					eventDesc: `One of our food trucks is waiting for you every day at ul. Targowa in Kalwaria, but our second one is waiting to go to you so that he can decorate various events and events with burgers! If you are interested in renting our food truck for your event or have other cooperation proposals, please contact us by phone or e-mail. Rental conditions and costs are determined individually based on the details of the event.`,
					menu: "Menu",
					month_burger: "Burger of the Month",
					contact: "Contact",
					top_quality: "Top quality burgers",
					show_menu: "show menu",
					burgers: "Burgers",
					trimmings: "Trimmings",
					klasyk_desc:
						"200g beef / lettuce / pickles / tomato / red onion / crispy onion / remoulade sauce",
					cheddar_desc:
						"200g beef / cheddar / lettuce / pickles / tomato / red onion / crispy onion / remoulade sauce",
					bekon_desc:
						"200g beef / bacon / cheddar / lettuce / pickles / tomato / onion rings / remoulade sauce / BBQ sauce",
					meksyk_desc:
						"200g beef / bacon / cheddar / nachos / jalapeño / lettuce / pickles / tomato / red onion / remoulade sauce / sambal sauce",
					eldiablo_desc:
						"200g beef / bacon / cheddar / jalapeño / lettuce / pickles / tomato / red onion / crispy onion / sriracha sauce / habanero sauce",
					wypas_desc:
						"400g beef / 2x bacon / 2x cheddar / lettuce / pickles / tomato / red onion / crispy onion / remoulade sauce / BBQ sauce",
					sztygar_desc:
						"200g beef / lettuce / pickles / tomato / red onion / crispy onion / remoulade sauce",
					jack_desc:
						"200g beef / 3x bacon / cheddar / breaded mozzarella / lettuce / pickles / tomato / red onion / Jack Daniel's cocktail sauce / BBQ sauce / crispy onion",
					juhas_desc:
						"200g beef / bacon / oscypek cheese / lettuce / pickles / tomato / red onion / remoulade sauce / cranberry jam",
					hiszpan_desc:
						"200g beef / cheddar / chorizo / nachos / lettuce / pickles / tomato / red onion / honey mustard sauce",
					vege_desc:
						"beet patty / arugula / tomato / red onion / sunflower seeds / cranberry sauce / remoulade sauce",
					mini_burgers: "Mini burgers",
					mini_burgers_desc:
						"In the mini option, you can order any of our burgers in any quantity at least 2 days in advance",
					trimmings_text:
						"Choice of <0>brioche bun</0> or <1>sesame seed bun</1>",
					belgian_fries: "belgian french fries",
					in_set: "in set with burger",
					nuggets: "nuggets",
					sauces: "sauces",
					sauces_type:
						"garlic sauce, mayo sauce, BBQ sauce, honey & mustard sauce, hot sauce",
					drink: "bottled drinks",
					desc: "Another month, another seasonal proposition from Wypas 🍔 The end of summer is just around the corner, so we want to serve you a combination whose taste is inextricably associated with this change of seasons, and in our original interpretation it creates a really interesting combination 🌞🍂 Here's the September Burger, i.e. PLUM 💜",
					papper_bag: "papper bag",
					hours: "Opening hours",
					mon: "mon",
					thr: "thu",
					fr: "fr",
					sat: "sat",
					sun: "sun",
					read_more: "Read more",
					other: "Other burgers (beside WYPAS)",
					delivery: "FREE delivery for orders from PLN 50 up to 10 km",
					
				},
			},
			pl: {
				translation: {
					home: "strona główna",
					about: "O nas",
					headerTxt:
						"Witamy w Wypas Burger! Odwiedź nas i poznaj miejsce stworzone z pasji do dobrego jedzenia i ciekawych smaków, przez dwóch doświadczonych szefów kuchni.",
					events: "Eventy",
					eventDesc: `Jeden z naszych food trucków codziennie czeka na Was na Ul. Targowej w Kalwarii, jednak nasz drugi czeka aby wyruszyć do was, by móc uświetnić burgerami najróżniejsze wydarzenia i imprezy! Jeśli jesteś zainteresowany wynajęciem naszego food trucka na swój event lub masz inne propozycje współpracy zapraszamy do kontaktu telefonicznego lub mailowego. Warunki i koszty wynajmu ustalane są indywidualnie w oparciu o szczegóły  wydarzenia.`,
					menu: "menu",
					month_burger: "burger miesiąca",
					contact: "kontakt",
					top_quality: "Najwyższej jakości burgery",
					show_menu: "zobacz menu",
					burgers: "Burgery",
					trimmings: "Dodatki",
					klasyk_desc:
						"wołowina 200g / sałata / pikle / pomidor / cebula czerwona / prażona cebula / sos remulada",
					cheddar_desc:
						"wołowina 200g / cheddar / sałata / pikle / pomidor / cebula czerwona / prażona cebula / sos remulada",
					bekon_desc:
						"wołowina 200g / bekon / cheddar / sałata / pikle / pomidor / krążki cebulowe / sos remulada / sos BBQ",
					meksyk_desc:
						"wołowina 200g / bekon / cheddar / nachosy / jalapeño / sałata / pikle / pomidor / cebula czerwona / sos remulada / sos sambal",
					eldiablo_desc:
						"wołowina 200g / bekon / cheddar / jalapeño / sałata / pikle / pomidor / cebula czerwona / prażona cebula / sos sriracha / sos habanero",
					wypas_desc:
						"wołowina 400g / 2x bekon / 2x cheddar / sałata / pikle / pomidor / cebula czerwona / prażona cebula / sos remulada / sos BBQ",
					sztygar_desc:
						"wołowina 200g / sałata / pikle / pomidor / cebula czerwona / prażona cebula / sos remulada",
					jack_desc:
						"wołowina 200g / 3x bekon / cheddar / panierowana mozarella / sałata / pikle / pomidor / cebula czerwona / sos koktajlowy z Jack'iem Danielsem / sos BBQ / prażona cebula",
					juhas_desc:
						"wołowina 200g / bekon / oscypek / sałata / pikle / pomidor / cebula czerwona / sos remulada / konfitura żurawinowa",
					hiszpan_desc:
						"wołowina 200g / cheddar / chorizzo / nachosy / sałata / pikle / pomidor / cebula czerwona / sos miodowo-musztardowy",
					vege_desc:
						"kotlet buraczany / rukola / pomidor / cebula czerwona / nasiona słonecznika / sos żurawinowy / sos remulada",
					mini_burgers: "Mini burgery",
					mini_burgers_desc:
						"W opcji mini możecie zamówić każdego z naszych burgerów w dowolnej ilości z minimum 2 dnjiowych wyprzedzeniem",
					trimmings_text:
						"Do wyboru <0>bułka maślana</0> lub <1>bułka z sezamem</1>",
					belgian_fries: "frytki belgijskie",
					in_set: "w zestawie z burgerem",
					nuggets: "nuggetsy",
					sauces: "sos",
					sauces_type: "czosnkowy, majonezowy, BBQ, miodowo-musztardowy, ostry",
					drink: "napój",
					desc: "Kolejny miesiąc, kolejna sezonowa propozycja od Wypasa 🍔 Koniec lata tuż za rogiem, więc chcemy wam zaserwować połączenie, którego smak nieodłącznie kojarzy się z tą zmianą pór roku, a w naszej autorskiej interpretacji tworzy naprawdę ciekawe połączenie 🌞🍂 Przed wami Burger września, czyli ŚLIWKA 💜",
					papper_bag: "torba papierowa",
					hours: "Godziny otwarcia",
					mon: "pn",
					thr: "cz",
					fr: "pt",
					sat: "sb",
					sun: "nd",
					read_more: "Czytaj więcej",
					other: "Pozostałe (poza burgerem WYPAS)",
					delivery: "Dawóz GRATIS dla zamówień od 50 zł do 10km",
				},
			},
		},
		fallbackLng: "pl",
		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
