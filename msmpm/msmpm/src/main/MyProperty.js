import React from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import PropertyImage from './PropertyImage';
import{
    Media,
    InputGroup, 
    InputGroupAddon, 
    InputGroupText, 
    Input,
} from 'reactstrap'

export default function MyProperty() {
    return (
        <div className = 'myproperty'>
            <AppNavbar/>
            <PropertyImage/>
        </div>
    );
}
