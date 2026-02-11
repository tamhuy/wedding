import { useTranslation } from "react-i18next";

export default function FAQ() {
    const { t } = useTranslation();
    return (
        <>
         <h2>{t("practicalInfo.title")}</h2>
         <h3 className=" mb-2">{t("practicalInfo.dressCode")}</h3>
				 <p className="mb-4">{t("practicalInfo.dressCodeSub")}</p>
         <h3>{t("practicalInfo.childFree")}</h3>
         <p>{t("practicalInfo.childFreeSub")}</p>
         <h3>{t("practicalInfo.accommodation")}</h3>
                <p>{t("practicalInfo.accommodationSub")}</p>
         <h3>{t("practicalInfo.transportation")}</h3>
				 <p>{t("practicalInfo.transportationSub")}</p>
				 <h3>{t("practicalInfo.weather")}</h3>
				 <p>{t("practicalInfo.weatherSub")}</p>
         <h3>{t("practicalInfo.wishingWell")}</h3>
				 <p>{t("practicalInfo.wishingWellSub")}</p>
         <p>{t("practicalInfo.contribution")}</p>
				 <p>{t("practicalInfo.contributionSub")}</p>
        
        </>
    );
}