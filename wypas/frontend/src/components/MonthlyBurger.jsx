import styles from "./MonthlyBurger.module.scss";
import { useTranslation } from "react-i18next";
import useFetch from "../hooks/useFetch";
import imageUrl from "../images/sliwka.jpg";
import { motion } from "framer-motion";
export default function MonthlyBurger({ link }) {
	const { i18n, t } = useTranslation(); // Pobieranie funkcji tłumaczeń oraz informacji o języku
	// const locale = i18n.language;
	// const {
	// 	loading,
	// 	error,
	// 	data = [],
	// } = useFetch(`http://localhost:1337/api/burgers?populate=*&locale=${locale}`);

	// if (loading) return <p>Loading...</p>;
	// if (error) return <p>Coś poszło nie tak</p>;

	// const heroImageUrl = data.length > 0
	// ? `http://localhost:1337${data[0].attributes.Image.data.attributes.url}`
	// : '';

	return (
		<section id="monthly">
			<div className={styles.heroBg}>
				{/* style={{ backgroundImage: `url(${heroImageUrl})` }} */}
				<div className={styles.heroShadow}></div>
				<motion.h2
					className="sectionTitle"
					initial={{ opacity: 0, x: 30 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ type: "spring" }}>
					{t("month_burger")}
				</motion.h2>
				{/* {data.map(burger => { */}
				{/* // const imageUrl = `http://localhost:1337${burger.attributes.Image.data.attributes.url}`; */}

				{/* return ( */}
				<div className={styles.content}>
					{/* key={burger.id} */}
					<motion.img
						src={imageUrl}
						alt="Photo of burger"
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ type: "spring" }}
					/>
					<div className={styles.infoContainer}>
						<p className={styles.name}></p>
						{/* //{burger.attributes.Title}// */}
						<motion.p
							className={styles.info}
							initial={{ opacity: 0, x: 30 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ type: "spring" }}>
							{t("desc")}
							<br />
							{/* {burger.attributes.Description.substring(0, 200)}... */}
							<a href={link} target="_blank" rel="noopener noreferrer">
								{" "}
								{t("read_more")}
							</a>
						</motion.p>
					</div>
				</div>
				{/* ); */}
				{/* })} */}
			</div>
		</section>
	);
}