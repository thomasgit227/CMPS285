import React from 'react';
import './Login.css';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    Container, 
    Row, 
    Col
} from 'reactstrap';

export default function LoginForm() {
    return (
        <div>

            <Form className = 'loginform'>
                <FormGroup>
                    <Label>username</Label>
                    <Input type="username" name="username" id="username" placeholder="JohnSmith" />

                    <Label>password</Label>
                    <Input type="password" name="password" id="password" placeholder="1234" />
                </FormGroup>
                <FormGroup>
                    <Button className = 'loginbutton' block>Login</Button>
                </FormGroup>
            </Form>

        </div>
    );
}