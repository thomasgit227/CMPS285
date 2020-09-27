import React from 'react';
import './Selected_Property.css';
import AppNavbar from '../main_components/AppNavbar';
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
