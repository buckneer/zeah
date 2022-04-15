
import './Relics.scss';
import Heading from "../../Heading/Heading";
import relicsHeader from "../../../assets/img/store-header-relics.png";
import StoreItem from "../../StoreItem/StoreItem";
import Item from "../../../item/item.type";
import ItemService from "../../../item/item.service";
import {useEffect, useState} from "react";

export default function Relics({relics} : {relics: Item[]}) {





    return(
        <div className="Relics">
            <Heading title={"RELICS"} img={relicsHeader}>
            </Heading>
            <div className="relics-content row">
                    {relics && relics.map(item => (
                        <StoreItem item={item} key={item._id}/>
                    ))}
            </div>
        </div>
    )
}
