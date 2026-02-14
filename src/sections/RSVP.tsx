import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import LaunchIcon from '@mui/icons-material/Launch';

export default function RSVP() {
    const { t } = useTranslation();
    return (
        <section id="rsvp">
         <h2 className="text-white">{t("rsvp.title")}</h2>
         <p className="text-white my-4">{t("rsvp.message")}</p>
         <p className="text-white my-4">{t("rsvp.deadline")}</p>
         <Button className="!bg-secondary/70 hover:!bg-secondary/50 !text-black " size="large" variant="contained" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSf9ZIxOMC361IIPEtcWIlTC6dDxh72qSUlAZBGSZRDAp2gSKw/viewform?usp=dialog" endIcon={<LaunchIcon />}>
            {t("rsvp.buttonLabel")}
         </Button>
         <p className="text-white my-4">{t("rsvp.appreciation")}</p>
         <p className="text-white my-4">{t("rsvp.contact")} <a className="underline" href="mailto:linhandtamwedding@gmail.com">linhandtamwedding@gmail.com</a></p>
        </section>
    );
}