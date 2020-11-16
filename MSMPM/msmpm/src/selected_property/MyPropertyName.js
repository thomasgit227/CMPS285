import React, { useState } from 'react';
import './Selected_Property.css';
import axios from 'axios';

export default function MyPropertyName() {

    const [location, setLocation] = useState("Generic Building");
    const [name, setName] = useState("00");

    axios.get('/api/Properties/' + sessionStorage.getItem('id'))
        .then((r) => {
            setLocation(r.data.location)
            setName(r.data.name);
        });
    ;

    return (
        <div className = 'name'>
            <h3>
                {location}
            </h3>
            <h6>
                {name}
            </h6>
        </div>
    );
}
