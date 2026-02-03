import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function RSVP() {
    const { t } = useTranslation();
    return (
        <>
         <h1>{t("rsvp.title")}</h1>
         <p>{t("rsvp.message")}</p>
         <Button variant="contained" color="primary">
            {t("rsvp.buttonLabel")}
         </Button>
        </>
    );
}