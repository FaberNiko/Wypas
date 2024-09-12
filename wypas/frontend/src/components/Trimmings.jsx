import style from "./Trimmings.module.scss";
import { useTranslation } from "react-i18next";

export default function Trimmings() {
	const {t} = useTranslation();
	return (
		<section className={style.trimmingsSection}>
			<div className={style.container}>
				<ul className={style.trimmingsList}>
					<li className={style.trimmingsItem}>
						<p className={style.trimmingTitle}>{t("belgian_fries")}</p>
						<p className={style.trimmingsPrice}>11zł</p>
						<p className={style.info}>{t('in_set')}</p>
						<p className={style.trimmingsPrice}>9zł</p>
					</li>
					<li className={style.trimmingsItem}>
						<p className={style.trimmingTitle}>{t('nuggets')}</p>
						<p className={style.info}>(150g)</p>
						<p className={style.trimmingsPrice}>11zł</p>
					</li>
					<li className={style.trimmingsItem}>
						<p className={style.trimmingTitle}>{t('sauces')}</p>
						<p className={style.info}>{t('sauces_type')}</p>
						<p className={style.trimmingsPrice}>2zł</p>
					</li>
					<li className={style.trimmingsItem}>
						<p className={style.trimmingTitle}>{t('drink')}</p>
						<p className={style.trimmingsPrice}>7zł</p>
					</li>
					<li className={style.trimmingsItem}>
						<p className={style.trimmingTitle}>{t('papper_bag')}</p>
						<p className={style.trimmingsPrice}>1zł</p>
					</li>
				</ul>
			</div>
		</section>
	);
}
