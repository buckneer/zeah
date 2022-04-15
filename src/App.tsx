import React from 'react';
import './App.scss';
import Navigation from "./components/Navigation/Navigation";
import background from "./assets/img/body-background.jpg";
import CSS from "csstype";
import Store from "./components/pages/Store/Store";
import Footer from "./components/Footer/Footer";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "./components/pages/Login/Login";
import Register from "./components/pages/Register/Register";

const bodyStyles : CSS.Properties = {
    backgroundImage: `url(${background}) `,
    minHeight: '500px',
    backgroundAttachment: 'cover',
    backgroundPosition: 'center center',
}

function App() {
    return (
        <div style={bodyStyles} className="App overflow-hidden" >
            <Router>
                <Navigation />
                <Routes >
                    <Route path="/store" element={<Store />}/>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
                <Footer />
            </Router>

        </div>
    );
}

export default App;
