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
import {useState} from "react";
import CheckoutModal from "../../Modal/CheckoutModal";
import CoinBox from "../../CoinBox/CoinBox";



export interface CoinPackType {
    id: number,
    name: string,
    icon: string,
    price: string,
    description: string,
    quantity: number
}

let coinPacks : CoinPackType[] = [
    {
        id: 1,
        name: "1,000 Zeah Coins (+0 bonus)",
        icon: coinsOne,
        price: "10",
        description: "1,000 Zeah Coins will be credited to you upon successful payment.",
        quantity: 1000
    },
    {
        id: 2,
        name: "2,000 Zeah Coins  (+100 bonus)",
        icon: coinsTwo,
        price: "20",
        description: "2,100 Zeah Coins will be credited to you upon successful payment.",
        quantity: 2000
    },
    {
        id: 3,
        name: "5,000 Zeah Coins (+375 bonus)",
        icon: coinsThree,
        price: "50",
        description: "5,375 Zeah Coins will be credited to you upon successful payment.",
        quantity: 5000
    },
    {
        id: 4,
        name: "10,000 Zeah Coins  (+1,000 bonus)",
        icon: coinsFour,
        price: "100",
        description: "11,000 Zeah Coins will be credited to you upon successful payment.",
        quantity: 10000
    },
    {
        id: 5,
        name: "25,000 Zeah Coins  (+3,125 bonus)",
        icon: coinsFive,
        price: "250",
        description: "28,125 Zeah Coins will be credited to you upon successful payment.",
        quantity: 25000
    },

]

export default function Coins() {



    return(
        <div className="Coins">
            <Heading title={"ZEAH COINS"} img={storeHeaderImg}>
                <p>Zeah Coins are the currency used to buy items on Zeah's store.</p>
                <p className="notice-sub text-danger">Coins cannot be transferred. All sales are final.</p>
            </Heading>
            <div className="coins-box-container d-flex flex-md-row flex-column justify-content-between">
                {coinPacks && coinPacks.map(pack => (

                    <CoinBox key={pack.id} pack={pack} />
                ))}


            </div>

        </div>
    )
}
