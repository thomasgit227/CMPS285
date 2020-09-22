import React from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import PropertyImage from './PropertyImage';
import MyPropertyForm from './MyPropertyForm';

export default function MyProperty() {
    return (
        <div className = 'myproperty'>
            <AppNavbar/>
            <PropertyImage/>
            <MyPropertyForm/> 
        </div>
    );
}
