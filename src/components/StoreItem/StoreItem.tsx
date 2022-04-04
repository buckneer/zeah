

import './StoreItem.scss';
import itemExample from '../../assets/img/item-box-first.png';
import contentBackground from '../../assets/img/content-bg-pattern.jpg';
import CSS from "csstype";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";

let imgStyle: CSS.Properties = {
    backgroundImage: `url(${contentBackground})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
}

export default function StoreItem({title, price, description}: {title: string, price: string, description: string}) {
    return (
        <div className="StoreItem text-center align-content-center overflow-hidden">
            <div style={imgStyle} className="store-img-container">
               <img src={itemExample} />
            </div>
            <div className="store-title-container bg-primary text-light">
                <p className="fw-bold px-2 mb-0">{title}</p>
            </div>
            <div className="store-description bg-secondary">
                <div className="px-2">
                    <p className="text-info mt-0 mb-2">{price}</p>
                    <p className="text-muted mb-0">{description}</p>
                </div>
                <div className="bg-primary row">
                    <div className="col-5 py-1">
                        <div className="ps-1 row justify-content-between">
                            <div className="col-1">
                                <FontAwesomeIcon size='xs' className="text-white" icon={faMinus}/>
                            </div>
                            <div className="quantity-info col-5 p-0">
                                <input className="w-100 bg-secondary text-info border-dark border-1" type="number" value="1" />
                            </div>
                            <div className="col-1 p-0">
                                <FontAwesomeIcon size='xs' className="text-white" icon={faPlus} />
                            </div>
                        </div>
                    </div>
                    <div className="col-7 py-1">
                        <a className="btn-small">Add to cart</a>
                    </div>
                </div>

            </div>

        </div>
    )
}
