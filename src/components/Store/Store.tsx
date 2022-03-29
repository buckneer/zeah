import './Store.scss'
import CSS from 'csstype';
import contentBg from '../../assets/img/content-bg-pattern.jpg';
import SidebarItem from "../SidebarItem/SidebarItem";
import {Tabs, Tab, Row, Col, Nav} from "react-bootstrap";
import homeIc from '../../assets/icons/store-home.png';
import coinsIc from '../../assets/icons/store-zeah.png';
import relicsIc from '../../assets/icons/store-relics.png';
import boxesIc from '../../assets/icons/store-boxes.png';
import weaponsIc from '../../assets/icons/store-weapons.png';
import armorIc from '../../assets/icons/store-armor.png';
import customsIc from '../../assets/icons/store-customs.png';
import ironmenIc from '../../assets/icons/store-ironmen.png'
import Home from "../TabElements/Home";

let storeStyles: CSS.Properties = {
    backgroundImage: `url(${contentBg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center'
}


let storeTabs: {name: string, icon: string, element?: JSX.Element}[] = [
    {
        name: 'home',
        icon: homeIc,

    },
    {
        name: 'coins',
        icon: coinsIc
    },
    {
        name: 'bonds',
        icon: homeIc
    },
    {
        name: 'relics',
        icon: relicsIc
    },
    {
        name: 'boxes',
        icon: boxesIc
    },
    {
        name: 'weapons',
        icon: weaponsIc
    },
    {
        name: 'armor',
        icon: armorIc
    },
    {
        name: 'customs',
        icon: customsIc
    },
    {
        name: 'ironmen',
        icon: ironmenIc
    },
]




export default function Store() {
    return(
        <div className="Store">
            <div style={storeStyles}  className="store-content container m-5 rounded shadow-lg mx-auto">
                <div className="row ">
                    <div className="col-3 my-3">
                        {/* Sidebar */}
                        <SidebarItem title="Your Account">
                            <div className="buttons d-flex justify-content-between">
                                <button className="btn btn-secondary border-white border-2 rounded-0">Login</button>
                                <button className="btn btn-primary rounded-0">Register</button>
                            </div>
                        </SidebarItem>

                        <SidebarItem title="Zeah Coins ()">
                            <p className="text-light">Zeah coins are currency used to purchase in-store items.</p>
                            <button className="btn btn-primary rounded-0 ms-auto">Buy Coins</button>
                        </SidebarItem>

                        <SidebarItem title="Cart">
                            <p className="text-light text-center">Please Login To View Your Cart</p>
                        </SidebarItem>

                        <SidebarItem title="Collection Box">
                            <p className="text-light text-center">You have no items waiting in your collection box.</p>
                        </SidebarItem>
                    </div>
                    <div className="col-9 my-4">
                        <Tab.Container defaultActiveKey="home">
                            <Row>
                                <Col md={2}>
                                    <Nav variant="pills" className="flex-column">
                                        {storeTabs && storeTabs.map(storeTab => (
                                            <Nav.Item>
                                                <Nav.Link className="tab-link" eventKey={storeTab.name}>
                                                    <div className="d-flex">
                                                        <img className="py-4" src={storeTab.icon} alt="home" />
                                                        <h5 className="ms-2 py-4">{storeTab.name.toUpperCase()}</h5>
                                                    </div>
                                                </Nav.Link>
                                            </Nav.Item>
                                        ))}
                                    </Nav>
                                </Col>
                                <Col className="ms-5" md={9}>
                                    <Tab.Content>

                                        <Tab.Pane eventKey="home">
                                            <Home />
                                        </Tab.Pane>


                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </div>
                </div>
            </div>
        </div>
    )
}
