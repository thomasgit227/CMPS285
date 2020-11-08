import React, { useEffect, useState } from 'react';
import './Login.css';

import LoginForm from './LoginForm';

export default function Login() {

    const [message, setMsg] = useState("");
    
    useEffect( ()=>{
        setMsg("Signed in as " + sessionStorage.username)
    });

    return (
        <div>
            <h6 className = "message">
                {message}
            </h6>
            <LoginForm/>
        </div>
    );
}