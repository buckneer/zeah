

import './StoreItem.scss';
import itemExample from '../../assets/img/item-box-first.png';
import contentBackground from '../../assets/img/content-bg-pattern.jpg';
import CSS from "csstype";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";
import Item from "../../item/item.type";
import ItemService from "../../item/item.service";
import {useState} from "react";
import CheckoutModal from "../Modal/CheckoutModal";
import User from "../../user/user.type";
import {toast, ToastContainer} from "react-toastify";
import {Modal} from "react-bootstrap";
import ConfirmModal from "../ConfirmModal/ConfirmModal";

let imgStyle: CSS.Properties = {
    backgroundImage: `url(${contentBackground})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
}

export default function StoreItem({item} : {item: Item}) {


    const [quantity, setQuantity] = useState(1);
    const [show, setShow] = useState(false);


    let toggleModal = () => {
        setShow(p => {return !p})
    }


    return (
        <div className="StoreItem col-lg-3 col-6 text-center my-4 align-content-center overflow-hidden">
            <div style={imgStyle} className={`store-img-container ${item.category === 'boxes' ? 'boxes-img-container' : ''}`}>
               <img src={item.img} />
            </div>
            <div className="store-title-container bg-primary text-light">
                <p className="fw-bold px-2 mb-0">{item.name}</p>
            </div>
            <div className="store-description bg-secondary">
                <div className="px-2">
                    <p className="text-info mt-0 mb-2">{item.price}</p>
                    <p className="text-muted mb-0">{item.description}</p>
                </div>
                <div className="bg-primary row">
                    <div className="col-5 py-1">
                        <div className="ps-1 row justify-content-between">
                            <div className="quantity-info col-5 p-0">
                                <input className="w-100 bg-secondary text-info border-dark border-1" type="number"
                                onChange={e => {setQuantity(parseInt(e.target.value))}}
                                value={quantity}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-7 py-1">
                        <button onClick={toggleModal} className="btn-small px-2">Buy Now</button>
                    </div>
                </div>
                <ConfirmModal show={show} item={item} toggleModal={toggleModal} />
            </div>




        </div>
    )
}
