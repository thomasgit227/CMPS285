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

    const login = () => {
        setLoggedIn(true);
        setUsername({username});
        document.cookie="isLoggedIn="+isLoggedIn+";username"+username+";path=/"; 
    };

    const [isLoggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    
    return (

        <div>

            <Form className = 'loginform'>
                <FormGroup>
                    <Label>username</Label>
                    <Input type="username" name="username" id="username" onChange={(e) => setUsername(e.target.value)} placeholder="JohnSmith"/>

                    <Label>password</Label>
                    <Input type="password" name="password" id="password" placeholder="1234" />
                </FormGroup>
                <FormGroup>
                    <Button className = 'loginbutton' block onClick = {login}>Login</Button>
                </FormGroup>
            </Form>
        </div>
    );
}
