import "./Boxes.scss";
import Heading from "../../Heading/Heading";
import relicsHeader from "../../../assets/img/store-header-relics.png";
import Item from "../../../item/item.type";
import StoreItem from "../../StoreItem/StoreItem";
import boxesHeader from "../../../assets/icons/boxes.png";

export default function Boxes({boxes}: {boxes: Item[]}) {


    return (
        <div className="Boxes">
            <Heading title={"BOXES"} img={boxesHeader}>
            </Heading>
            <div className="relics-content row">
                {boxes && boxes.map(item => (
                    <StoreItem item={item} key={item._id}/>
                ))}
            </div>
        </div>
    )
}
