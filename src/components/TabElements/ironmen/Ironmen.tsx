import "./Ironmen.scss";
import Heading from "../../Heading/Heading";
import relicsHeader from "../../../assets/img/store-header-relics.png";
import StoreItem from "../../StoreItem/StoreItem";
import {useEffect, useState} from "react";
import Item from "../../../item/item.type";
import ItemService from "../../../item/item.service";
import ironmenHeader from "../../../assets/icons/ironmen.png"


export default function Ironmen({ironmen}: {ironmen: Item[]}) {


    return (
        <div className="Ironmen">
            <Heading title={"IRONMEN"} img={ironmenHeader}>
            </Heading>
            <div className="relics-content row">
                {ironmen && ironmen.map(item => (
                    <StoreItem item={item} key={item._id}/>
                ))}
            </div>
        </div>
    )
}
