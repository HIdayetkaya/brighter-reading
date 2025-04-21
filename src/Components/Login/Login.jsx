import React from "react";
import './Login.css'
import logolb from '../Assets/logolb.png';

const Login = () => {
    return(
        <div className="container">
            <div className="header">
                <div className="text">Brighter Reading</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <input type="username" placeholder="Username" />
                </div>
                <div className="input">
                    <input type="password" placeholder="Password"/>
                </div>
            </div>
            <div className="submit-container">
                <button className="submit">Log In</button>
            </div>
            <div className="image-container">
                <img className="image" src={logolb}></img>
            </div>
            
        </div>
    )
}

export default Login