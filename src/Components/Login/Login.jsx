import './Login.css'
import logolb from '../Assets/logolb.png';
import React, { useState } from 'react';
import Home from '../Home/Home';

const Login = () => {
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    const [message, setMessage] = useState('')
    const[isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();

        if (username == 'admin' && password == '1234'){
            setIsLoggedIn(true);
        }else{
            setMessage('Invalid Username or Password')

        }
    }

    if(isLoggedIn){
        return <Home/>
    }

    return(
        <div className="container">
            <div className="header">
                <div className="text">Brighter Reading</div>
                <div className="underline"></div>
            </div>
            <form onSubmit={handleLogin}>
            <div className="inputs">
                <div className="input">
                    <input type="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="input">
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
            </div>
            <div className="invalid-message">{message && <p>{message}</p>}</div>
            <div className="submit-container">
                <button className="submit" type="submit">Log In</button>
            </div>
            <div className="image-container">
                <img className="image" src={logolb}></img>
            </div>
            </form>
            
        </div>
    )
}

export default Login