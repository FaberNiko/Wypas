import styles from "./MonthlyBurger.module.scss";
import { useTranslation } from "react-i18next";
import useFetch from "../hooks/useFetch";
import imageUrl from "../images/month.jpg";
import { motion } from "framer-motion";
export default function MonthlyBurger({ link }) {
	const { i18n, t } = useTranslation(); // Pobieranie funkcji tłumaczeń oraz informacji o języku
	const locale = i18n.language;
	const {
		loading,
		error,
		data = [],
	} = useFetch(
		`http://localhost:1337/api/burgers?populate=Image&locale=${locale}`
	);

	console.log(data);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Coś poszło nie tak</p>;

	const heroImageUrl =
		data.length > 0
			? `http://localhost:1337${data[0].attributes.Image.data.attributes.url}`
			: "";

	return (
		<section id="monthly">
			<div
				className={styles.heroBg}
				style={{ backgroundImage: `url(${heroImageUrl})` }}>
				<div className={styles.heroShadow}></div>
				<motion.h2
					className="sectionTitle"
					initial={{ opacity: 0, x: 30 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ type: "spring" }}>
					{t("month_burger")}
				</motion.h2>
				{data.map(burger => {
					const imageUrl = `http://localhost:1337${burger.attributes.Image.data.attributes.url}`;

					return (
						<div key={burger.id} className={styles.content}>
							<motion.img
								src={heroImageUrl}
								alt="Photo of monthly burger"
								initial={{ opacity: 0, x: -30 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ type: "tween" }}
							/>
							<div className={styles.infoContainer}>
								<p className={styles.name}> {burger.attributes.Title}</p>

								<motion.p
									className={styles.info}
									initial={{ opacity: 0, x: 30 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ type: "tween" }}>
									{burger.attributes.Description}
									<br />
									<a
										href="https://www.facebook.com/photo/?fbid=984139057061867&set=a.465692378906540"
										target="_blank"
										rel="noopener noreferrer">
										{" "}
										{t("read_more")}
									</a>
								</motion.p>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}
