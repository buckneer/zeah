import './Coins.scss';
import Heading from "../../Heading/Heading";
import CSS from "csstype";
import storeHeaderImg from '../../../assets/img/store-header-zeah.webp';
import contentBg from '../../../assets/img/content-bg-pattern.jpg';
import coinsOne from '../../../assets/img/coins-1.png';
import {faPaypal, faBitcoin} from "@fortawesome/free-brands-svg-icons";
import coinsTwo from '../../../assets/img/coins-2.png';
import coinsThree from '../../../assets/img/coins-3.png';
import coinsFour from '../../../assets/img/coins-4.png';
import coinsFive from '../../../assets/img/coins-5.png';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const coinStyle: CSS.Properties = {
    background: `url(${contentBg}) no-repeat center center`,
    backgroundSize: 'cover'
}


let coinPacks : {name: string, icon: string, price: string, description: string}[] = [
    {
        name: "1,000 Zeah Coins (+0 bonus)",
        icon: coinsOne,
        price: "$10",
        description: "1,000 Zeah Coins will be credited to you upon successful payment."
    },
    {
        name: "2,000 Zeah Coins  (+100 bonus)",
        icon: coinsTwo,
        price: "$20",
        description: "2,100 Zeah Coins will be credited to you upon successful payment."
    },
    {
        name: "5,000 Zeah Coins (+375 bonus)",
        icon: coinsThree,
        price: "$50",
        description: "5,375 Zeah Coins will be credited to you upon successful payment."
    },
    {
        name: "10,000 Zeah Coins  (+1,000 bonus)",
        icon: coinsFour,
        price: "$100",
        description: "11,000 Zeah Coins will be credited to you upon successful payment."
    },
    {
        name: "25,000 Zeah Coins  (+3,125 bonus)",
        icon: coinsFive,
        price: "$250",
        description: "28,125 Zeah Coins will be credited to you upon successful payment."
    },

]

export default function Coins() {
    return(
        <div className="Coins">
            <Heading title={"ZEAH COINS"} img={storeHeaderImg}>
                <p className="">Zeah Coins are the currency used to buy items on Zeah's store.</p>
                <p className="notice-sub text-danger">Coins cannot be transferred. All sales are final.</p>
            </Heading>
            <div className="coins-box-container d-flex flex-md-row flex-column justify-content-between">
                {coinPacks && coinPacks.map(pack => (
                    <div className="coin-box col-4 col-md-2">
                        <div style={coinStyle} className="coin-img">
                            <div className="img-container">
                                <img src={pack.icon} />
                            </div>
                        </div>
                        <div className="coin-options">
                            <div className="coin-heading bg-primary text-white text-center p-1">
                                <h6>{pack.name}</h6>
                            </div>
                            <div className="coin-body bg-secondary text-muted text-center p-2">
                                <p className="price-tag text-info">{pack.price}</p>

                                <p className="coins-description">{pack.description}</p>
                            </div>
                            <div className="coin-option">
                                <div className="row d-flex justify-content-center py-2">
                                    <div className="col-4 buy-option">
                                        <FontAwesomeIcon className="text-light" icon={faPaypal}/>
                                        <p>Buy Now</p>
                                    </div>
                                    <div className="col-4 buy-option">
                                        <FontAwesomeIcon className="text-light" icon={faBitcoin}/>
                                        <p>Buy Now</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                ))}


            </div>
        </div>
    )
}
