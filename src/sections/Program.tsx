import { useTranslation } from "react-i18next";
import DoorSlidingIcon from '@mui/icons-material/DoorSliding';
export default function Program() {
    const { t } = useTranslation();
    return (
        <section id="program">
         <h1>{t("program.title")}</h1>
         <p><DoorSlidingIcon />{t("program.doorsOpen")}</p>
         <p>{t("program.doorsOpenSub")}</p>
         <p>{t("program.arriveBefore")}</p>
         <p>{t("program.ceremony")}</p>
         <p>{t("program.ceremonySub")}</p>
         <p>{t("program.cocktailHour")}</p>
         <p>{t("program.cocktailHourSub")}</p>
         <p>{t("program.dinner")}</p>
         <p>{t("program.dinnerSub")}</p>
         <p>{t("program.cakeCutting")}</p>
         <p>{t("program.cakeCuttingSub")}</p>
         <p>{t("program.party")}</p>
         <p>{t("program.partySub")}</p>
         <p>{t("program.snacks")}</p>
         <p>{t("program.snacksSub")}</p>
         <p>{t("program.farewell")}</p>
         <p>{t("program.farewellSub")}</p>
        </section>
    );
}