import "./Customs.scss";
import Heading from "../../Heading/Heading";
import relicsHeader from "../../../assets/img/store-header-relics.png";
import StoreItem from "../../StoreItem/StoreItem";
import {useEffect, useState} from "react";
import Item from "../../../item/item.type";
import ItemService from "../../../item/item.service";
import customsHeader from "../../../assets/icons/customs.png"

export default function Customs({customs}: {customs: Item[]}) {




    return (
        <div className="Customs">
            <Heading title={"CUSTOMS"} img={customsHeader}>
            </Heading>

            <div className="relics-content row">
                {customs && customs.map(item => (
                    <StoreItem item={item} key={item._id}/>
                ))}
            </div>
        </div>
    )
}
