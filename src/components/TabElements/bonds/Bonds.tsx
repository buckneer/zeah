import './Bonds.scss';
import Heading from "../../Heading/Heading";
import storeHeader from "../../../assets/img/store-header.png";
import BondItem from "../../BondItem/BondItem";
import bondImg from "../../../assets/img/example-image.jpeg";


type Bond = {
    name: string,
    quantity: number,
}

let bonds: Bond[] = [
    {
        name: '$10 Bond (Redeems 1,000 Zeah Coins)',
        quantity: 1
    },
    {
        name: '$25 Bond (Redeems 2,500 Zeah Coins)',
        quantity: 1
    },
    {
        name: '$50 Bond (Redeems 5,000 Zeah Coins)',
        quantity: 1
    },
    {
        name: '$100 Bond (Redeems 10,000 Zeah Coins)',
        quantity: 1
    },
    {
        name: '$250 Bond (Redeems 25,000 Zeah Coins)',
        quantity: 1
    }
]

export function Bonds() {
    return (
        <div className="Bonds">
            <Heading title={"ZEAH BONDS"} img={storeHeader}>
                <p>Bonds are a medium of exchange on Zeah. They can be redemmed for in game status and items.</p>
                <p className="notice-sub text-danger">All sales are final.</p>
            </Heading>
            <div className="bond-content row justify-content-center">
                <div className="col-lg-6 col-10">
                    {bonds && bonds.map(bond => (
                        <BondItem title={bond.name}  />
                    ))}

                </div>


                <div className="col-lg-5 col-10 mt-5 mt-lg-0">
                    <div className="bond-img-example">
                        <img src={bondImg} />
                    </div>
                    <div className="bond-img-example mt-5">
                        <img src={bondImg} />
                    </div>
                </div>
            </div>
        </div>
    )
}
