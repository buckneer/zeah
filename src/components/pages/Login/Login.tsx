import "./Login.scss";
import {Link} from "react-router-dom";
import CSS from "csstype";
import panelBg from "../../../assets/img/panel-bg-pattern.png";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {Flip, toast, ToastContainer} from "react-toastify";
import User from "../../../user/user.service"


let LoginStyle: CSS.Properties = {
    backgroundImage: `url(${panelBg})`,
    backgroundSize: 'auto',
    backgroundRepeat: 'repeat',
    backgroundPosition: '0% 0%',
    border: "1px solid #000"
}



export default function Login() {


    let [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();

    let handleLogin = (e: any) => {
        e.preventDefault();


        let params = {
            email,
            password
        }

        let user = new User();

        user.login(params).then(response => {
            if(response.loggedIn) {
                toast.success(response.message)
                setTimeout(() => {
                    navigate("/store")
                }, 3000)
            } else {
                toast.error(response.message)
            }
        })




    }

    return(
        <div  className="Login h-100">
            <div style={LoginStyle} className="container p-2 my-4 mx-auto align-content-center">
                <div className="container auth-container w-50 p-5 my-5 mx-auto bg-secondary">
                    <div className="auth-header">
                        <h1 className="text-info">Sign In</h1>
                        <p className="text-light"> Don't have an account? &nbsp;<Link className="auth-link" to="/register">Register</Link></p>
                    </div>
                    <form className="auth-form text-light">
                        <div className="row">
                            <div className="col-12 my-2">
                                <label>
                                    Email Address <br />
                                    <input className="form-control w-100" type="email"
                                    onChange={e => setEmail(e.target.value)}
                                    value={email}/>
                                </label>

                            </div>
                            <div className="col-12 mb-3">
                                <label>
                                    Password  <br />
                                    <input className="form-control" type="password"
                                           onChange={e => setPassword(e.target.value)}
                                            value={password}/>
                                </label>
                            </div>
                            <div className="col-12">
                                <button onClick={e => handleLogin(e)} className="btn btn-primary">Log in</button>
                            </div>
                        </div>
                    </form>
                </div>


            </div>
            <ToastContainer autoClose={3000}/>
        </div>
    )
}
