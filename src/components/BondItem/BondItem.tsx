import './BondItem.scss';
import storeHeader from "../../assets/img/store-header.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";
import {Bond} from "../TabElements/bonds/Bonds";
import {useState} from "react";
import CheckoutModal from "../Modal/CheckoutModal";

type BondProps = {
    title: string,
    price?: string
}


export default function BondItem({bond}: {bond: Bond}) {

    const [show, setShow] = useState(false);


    const toggleModal = () => {
        setShow(prevState => {return !prevState})
    }


    return (
        <div className="BondItem mt-2">
            <div className="row">
                <div className="bond-item-img py-4 col-3 bg-secondary">
                    <img className="ms-2 px-1" src={storeHeader} />
                </div>
                <div className="col-9">
                    <div className="bond-item-title row bg-primary text-white">
                        <p className="py-1 mt-2">{bond.name}</p>
                    </div>
                    <div className="row justify-content-center bond-item-options h-100 py-1">

                        <div className="col-6 py-2 ms-4">
                            <button className="btn-small py-2 px-4" onClick={toggleModal}>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <CheckoutModal show={show} item={bond} closeModal={toggleModal} />
        </div>
    )
}
