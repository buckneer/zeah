import './Coins.scss';
import Heading from "../../Heading/Heading";
import storeHeaderImg from '../../../assets/img/store-header-zeah.webp';

export default function Coins() {
    return(
        <div className="Coins">
            <Heading title={"ZEAH COINS"} img={storeHeaderImg}>
                <p className="">Zeah Coins are the currency used to buy items on Zeah's store.</p>
                <p className="notice-sub text-danger">Coins cannot be transferred. All sales are final.</p>
            </Heading>
        </div>
    )
}
