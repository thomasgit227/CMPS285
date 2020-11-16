import React from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';
import './home_page.css';

export default function Test() {
    const makePost = () => {
        axios.post('/api/commands', {
            name: 'Thomas'
        })
        .then(function(response){
            console.log(response);
        })
        .catch(function(error){
            console.log(error);
        })
    }

    const doGet = () => {
        axios.get('/api/commands')
        .then((response) => {
            console.log(response);
          }, (error) => {
            console.log(error);
          });
    }

    return (
        <div className = 'test'>

            <Button color = 'success' onClick = {makePost} block>post</Button>
            <br/>
            <Button color = 'secondary' onClick = {doGet} block>get</Button>
        </div>
    );
}