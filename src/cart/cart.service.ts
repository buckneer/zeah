
import axios from "axios";
import {CartItem} from "./cart.type";


export default class CartService {

    baseURL = "https://zeah.herokuapp.com/api/cart"

    getCart() : CartItem[] {

        let cart : CartItem[] = []

        axios.get(this.baseURL, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("authAccess")}`,
                "x-refresh": `${localStorage.getItem("authRefresh")}`
            }
        }).then(response => {
            if(response.headers.xAccessToken) {
                console.log(response.headers.xAccessToken)
            }

            cart = [...response.data]
        })


        return cart
    }

}
