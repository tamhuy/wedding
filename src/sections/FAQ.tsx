import { useTranslation } from "react-i18next";

export default function FAQ() {
    const { t } = useTranslation();
    return (
        <>
         <h1>{t("practicalInfo.title")}</h1>
         <h3 className="text-xl font-bold mb-2">{t("practicalInfo.dressCode")}</h3>
				 <p className="mb-4">{t("practicalInfo.dressCodeSub")}</p>
         <p>{t("practicalInfo.childFree")}</p>
         <p>{t("practicalInfo.childFreeSub")}</p>
         <p>{t("practicalInfo.accommodation")}</p>
				 <p>{t("practicalInfo.accommodationSub")}</p>
         <p>{t("practicalInfo.transportation")}</p>
				 <p>{t("practicalInfo.transportationSub")}</p>
				 <p>{t("practicalInfo.weather")}</p>
				 <p>{t("practicalInfo.weatherSub")}</p>
         <p>{t("practicalInfo.wishingWell")}</p>
				 <p>{t("practicalInfo.wishingWellSub")}</p>
         <p>{t("practicalInfo.contribution")}</p>
				 <p>{t("practicalInfo.contributionSub")}</p>
        
        </>
    );
}