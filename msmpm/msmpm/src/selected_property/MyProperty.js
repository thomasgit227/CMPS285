import React from 'react';
import './Selected_Property.css';

import PropertyImage from './PropertyImage';
import MyPropertyForm from './MyPropertyForm';
import MyPropertyName from './MyPropertyName';

export default function MyProperty() {
    return (
        <div className = 'myproperty'>
            <MyPropertyName/>
            <PropertyImage/>
            <MyPropertyForm/> 
        </div>
    );
}
