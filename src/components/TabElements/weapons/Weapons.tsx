import "./Weapons.scss";
import Heading from "../../Heading/Heading";
import relicsHeader from "../../../assets/img/store-header-relics.png";
import StoreItem from "../../StoreItem/StoreItem";
import Item from "../../../item/item.type";
import weaponsHeader from "../../../assets/icons/weapons.png"

export default function Weapons({weapons}: {weapons: Item[]}) {



    return (
        <div className="Weapons">
            <Heading title={"WEAPONS"} img={weaponsHeader}>
            </Heading>
            <div className="relics-content row">
                {weapons && weapons.map(item => (
                    <StoreItem item={item} key={item._id}/>
                ))}
            </div>
        </div>
    )
}
