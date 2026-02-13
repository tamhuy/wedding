import { useTranslation } from "react-i18next";

export default function Map() {
    const apiKey = import.meta.env.VITE_MAPS_API_KEY;
    const { t } = useTranslation();
    return (
        <section id="venue">
         <h1>{t("location.title")}</h1>
         <div className="grid lg:grid-cols-6 gap-16 grid-cols-1">
           {/* Left column - Map */}
           <div className="col-span-3 rounded-4xl overflow-hidden shadow-lg">
             <iframe
                className="w-full h-70 lg:h-96"
                // style="border:0"
                loading="lazy"
                // allowFullscreen
                src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=Nordre+Skøyen+Hovedgård&zoom=11`}>
             </iframe>
           </div>
           
           {/* Right column - Text content (spans 2 columns) */}
           <div className="col-span-3">
             <h2 className="text-4xl tracking-normal mb-4">{t("location.name")}</h2>
             <p className="italic text-gray-700 mb-4">
               {t("location.address")}
             </p>
             <p className="mb-4">
                {t("location.description")}
             </p>
             <p className="mb-4">
                {t("location.reasoning")}
             </p>
             <p className="mb-4">
                {t("location.directions")}
             </p>
             <p className="mb-4">
                {t("location.parking")}
             </p>
           </div>
         </div>
        </section>
    );
}