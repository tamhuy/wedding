import { useTranslation } from "react-i18next";
import DoorSlidingOutlinedIcon from '@mui/icons-material/DoorSlidingOutlined';
import type { SvgIconComponent } from '@mui/icons-material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LocalBarOutlinedIcon from '@mui/icons-material/LocalBarOutlined';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined';
import CelebrationOutlinedIcon from '@mui/icons-material/CelebrationOutlined';
import SoupKitchenOutlinedIcon from '@mui/icons-material/SoupKitchenOutlined';
import WavingHandOutlinedIcon from '@mui/icons-material/WavingHandOutlined';


type ProgramSubSectionProps = {
    title: string,
    text: string,
    Icon: SvgIconComponent,
}

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
         <ProgramSubSection Icon={DoorSlidingOutlinedIcon} title={t("program.doorsOpen")} text={t("program.doorsOpenSub")} />
         <ProgramSubSection Icon={FavoriteBorderOutlinedIcon} title={t("program.ceremony")} text={t("program.ceremonySub")} />
         <ProgramSubSection Icon={LocalBarOutlinedIcon} title={t("program.cocktailHour")} text={t("program.cocktailHourSub")} />
         <ProgramSubSection Icon={RestaurantOutlinedIcon} title={t("program.dinner")} text={t("program.dinnerSub")} />
         <ProgramSubSection Icon={CakeOutlinedIcon} title={t("program.cakeCutting")} text={t("program.cakeCuttingSub")} />
         <ProgramSubSection Icon={CelebrationOutlinedIcon} title={t("program.party")} text={t("program.partySub")} />
         <ProgramSubSection Icon={SoupKitchenOutlinedIcon} title={t("program.snacks")} text={t("program.snacksSub")} />
         <ProgramSubSection Icon={WavingHandOutlinedIcon} title={t("program.farewell")} text={t("program.farewellSub")} />
        </section>
    );
}