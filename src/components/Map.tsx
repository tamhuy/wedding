import { useTranslation } from "react-i18next";

export default function Map() {
    const apiKey = import.meta.env.VITE_MAPS_API_KEY;
    const { t } = useTranslation();
    return (
        <>
         <h1>{t("location.title")}</h1>
         <div className="grid grid-cols-6 gap-16">
           {/* Left column - Map */}
           <div className="col-span-3">
             <iframe
                width="100%"
                height="450"
                // style="border:0"
                loading="lazy"
                // allowFullscreen
                src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=Nordre+Skøyen+Hovedgård`}>
             </iframe>
           </div>
           
           {/* Right column - Text content (spans 2 columns) */}
           <div className="col-span-3">
             <h2 className="text-2xl font-bold mb-4">{t("location.name")}</h2>
             <p className="text-gray-700 mb-4">
               {t("location.address")}
             </p>
             <p>
                {t("location.directions")}
             </p>
             <p>
                {t("location.parking")}
             </p>
           </div>
         </div>
        </>
    );
}