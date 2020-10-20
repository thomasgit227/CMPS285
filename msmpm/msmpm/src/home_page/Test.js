import React from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';
import './home_page.css';

export default function Test() {
    const makePost = () => {
        axios.post('/user', {
            name: 'Thomas'
        })
    }

    const doGet = () => {

    }


    return (
        <div className = 'test'>

            <Button color = 'success' onClick = {makePost} block>post</Button>
            <br/>
            <Button color = 'secondary' onClick = {doGet} block>get</Button>


            
            <br/>
            <br/>
            <br/>
            <h6>
                Temporary Change of Home Page
            </h6>
        </div>
    );
}