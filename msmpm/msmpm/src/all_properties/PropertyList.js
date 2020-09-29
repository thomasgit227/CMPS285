import React from 'react';
import './All_Properties.css';
import { 
    Table,
} from 'reactstrap';
import {
    Link,
} from 'react-router-dom';

export default function PropertyList() {
    return (
        <div className = 'fulllist'>
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Location</th>
                        <th>ID</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <Link to="/properties/myproperty/">
                                CSTB Building
                            </Link>    
                        </td>
                        <td>Hammond, LA</td>
                        <td>0000-00</td>
                    </tr>

                    <tr>
                        <td>
                            <Link >
                                Chili's
                            </Link>    
                        </td>
                        <td>Hammond, LA</td>
                        <td>0001-00</td>
                    </tr>

                    <tr>
                        <td>
                            <Link >
                                GDoc's House
                            </Link>    
                        </td>
                        <td>UNKNOWN</td>
                        <td>0002-00</td>
                    </tr>
                </tbody>
            </Table>
        </div>
      );
}