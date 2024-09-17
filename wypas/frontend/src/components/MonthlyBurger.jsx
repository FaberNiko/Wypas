import styles from "./MonthlyBurger.module.scss";
import { useTranslation } from "react-i18next";
import useFetch from "../hooks/useFetch";

export default function MonthlyBurger({ link }) {
	const { i18n, t } = useTranslation(); // Pobieranie funkcji tłumaczeń oraz informacji o języku
	const locale = i18n.language; 
	const {
		loading,
		error,
		data = [],
	} = useFetch(`http://localhost:1337/api/burgers?populate=*&locale=${locale}`);


	if (loading) return <p>Loading...</p>;
	if (error) return <p>Coś poszło nie tak</p>;

	const heroImageUrl = data.length > 0 
    ? `http://localhost:1337${data[0].attributes.Image.data.attributes.url}`
    : ''; 

	return (
		<section id="monthly">
			<div className={styles.heroBg}  style={{ backgroundImage: `url(${heroImageUrl})` }}>
				<div className={styles.heroShadow}></div>
				<h2 className='sectionTitle'>{t("month_burger")}</h2>
				{data.map(burger => {
					const imageUrl = `http://localhost:1337${burger.attributes.Image.data.attributes.url}`;

					return (
						<div key={burger.id} className={styles.content}>
							<img src={imageUrl} alt="Photo of burger" />
							<div className={styles.infoContainer}>
								<p className={styles.name}>{burger.attributes.Title}</p>
								<p className={styles.info}>
									{burger.attributes.Description.substring(0, 200)}...
									<a href={link} target="_blank" rel="noopener noreferrer">
										{" "}
										{t("read_more")}
									</a>
								</p>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}
