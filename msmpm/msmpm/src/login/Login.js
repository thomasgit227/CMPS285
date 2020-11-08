import React, { useEffect, useState } from 'react';
import './Login.css';

import LoginForm from './LoginForm';

export default function Login() {

    const [message, setMsg] = useState("");
    
    useEffect( ()=>{
        (sessionStorage.getItem("isLoggedIn") == "true") ? setMsg("Logged In") : setMsg("Nah");
        console.log(sessionStorage.getItem("IsLoggedIn")==true);
    });

    return (
        <div>
            {sessionStorage.getItem("isLoggedIn") == "true" ? 
            
            <h6 className = "message"> {message} </h6>
            : 
            <LoginForm/>
            }
        </div>
    );
}