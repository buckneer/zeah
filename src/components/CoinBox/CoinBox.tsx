
import './CoinBox.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBitcoin, faPaypal} from "@fortawesome/free-brands-svg-icons";
import CheckoutModal from "../Modal/CheckoutModal";
import CSS from "csstype";
import contentBg from "../../assets/img/content-bg-pattern.jpg";
import {CoinPackType} from "../TabElements/coins/Coins";
import {useState} from "react";


const coinStyle: CSS.Properties = {
    background: `url(${contentBg}) no-repeat center center`,
    backgroundSize: 'cover'
}

export default function CoinBox({pack} : {pack: CoinPackType}) {

    const [show, setShow] = useState(false);


    const toggleModal = () => {
        setShow(prevState => {return !prevState})
    }

    return(
        <div className="coin-box col-4 col-md-2" key={pack.name}>
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
                    <p className="price-tag text-info">${pack.price}</p>

                    <p className="coins-description">{pack.description}</p>
                </div>
                <div className="coin-option">
                    <div className="row d-flex justify-content-center py-2">
                        <div className="col-4 buy-option">
                            <FontAwesomeIcon className="text-light" icon={faPaypal}/>
                            <p onClick={toggleModal}>Buy Now</p>
                        </div>
                        <div className="col-4 buy-option">
                            <FontAwesomeIcon className="text-light" icon={faBitcoin}/>
                            <p>Buy Now</p>
                        </div>
                    </div>
                </div>
            </div>
            <CheckoutModal show={show} item={pack} closeModal={toggleModal} />
        </div>
    )
}
