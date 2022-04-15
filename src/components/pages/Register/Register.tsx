
import "./Register.scss";
import {Link, useNavigate} from "react-router-dom";
import CSS from "csstype";
import panelBg from "../../../assets/img/panel-bg-pattern.png";
import {useState} from "react";
import User from "../../../user/user.service";
import {toast} from "react-toastify";


let RegisterStyle: CSS.Properties = {
    backgroundImage: `url(${panelBg})`,
    backgroundSize: 'auto',
    backgroundRepeat: 'repeat',
    backgroundPosition: '0% 0%',
    border: "1px solid #000"
}

export default function Register() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    let handleRegister = (e: any) => {
        e.preventDefault();


        let user = new User()
        let params = {
            email,
            password,
            confirmPassword,
            name
        }

        user.register(params).then(response => {
            if(response.loggedIn) {
                toast.success(response.message)
                setTimeout(() => {
                    navigate("/login")
                }, 3000)
            } else {
                toast.error(response.message)
            }
        })
    }

    return(
        <div className="Register">
            <div style={RegisterStyle} className="container p-2 my-4 mx-auto align-content-center">
                <div className="container auth-container w-50 p-5 my-5 mx-auto bg-secondary">
                    <div className="auth-header">
                        <h1 className="text-info">Register</h1>
                        <p className="text-light"> Already have an account? &nbsp;<Link className="auth-link" to="/login">Login</Link></p>
                    </div>
                    <form className="auth-form text-light">
                        <div className="row">
                            <div className="col-12 my-2">
                                <label>
                                    Display Name <br />
                                    <input className="form-control w-100" type="text"
                                           onChange={e => {setName(e.target.value)}}
                                           value={name}/>

                                </label>

                            </div>
                            <div className="col-12 my-2">
                                <label>
                                    Email Address <br />
                                    <input className="form-control w-100" type="email"
                                           onChange={e => {setEmail(e.target.value)}}
                                           value={email}
                                    />
                                </label>

                            </div>
                            <div className="col-12 mb-3">
                                <label>
                                    Password  <br />
                                    <input className="form-control" type="password"
                                           onChange={e => {setPassword(e.target.value)}}
                                           value={password}
                                    />
                                </label>
                            </div>
                            <div className="col-12 mb-3">
                                <label>
                                    Confirm Password  <br />
                                    <input className="form-control" type="password"
                                           onChange={e => {setConfirmPassword(e.target.value)}}
                                           value={confirmPassword}
                                    />
                                </label>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-primary" onClick={e => handleRegister(e)}>Register</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
