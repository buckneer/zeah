import './Home.scss';
import logoIc from '../../../assets/img/nav-logo.png';
import storeHeader from '../../../assets/img/store-header.png';
import headerLeft from '../../../assets/img/section-header-left.png';
import headerMiddle from '../../../assets/img/section-header-middle.png';
import headerRight from '../../../assets/img/section-header-right.png';
import exampleImage from '../../../assets/img/example-image.jpeg';
import storeBg from '../../../assets/img/store-index-bg.jpeg';
import herbBox from '../../../assets/img/herb-box-detail.png';
import mysteryBox from '../../../assets/img/mystery-box-detail.png';
import itemBoxFirst from '../../../assets/img/item-box-first.png';
import itemBoxSecond from '../../../assets/img/item-box-second.png';
import CSS from "csstype";
import Heading from "../../Heading/Heading";


let homeStyle: CSS.Properties = {
    backgroundImage: `url(${storeBg})`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',

}

let headingStyle: CSS.Properties = {
    backgroundImage: `url(${headerMiddle})`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    color: '#a5fd01'

}

export default function Home() {
    return (
        <div className="Home">
            <div style={homeStyle} className="bg-content">
                <Heading title="STORE" />
            </div>
            <div className="icons-content">
                <div className="ms-5 row justify-content-sm-between">
                    <div className="col-3">
                        <img className="mt-5" src={storeHeader} />
                    </div>
                    <div className="col-6">
                        <img src={logoIc} />
                    </div>
                    <div className="col-3">
                        <img className="mt-5" src={storeHeader} />
                    </div>
                </div>
            </div>
            <div className="items-content">
                <div className="row justify-content-between">
                    <div className="col-6">
                        <img src={exampleImage} />
                    </div>
                    <div className="col-6">
                        <img src={exampleImage} />
                    </div>
                </div>
            </div>

            <div className="item-sellers mt-4">
                <div className="row justify-content-between text-center">
                    <div className="col-6 ">
                        <h5 className="text-white">FEATURED</h5>
                        <div className="row mt-4 mx-3">
                            <div className="mystery-item col-4">
                                <img className=" py-4 px-3" src={herbBox} />
                            </div>
                            <div className="mystery-item col-4">
                                <img className=" py-4 px-3" src={mysteryBox} />
                            </div>
                            <div className="mystery-item col-4">
                                <img className=" py-4 px-3" src={itemBoxFirst} />
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <h5 className="text-white">BEST SELLERS</h5>
                        <div className="row mt-4 mx-3">
                            <div className="mystery-item col-4">
                                <img className=" py-4 px-3" src={herbBox} />
                            </div>
                            <div className="mystery-item col-4">
                                <img className=" py-4 px-3" src={mysteryBox} />
                            </div>
                            <div className="mystery-item col-4">
                                <img className=" py-4 px-3" src={itemBoxSecond} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
