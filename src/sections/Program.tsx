import { useTranslation } from "react-i18next";
import Rings from "../assets/icons/rings.svg?react";
import Dinner from "../assets/icons/dinner.svg?react";
import Cake from "../assets/icons/cake.svg?react";
import Dance from "../assets/icons/dance.svg?react";
import Welcome from "../assets/icons/welcome.svg?react";
import Cocktail from "../assets/icons/cocktail.svg?react";
import Snack from "../assets/icons/snack.svg?react";
import Bye from "../assets/icons/bye.svg?react";


import SvgIcon, { type SvgIconProps } from '@mui/material/SvgIcon';
import type { ComponentType } from "react";

type ProgramSubSectionProps = {
    title: string,
    text: string,
    Icon: React.ComponentType<SvgIconProps>,
}

 function createSvgIcon(SvgComponent: ComponentType<React.SVGProps<SVGSVGElement>>) {
  return function Icon(props: SvgIconProps) {
    return <SvgIcon component={SvgComponent} inheritViewBox {...props} />;
  };
}
const RingsIcon = createSvgIcon(Rings);
const DinnerIcon = createSvgIcon(Dinner);
const CakeIcon = createSvgIcon(Cake);
const DanceIcon = createSvgIcon(Dance);
const WelcomeIcon = createSvgIcon(Welcome);
const CocktailIcon = createSvgIcon(Cocktail);
const SnackIcon = createSvgIcon(Snack);
const ByeIcon = createSvgIcon(Bye);

function ProgramSubSection({title, text, Icon}: ProgramSubSectionProps) {
   return (
      <div className="flex gap-5 my-6">
            <Icon fontSize="large"/>
            <div>
                <h3>{title}</h3>
                <p className="whitespace-pre-line">{text}</p>
            </div>
         </div>
   )
}

export default function Program() {
    const { t } = useTranslation();
    return (
        <section id="program">
         <h2>{t("program.title")}</h2>
         <ProgramSubSection Icon={WelcomeIcon} title={t("program.doorsOpen")} text={t("program.doorsOpenSub")} />
         <ProgramSubSection Icon={RingsIcon} title={t("program.ceremony")} text={t("program.ceremonySub")} />
         <ProgramSubSection Icon={CocktailIcon} title={t("program.cocktailHour")} text={t("program.cocktailHourSub")} />
         <ProgramSubSection Icon={DinnerIcon} title={t("program.dinner")} text={t("program.dinnerSub")} />
         <ProgramSubSection Icon={CakeIcon} title={t("program.cakeCutting")} text={t("program.cakeCuttingSub")} />
         <ProgramSubSection Icon={DanceIcon} title={t("program.party")} text={t("program.partySub")} />
         <ProgramSubSection Icon={SnackIcon} title={t("program.snacks")} text={t("program.snacksSub")} />
         <ProgramSubSection Icon={ByeIcon} title={t("program.farewell")} text={t("program.farewellSub")} />
        </section>
    );
}