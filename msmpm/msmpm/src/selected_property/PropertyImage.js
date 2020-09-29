import React from 'react';
import './Selected_Property.css';
import{
    Media,
} from 'reactstrap'

export default function PropertyImage() {
    return (
        <div className = 'propertyimage'>
            <Media img src="../../../assets/genericimage.jpg"/>
        </div>
    );
}
