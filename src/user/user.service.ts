import {loginSchema, registerSchema} from "./user.schema";
import axios from "axios";
import {toast} from "react-toastify";
import {AddCoinsRequest} from "./user.type";


export type UserResponse = {
    message: string,
    loggedIn: boolean
}

export type CoinsResponse = {
    status: boolean,
    payload: number
}

export default class UserService {



    loggedUserConfig = {
        "Authorization": `Bearer ${localStorage.getItem("authAccess")}`,
        "x-refresh": `${localStorage.getItem("authRefresh")}`
    }

    async getUser() {
        return axios.get("http://localhost:1337/api/user/", {
            headers: this.loggedUserConfig
        })
    }

    async login(data: loginSchema): Promise<UserResponse> {
        let res = {message: "", loggedIn: false}

        await axios.post("http://localhost:1337/api/sessions", data).then(
            response => {
                if(response.data.success === false) {
                    res = {message: "There was an error", loggedIn: false}
                } else {

                    localStorage.setItem("authAccess", response.data.accessToken);
                    localStorage.setItem("authRefresh", response.data.refreshToken);

                    res = {message: "Logged In ... redirecting", loggedIn: true}
                }
            }
        ).catch(error => {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                res = {message: "Username or Password incorrect", loggedIn: false}
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                res = {message: "Internal Server error", loggedIn: false}
            }
        })
        return res
    }


    async register(data: registerSchema) : Promise<UserResponse> {
        let res = {message: "", loggedIn: false}

        await axios.post("http://localhost:1337/api/users", data).then(response => {
            if(response.data.success === false) {
                res = {message: "There was a problem", loggedIn: false}
            } else {
                res = {message: "User Registered ... redirecting to login", loggedIn: true}
            }
        }).catch(error => {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                res = {message: "Username or Password incorrect", loggedIn: false}
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                res = {message: "Internal Server error", loggedIn: false}
            }
        })

        return res
    }


    async logout() : Promise<boolean> {
        let res = false
        await axios.delete("http://localhost:1337/api/sessions", {
            headers: this.loggedUserConfig
        }).then(response => {
            localStorage.removeItem("authAccess");
            localStorage.removeItem("authRefresh");
        }).catch(error => {
            res = false;
        })

        return res
    }


    async getCoins() {
        return axios.get("http://localhost:1337/api/zeah", {
            headers: this.loggedUserConfig
        })

    }


    async addCoins(data: AddCoinsRequest) {
        return axios.post("http://localhost:1337/api/zeah", data,{
            headers: this.loggedUserConfig
        })
    }


}
