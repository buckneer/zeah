
import './Footer.scss';
import footerBg from '../../assets/img/footer-bg.jpg';
import CSS from "csstype";
import navLogo from '../../assets/img/Nav-icon.webp';


let footerStyles: CSS.Properties = {
    backgroundImage: `url(${footerBg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',

}

export default function Footer() {
    return (
        <div style={footerStyles} className="Footer">
            <div className="row p-3 justify-content-between">
                <div className="col-md-3 col-12 d-flex justify-content-center">
                    <img className="p-3" src={navLogo} />
                    <div className="text py-2 my-2">
                        <h5 className="text-light">ZEAH RSPS <br /> <small>Play your way</small></h5>
                    </div>
                </div>
                <div className="col-md-3 col-12 text-center my-autos mt-3">
                    <button className="btn btn-secondary">Back to top</button>
                </div>
                <div className="col-md-3 col-12 text-white text-center mt-3">
                    <p>2022 ZEAH | All Rights Reserved</p>
                    <div className="row justify-content-center mx-auto">
                        <div className="col-6">
                            <a href="#">Terms of Service</a>
                        </div>
                        <div className="col-6">
                            <a href="#">Privacy Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
