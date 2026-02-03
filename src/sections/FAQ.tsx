import { useTranslation } from "react-i18next";

export default function FAQ() {
    const { t } = useTranslation();
    return (
        <>
         <h1>{t("practicalInfo.title")}</h1>
         <p>{t("practicalInfo.accommodation")}</p>
         <p>{t("practicalInfo.transportation")}</p>
         <p>{t("practicalInfo.childFree")}</p>
         <p>{t("practicalInfo.parking")}</p>
         <p>{t("practicalInfo.dressCode")}</p>
         <p>{t("practicalInfo.wishingWell")}</p>
        
        </>
    );
}