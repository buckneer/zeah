import './BondItem.scss';
import storeHeader from "../../assets/img/store-header.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";

type BondProps = {
    title: string,
    price?: string
}

export default function BondItem({title}: BondProps) {
    return (
        <div className="BondItem mt-2">
            <div className="row">
                <div className="bond-item-img py-4 col-3 bg-secondary">
                    <img className="ms-2 px-1" src={storeHeader} />
                </div>
                <div className="col-9">
                    <div className="bond-item-title row bg-primary text-white">
                        <p className="py-1 mt-2">{title}</p>
                    </div>
                    <div className="row justify-content-between bond-item-options h-100 py-1">
                        <div className="col-4">
                            <div className="d-flex justify-content-between mt-1 w-100">
                                <div className="col-1">
                                    <FontAwesomeIcon size='xs' className="text-white" icon={faMinus}/>
                                </div>
                                <div className="quantity-info col-5 ">
                                    <input className="w-100 bg-primary text-info border-dark border-1" type="number" value="1" />
                                </div>
                                <div className="col-1">
                                    <FontAwesomeIcon size='xs' className="text-white" icon={faPlus} />
                                </div>
                            </div>
                        </div>
                        <div className="col-6 py-2 ms-4">
                            <button className="btn-small">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
