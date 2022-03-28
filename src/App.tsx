import React from 'react';
import './App.scss';
import Navigation from "./components/Navigation/Navigation";
import background from "./assets/img/body-background.jpg";
import CSS from "csstype";

const bodyStyles : CSS.Properties = {
    backgroundImage: `url(${background})`,
    minHeight: '500px',
    backgroundAttachment: 'cover',
    backgroundPosition: 'center center'
}

function App() {
    return (
        <div style={bodyStyles} className="App" >
            <Navigation />
        </div>
    );
}

export default App;
