import './Store.scss'
import CSS from 'csstype';
import panelBg from '../../../assets/img/panel-bg-pattern.png';
import SidebarItem from "../../SidebarItem/SidebarItem";
import {Col, Nav, Row, Tab} from "react-bootstrap";
import homeIc from '../../../assets/icons/store-home.png';
import coinsIc from '../../../assets/icons/store-zeah.png';
import relicsIc from '../../../assets/icons/store-relics.png';
import boxesIc from '../../../assets/icons/store-boxes.png';
import weaponsIc from '../../../assets/icons/store-weapons.png';
import armorIc from '../../../assets/icons/store-armor.png';
import customsIc from '../../../assets/icons/store-customs.png';
import ironmenIc from '../../../assets/icons/store-ironmen.png'
import Home from "../../TabElements/home/Home";
import Coins from "../../TabElements/coins/Coins";
import {Bonds} from "../../TabElements/bonds/Bonds";
import Relics from "../../TabElements/relics/Relics";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import UserService from "../../../user/user.service";
import Weapons from "../../TabElements/weapons/Weapons";
import Boxes from "../../TabElements/boxes/Boxes";
import Armor from "../../TabElements/armor/Armor";
import Customs from "../../TabElements/customs/Customs";
import Ironmen from "../../TabElements/ironmen/Ironmen";
import ItemService from "../../../item/item.service";
import Item from "../../../item/item.type";
import User from "../../../user/user.type";

let storeStyles: CSS.Properties = {
    backgroundImage: `url(${panelBg})`,
    backgroundSize: 'auto',
    backgroundRepeat: 'repeat',
    backgroundPosition: '0% 0%',
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



    const [loggedIn, setLoggedIn] = useState(false);
    const [coins, setCoins] = useState<number>(0);
    const [items, setItems] = useState<Item[]>([])
    const [currUser, setCurrUser] = useState<User | null>()
    let user = new UserService();

    useEffect(() => {


        if(localStorage.getItem("authAccess") && localStorage.getItem("authRefresh")) {
            console.log("use");

            user.getUser().then(response => {
                if(response.headers['x-access-token']) {
                    localStorage.removeItem("authAccess");
                    localStorage.setItem('authAccess', response.headers['x-access-token'])
                }

                setCurrUser(response.data);
                setCoins(response.data.zeahCoins)
                setLoggedIn(true)

            })

        } else {
            setLoggedIn(false)
            setCurrUser(null)
        }

        let itemService = new ItemService();

        itemService.getAll().then(response => {
            setItems([...response.data])
        })

    }, [loggedIn, coins]);


    let handleCategories = (category: string) => {


        return items.filter((item) => {
            return item.category === category
        })

    }

    let calculateItems = (items: Item[]) => {

        return items.sort().filter((x, i, a) => !i || x !== a[i-1])

    }


    let handleLogout = async (e: any) => {
        e.preventDefault()
        await user.logout()
        window.location.reload();
    }

    return(
        <div className="Store">
            <div style={storeStyles}  className="store-content container m-5 rounded shadow-lg mx-auto">
                <div className="row ">
                    <div className="col-lg-3 col-12 my-3">
                        {/* Sidebar */}

                        {loggedIn && (
                            <SidebarItem title="Your Account">
                                <div className="buttons d-flex justify-content-between">
                                    <p className="text-info">User: {currUser?.name}</p>
                                    <button onClick={handleLogout} className="btn btn-primary rounded-0">Logout</button>
                                </div>
                            </SidebarItem>
                        )}

                        {!loggedIn && (
                            <SidebarItem title="Your Account">
                                <div className="buttons d-flex justify-content-between">
                                    <Link to="/login" className="btn btn-warning rounded-0">Login</Link>
                                    <Link to="/register" className="btn btn-primary rounded-0">Register</Link>
                                </div>
                            </SidebarItem>

                        )}


                        <SidebarItem title={`Zeah Coins (${coins})`}>
                            <p className="text-light">Zeah coins are currency used to purchase in-store items.</p>
                            <button className="btn btn-primary rounded-0 ms-auto">Buy Coins</button>
                        </SidebarItem>

                        <SidebarItem title="Cart">
                            <p className="text-light text-center">Please Login To View Your Cart</p>
                        </SidebarItem>
                        {currUser === null && (
                            <SidebarItem title="Collection Box">
                                <p>Login to view your collection</p>
                            </SidebarItem>
                        )}
                        {currUser !== null && (
                            <SidebarItem title="Collection Box">
                                <p>You have bought {currUser?.items.length} items</p>

                            </SidebarItem>
                        )}

                    </div>
                    <div className="col-lg-9 col-10 my-4">
                        <Tab.Container defaultActiveKey="home">
                            <Row>
                                <Col md={2}>
                                    <Nav className="tabs-container flex-column">
                                        {storeTabs && storeTabs.map(storeTab => (
                                            <Nav.Item>
                                                <Nav.Link className="tab-link" eventKey={storeTab.name}>
                                                    <div className="tab-data d-flex">
                                                        <img className="py-4" src={storeTab.icon} alt="home" />
                                                        <h5 className="ms-2 py-4 fw-bold">{storeTab.name.toUpperCase()}</h5>
                                                    </div>
                                                </Nav.Link>
                                            </Nav.Item>
                                        ))}
                                    </Nav>
                                </Col>
                                <Col className="ms-5 " md={9}>
                                    <Tab.Content>

                                        <Tab.Pane eventKey="home">
                                            <Home />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="coins">
                                            <Coins />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="bonds">
                                            <Bonds />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="relics">
                                            <Relics relics={handleCategories("relics")} />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="weapons">
                                            <Weapons weapons={handleCategories("weapons")} />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="boxes">
                                            <Boxes boxes={handleCategories("boxes")} />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="armor">x
                                            <Armor armor={handleCategories("armor")} />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="customs">
                                            <Customs customs={handleCategories("customs")} />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="ironmen">
                                            <Ironmen ironmen={handleCategories("ironmen")} />
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
