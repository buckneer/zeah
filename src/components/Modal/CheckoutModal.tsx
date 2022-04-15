import "./Modal.scss";
import Item from "../../item/item.type";
import {Modal, ModalBody, ModalDialog, ModalFooter, ModalHeader, ModalTitle} from "react-bootstrap";
import {PayPalButtons, PayPalScriptProvider} from "@paypal/react-paypal-js";
import {MouseEventHandler, useEffect, useState} from "react";
import {CoinPackType} from "../TabElements/coins/Coins";
import {OnApproveData, OnApproveActions} from "@paypal/paypal-js/types/components/buttons";
import {toast, ToastContainer} from "react-toastify";
import UserService from "../../user/user.service";


export interface CheckoutItem {
    name: string,
    description: string,
    price: string,
    quantity: number
}

export default function CheckoutModal({item, show, closeModal} : {item: CheckoutItem, show: boolean, closeModal: MouseEventHandler}) {


    const initialOptions = {
        "client-id": "CLIENT_ID",
        currency: "USD",
        intent: "capture",
    }
    const [success, setSuccess] = useState(false);
    const [ErrorMessage, setErrorMessage] = useState("");
    const [orderID, setOrderID] = useState(false);



    const createOrder = (data: any, action: any) => {
        return action.order.create({
            purchase_units: [{
                "name": item.name,
                "description": item.description,
                "amount": {
                    "currency_code": "USD",
                    "value": item.price,
                }
            }],
            application_context: {
                shipping_preference: "NO_SHIPPING",
            },
        }).then((orderID : any) => {
            setOrderID(orderID);
            return orderID;
        });
    }

    const onApprove = (data: any, actions: any) => {
        return actions.order.capture().then(function (details: any) {
            const {payer} = details;
            let user = new UserService();

            user.addCoins({"quantity": item.quantity}).then(response => {
                if(response.headers['x-access-token']) {
                    localStorage.removeItem("authAccess");
                    console.log(localStorage.getItem("authAccess"))
                    localStorage.setItem('authAccess', response.headers['x-access-token'])
                }
                setSuccess(true)
            })

        })
    }

    const onError = (data: any, actions: any) => {
        toast.error("An Error occurred with your payment")
        setErrorMessage("An Error occurred with your payment ");
    }


    useEffect(() => {

       if(success) {
           toast.success(`Success. You bought ${item.name}`)
       }
    }, [success]);


    return (
        <Modal show={show} >
            <PayPalScriptProvider options={initialOptions}>
                <ModalDialog>
                    <ModalHeader>
                        <ModalTitle>{item.name}</ModalTitle>
                    </ModalHeader>
                    <ModalBody>
                        <p>{item.description}</p>
                        <PayPalButtons style={{layout: 'horizontal'}}
                        createOrder={createOrder}
                        onApprove={onApprove}/>
                    </ModalBody>
                    <ModalFooter>
                        <button className="btn btn-primary" onClick={closeModal}>Close</button>
                    </ModalFooter>
                </ModalDialog>
                <ToastContainer/>
            </PayPalScriptProvider>

        </Modal>

    )
}
