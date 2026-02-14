import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import LaunchIcon from '@mui/icons-material/Launch';

export default function RSVP() {
    const { t } = useTranslation();
    return (
        <section id="rsvp">
         <h2>{t("rsvp.title")}</h2>
         <p className="my-4">{t("rsvp.message")}</p>
         <p className="my-4">{t("rsvp.appreciation")}</p>
         <p className="my-4">{t("rsvp.deadline")}</p>
         <Button className="" variant="contained" target="_blank" color="primary" href="https://forms.google.com" endIcon={<LaunchIcon />}>
            {t("rsvp.buttonLabel")}
         </Button>
         <p className="my-4">{t("rsvp.contact")}</p>
        </section>
    );
}