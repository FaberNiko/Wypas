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
					welcome: "Welcome to Wypas Burger!",
					home: "Home",
					about: "About us",
					reviews: "Reviews",
					headerTxt:
						"Welcome to Wypas Burger! Visit us and get to know the place created with passion for good food and interesting flavors, by two experienced chefs.",
					about1: `Our burgers have already been appreciated five times in the "Eagles of Gastronomy" plebiscite `,
					about2: `However, what we are most happy about is what you think about our burgers!`,
					about3: `And Your opinions and reviews say one thing - you like the taste! `,
					events: "Events",
					eventDesc: `One of our food trucks is waiting for you every day at Targowa st. in Kalwaria, but our second one is waiting to go to you so that he can decorate various events and events with burgers! If you are interested in renting our food truck for your event or have other cooperation proposals, please contact us by phone or e-mail. Rental conditions and costs are determined individually based on the details of the event.`,
					menu: "Menu",
					month_burger: "Burger of the Month",
					contact: "Contact",
					top_quality: "Top quality burgers",
					show_menu: "show menu",
					burgers: "Burgers",
					trimmings: "Trimmings",
					klasyk_desc:
						"200g beef or chicken / lettuce / pickles / tomato / red onion / crispy onion / remoulade sauce",
					cheddar_desc:
						"200g beef or chicken / cheddar / lettuce / pickles / tomato / red onion / crispy onion / remoulade sauce",
					bekon_desc:
						"200g beef or chicken / bacon / cheddar / lettuce / pickles / tomato / onion rings / remoulade sauce / BBQ sauce",
					meksyk_desc:
						"200g beef or chicken / bacon / cheddar / nachos / jalapeño / lettuce / pickles / tomato / red onion / remoulade sauce / sambal sauce",
					eldiablo_desc:
						"200g beef or chicken / bacon / cheddar / jalapeño / lettuce / pickles / tomato / red onion / crispy onion / sriracha sauce / habanero sauce",
					wypas_desc:
						"400g beef or 2x chicken / 2x bacon / 2x cheddar / lettuce / pickles / tomato / red onion / crispy onion / remoulade sauce / BBQ sauce",
					sztygar_desc:
						"200g beef or chicken / lettuce / pickles / tomato / red onion / crispy onion / remoulade sauce",
					jack_desc:
						"200g beef or chicken / 3x bacon / cheddar / breaded mozzarella / lettuce / pickles / tomato / red onion / Jack Daniel's cocktail sauce / BBQ sauce / crispy onion",
					juhas_desc:
						"200g beef or chicken / bacon / oscypek cheese / lettuce / pickles / tomato / red onion / remoulade sauce / cranberry jam",
					hiszpan_desc:
						"200g beef or chicken / cheddar / chorizo / nachos / lettuce / pickles / tomato / red onion / honey mustard sauce",
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
					desc: "October welcomes another seasonal proposition. This month our guest will be PUMPKIN 🎃 We have composed something that will surely be remembered by many of you 🍔 The above-mentioned October novelty is an amazing combination of baked pieces of seasonal pumpkin and original mayo sauce with ginger and curry 🟡 And classic beef or chicken , cheddar cheese, bacon, tomatoes, pickles, lettuce, red and roasted onion create compositions that will delight even the most demanding palates.",
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
					opinion: 'Google rating',
					pump: "Pumpkin"
				},
			},
			pl: {
				translation: {
					welcome: "Witamy w Wypas Burger!",
					home: "strona główna",
					about: "O nas",
					reviews: "Opinie",
					headerTxt:
						"Odwiedź nas i poznaj miejsce stworzone z pasji do dobrego jedzenia i ciekawych smaków, przez dwóch doświadczonych szefów kuchni.",
					about1: `Już pięciokrotnie nasze burgery zostały docenione w plebiscycie "Orły Gastronomii" `,
					about2: `Jednak najbardziej cieszy nas to, co Wy sądzicie o naszych burgerach! `,
					about3: `A Wasze opinie i recenzje mówią jedno - to Wam smakuje! `,
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
						"wołowina 200g lub kurczak / sałata / pikle / pomidor / cebula czerwona / prażona cebula / sos remulada",
					cheddar_desc:
						"wołowina 200g lub kurczak / cheddar / sałata / pikle / pomidor / cebula czerwona / prażona cebula / sos remulada",
					bekon_desc:
						"wołowina 200g lub kurczak / bekon / cheddar / sałata / pikle / pomidor / krążki cebulowe / sos remulada / sos BBQ",
					meksyk_desc:
						"wołowina 200g lub kurczak / bekon / cheddar / nachosy / jalapeño / sałata / pikle / pomidor / cebula czerwona / sos remulada / sos sambal",
					eldiablo_desc:
						"wołowina 200g lub kurczak / bekon / cheddar / jalapeño / sałata / pikle / pomidor / cebula czerwona / prażona cebula / sos sriracha / sos habanero",
					wypas_desc:
						"wołowina 400g lub 2x kurczak / 2x bekon / 2x cheddar / sałata / pikle / pomidor / cebula czerwona / prażona cebula / sos remulada / sos BBQ",
					sztygar_desc:
						"wołowina 200g lub kurczak / bekon / cheddar panierowany na czarno / sałata / pikle / pomidor / cebula czerwona / sos remulada / prażona cebula ",
					jack_desc:
						"wołowina 200g lub kurczak / 3x bekon / cheddar / panierowana mozarella / sałata / pikle / pomidor / cebula czerwona / prażona cebula / sos koktajlowy z Jack'iem Danielsem / sos BBQ ",
					juhas_desc:
						"wołowina 200g lub kurczak / bekon / oscypek / sałata / pikle / pomidor / cebula czerwona / sos remulada / konfitura żurawinowa",
					hiszpan_desc:
						"wołowina 200g lub kurczak / cheddar / chorizzo / nachosy / sałata / pikle / pomidor / cebula czerwona / sos miodowo-musztardowy",
					vege_desc:
						"kotlet buraczany / rukola / pomidor / cebula czerwona / nasiona słonecznika / sos żurawinowy / sos remulada",
					mini_burgers: "Mini burgery",
					mini_burgers_desc:
						"W opcji mini możecie zamówić każdego z naszych burgerów w dowolnej ilości z minimum 2 dniowym wyprzedzeniem",
					trimmings_text:
						"Do wyboru <0>bułka maślana</0> lub <1>bułka z sezamem</1>",
					belgian_fries: "frytki belgijskie",
					in_set: "w zestawie z burgerem",
					nuggets: "nuggetsy",
					sauces: "sos",
					sauces_type: "czosnkowy, majonezowy, BBQ, miodowo-musztardowy, ostry",
					drink: "napój",
					desc: "Październik wita kolejna sezonową propozycją. W tym miesiącu naszym gościem będzie DYNIA 🎃 Skomponowaliśmy coś, co utkwi  w pamięci napewno wielu z Was🍔 Wyżej wspomniana październikowa nowość, to niesamowite połączenie pieczonych kawałków sezonowej dyni oraz autorskiego sosu majo z dodatkiem imbiru i curry 🟡 A do tego klasycznie wołowina lub kurczak, ser cheddar, bekon, pomidory, pikle, sałata, cebula czerwona  oraz prażona tworzy kompozycje gwarantującą zachwyt nawet najbardziej wymagające podniebienia.",
					papper_bag: "torba papierowa",
					hours: "Godziny otwarcia",
					mon: "pn",
					thr: "cz",
					fr: "pt",
					sat: "sb",
					sun: "nd",
					read_more: "Czytaj więcej",
					other: "Pozostałe (poza burgerem WYPAS)",
					delivery: "Dowóz GRATIS dla zamówień od 50 zł do 10km",
					opinion: "Ocena na portalu Google",
					pump: "Dynia",
				},
			},
		},
		lng: "pl",
		fallbackLng: "pl",
		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
