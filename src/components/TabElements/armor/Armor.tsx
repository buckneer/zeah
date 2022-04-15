import "./Armor.scss";
import Heading from "../../Heading/Heading";
import relicsHeader from "../../../assets/img/store-header-relics.png";
import {useEffect, useState} from "react";
import ItemService from "../../../item/item.service";
import Item from "../../../item/item.type";
import StoreItem from "../../StoreItem/StoreItem";
import armorHeader from "../../../assets/icons/armor.png"


export default function Armor({armor} : {armor: Item[]}) {

    return (
        <div className="Armor">
            <Heading title={"ARMOR"} img={armorHeader}>
            </Heading>
            <div className="relics-content row">
                {armor && armor.map(item => (
                    <StoreItem item={item} key={item._id}/>
                ))}
            </div>

        </div>
    )
}
