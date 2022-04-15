import {Modal, ModalBody, ModalDialog, ModalFooter, ModalHeader, ModalTitle} from "react-bootstrap";
import {toast, ToastContainer} from "react-toastify";
import Item from "../../item/item.type";
import {MouseEventHandler} from "react";
import ItemService from "../../item/item.service";


export default function ConfirmModal(
    {
        item,
        toggleModal,
        show
    }:
    {
        item: Item,
        toggleModal: MouseEventHandler,
        show: boolean
    }) {




    let handleClick = (item: Item, e: any) => {
        let itemService = new ItemService();


        itemService.buyItem({itemId: item._id!}).then(response => {
            if(response.data.message) {
                toast.error(response.data.message)
            } else {
                toast.success( `Successfully Bought: ${item.name}`)
            }


            setTimeout(() => {
                toggleModal(e)
            }, 1000)


        }).catch(error => {
            toast.error("Internal Server Error")
        })
    }


    return (
        <Modal show={show}>
            <ModalDialog>
                <ModalHeader>
                    <ModalTitle>You are about to buy: {item.name}</ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <p>description: {item.description}</p>
                    <p>price: {item.price}</p>
                </ModalBody>
                <ModalFooter>
                    <button className="btn btn-primary" onClick={toggleModal}>Close</button>
                    <button className="btn btn-secondary" onClick={(e) => handleClick(item, e)}>Buy</button>
                </ModalFooter>
            </ModalDialog>
            <ToastContainer autoClose={1000}/>
        </Modal>
    )
}
