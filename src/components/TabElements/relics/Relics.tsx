
import './Relics.scss';
import Heading from "../../Heading/Heading";
import relicsHeader from "../../../assets/img/store-header-relics.png";
import StoreItem from "../../StoreItem/StoreItem";

export default function Relics() {
    return(
        <div className="Relics">
            <Heading title={"RELICS"} img={relicsHeader}>
            </Heading>
            <div className="relics-content row">
                <div className="col-md-3 col-6">
                    <StoreItem title="String of Luck" price="250 Zeah Coins" description="Offers 10% luck boost, excluding raids. Lasts for 60 minutes." />
                </div>
            </div>
        </div>
    )
}
