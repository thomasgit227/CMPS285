import React, { useState } from 'react';
import './All_Properties.css';
import {
    Link,
} from 'react-router-dom';

export default function ListedProperty() {

    const [info, setInfo] = useState({
        name: "",
        city: "",
        state: "",
        id: "0000-00"
    });

    return(
        <tr>
            <td>
                <Link to="/properties/myproperty/">
                    {info.name}
                </Link>    
            </td>
            <td>{info.city}, {info.state}</td>
            <td>{info.id}</td>
        </tr>
    );
}