import React, { useState } from 'react';
import './Login.css';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
} from 'reactstrap';

import axios from 'axios';

export default function LoginForm() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        window.location.reload(false);

        axios.post('/api/auth/login', {
            username: username,
            password: password
        })
        .then( (r) => {
            console.log(r.data.token);
            if(r.status === 200) {
                sessionStorage.isLoggedIn = true;
                sessionStorage.username = username;
            }
        });
    };

    return (

        <div>

            <Form className = 'loginform'>
                <FormGroup>
                    <Label>Username:</Label>
                    <Input type="username" name="username" id="username" onChange={(e) => {setUsername(e.target.value)}} placeholder="Username"/>

                    <Label>Password:</Label>
                    <Input type="password" name="password" id="password" onChange={(e) => {setPassword(e.target.value)}} placeholder="Password" />
                </FormGroup>
                <FormGroup>
                    <Button className = 'loginbutton' block onClick = {login}>Login</Button>
                </FormGroup>
            </Form>
        </div>
    );
}
