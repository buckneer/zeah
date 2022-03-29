import './Home.scss';
import logoIc from '../../assets/img/nav-logo.png';
import storeHeader from '../../assets/img/store-header.png';
import headerLeft from '../../assets/img/section-header-left.png';
import headerMiddle from '../../assets/img/section-header-middle.png';
import headerRight from '../../assets/img/section-header-right.png';
import exampleImage from '../../assets/img/example-image.jpeg';
import storeBg from '../../assets/img/store-index-bg.jpeg';
import CSS from "csstype";


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
                <div className="heading d-flex justify-content-center">
                    <div className="d-inline-flex justify-content-center" >
                        <img className="my-3" src={headerLeft} />
                        <h3 className="py-4 mt-3 px-5 h-100" style={headingStyle}>STORE</h3>
                        <img className="my-3" src={headerRight} />
                    </div>
                </div>
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

            <div className="item-sellers">

            </div>

        </div>
    )
}
