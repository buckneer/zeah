
import http from "../http-common";
import Item from "./item.type";
import axios from "axios"
import {buyItemSchema} from "./item.schema";

export default class ItemService {

    loggedUserConfig = {
        "Authorization": `Bearer ${localStorage.getItem("authAccess")}`,
        "x-refresh": `${localStorage.getItem("authRefresh")}`
    }

    baseURL = "https://zeah.herokuapp.com/api/items"

    getAll() {

        return http.get<Array<Item>>(this.baseURL)
    }

    getByCategory(category: string) {
        return axios.get<Array<Item>>(`${this.baseURL}/${category}`);
    }

    create(data: Item) {
        return http.post<Item>("/items", data);
    }


    buyItem(data: buyItemSchema) {
        return axios.post("https://zeah.herokuapp.com/api/buy", data, {
            headers: this.loggedUserConfig
        })
    }
}
