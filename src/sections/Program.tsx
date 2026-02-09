import { useTranslation } from "react-i18next";

export default function Program() {
    const { t } = useTranslation();
    return (
        <section id="program">
         <h1>{t("program.title")}</h1>
         <p>{t("program.ceremony")}</p>
         <p>{t("program.cocktailHour")}</p>
         <p>{t("program.dinner")}</p>
         <p>{t("program.party")}</p>
         <p>{t("program.farewell")}</p>
        </section>
    );
}