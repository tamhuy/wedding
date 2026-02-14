import { useTranslation } from "react-i18next";

type FaqSubSectionProps = {
    title: string,
    text: string,
}


function FaqSubSection({title, text}: FaqSubSectionProps) {
   return (
      <div className="my-6">
        <div>
            <h3>{title}</h3>
            <p className="whitespace-pre-line">{text}</p>
        </div>
    </div>
   )
}


export default function FAQ() {
    const { t } = useTranslation();
    return (
        <section id="faq">
         <h2>{t("practicalInfo.title")}</h2>
            <div className="block md:flex gap-20">

                <div>
                    <FaqSubSection title={t("practicalInfo.dressCode")} text={t("practicalInfo.dressCodeSub")} />
                    <FaqSubSection title={t("practicalInfo.childFree")} text={t("practicalInfo.childFreeSub")} />
                    <FaqSubSection title={t("practicalInfo.accommodation")} text={t("practicalInfo.accommodationSub")} />
                    <div className="my-6">
                        <div>
                            <h3>{t("practicalInfo.transportation")}</h3>
                            <p className="whitespace-pre-line">{t("practicalInfo.transportationSub")} <a className="underline" href="ruter.no" >Ruter.no</a>{t("practicalInfo.transportationSub2")}</p>
                        </div>
                    </div>
                    <FaqSubSection title={t("practicalInfo.weather")} text={t("practicalInfo.weatherSub")} />
                    <FaqSubSection title={t("practicalInfo.wishingWell")} text={t("practicalInfo.wishingWellSub")} />
                    <FaqSubSection title={t("practicalInfo.contribution")} text={t("practicalInfo.contributionSub")} />
                </div>
                <div className="flex justify-center md:block">
                    <video className="rounded-lg" width="350" height="240" autoPlay loop muted>
                        <source src="/assets/video.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
        </section>
    );
}