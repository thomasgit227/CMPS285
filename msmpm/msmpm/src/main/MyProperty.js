import React from 'react';
import './App.css';
import AppNavbar from './AppNavbar';

export default function MyProperty() {
    return (
        <div className = 'myproperty'>
            <AppNavbar/>
            <h3>
                This is a property
            </h3>
            <h6>
                Eventually we will have this route to a page where we can pull data from the DB
            </h6>
        </div>
    );
}