import React from 'react';
import { 
    Button,
    NavLink,
    Link,
 } from 'reactstrap';
import './Main_Components.css';

export default function NoAccess() {
    return (
        <div className = 'no_access_page'>
            <h6> You Do Not Have Access to this Page </h6>
            <Button><NavLink tag={Link} to = "/login/"> properties </NavLink> Please Login </Button>
        </div>
    );
}