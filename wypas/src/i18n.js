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
					menu: "Menu",
					month_burger: "Burger of the Month",
					contact: "Contact",
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
					trimmings_text:
						"Choice of <0>brioche bun</0> or <1>sesame seed bun</1>",
					belgian_fries: "belgian french fries",
					in_set: "in set with burger",
                    nuggets: "nuggets",
                    sauces: "sauces",
                    sauces_type: "garlic sauce, mayo sauce, BBQ sauce, honey & mustard sauce, hot sauce",
                    drink: "bottled drinks",
                    papper_bag: "papper bag"
				},
			},
			pl: {
				translation: {
					home: "strona główna",
					menu: "menu",
					month_burger: "burger miesiąca",
					contact: "kontakt",
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
					diablo_desc:
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
					trimmings_text:
						"Do wyboru <0>bułka maślana</0> lub <1>bułka z sezamem</1>",
					belgian_fries: "frytki belgijskie",
					in_set: "w zestawie z burgerem",
                    nuggets: "nuggetsy",
                    sauces: "sos",
                    sauces_type: "czosnkowy, majonezowy, BBQ, miodowo-musztardowy, ostry",
                    drink: "napój",
                     papper_bag: "torba papierowa"
				},
			},
		},
		fallbackLng: "pl", // Język domyślny
		interpolation: {
			escapeValue: false, // React samodzielnie escapuje wartości
		},
	});

export default i18n;
