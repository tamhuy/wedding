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
         <Button className="!bg-primary hover:!bg-secondary/50 !text-white " size="large" variant="contained" target="_blank" href="https://forms.gle/r8cVbGhJqQ6qsreK8" endIcon={<LaunchIcon />}>
            {t("rsvp.buttonLabel")}
         </Button>
         <p className="text-white my-4">{t("rsvp.appreciation")}</p>
         <p className="text-white my-4">{t("rsvp.contact")} <a className="underline" href="mailto:linhandtamwedding@gmail.com">linhandtamwedding@gmail.com</a></p>
        </section>
    );
}