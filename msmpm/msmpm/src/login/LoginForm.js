import React, { useState } from 'react';
import './Login.css';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
} from 'reactstrap';

export default function LoginForm() {

    // const [isLoggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        sessionStorage.isLoggedIn = true;
        sessionStorage.username = username;
        sessionStorage.password = password; //This is bad, don't do dis
        //TODO User Auth/Token Junk
        window.location.reload(false);
        // setLoggedIn(true);
    };

    return (

        <div>

            <Form className = 'loginform'>
                <FormGroup>
                    <Label>username</Label>
                    <Input type="username" name="username" id="username" onChange={(e) => {setUsername(e.target.value)}} placeholder="username"/>

                    <Label>password</Label>
                    <Input type="password" name="password" id="password" onChange={(e) => {setPassword(e.target.value)}} placeholder="password" />
                </FormGroup>
                <FormGroup>
                    <Button className = 'loginbutton' block onClick = {login}>Login</Button>
                </FormGroup>
            </Form>
        </div>
    );
}
