import React from 'react';
import './All_Properties.css';
import { 
    Table,
} from 'reactstrap';
import {
    Link,
} from 'react-router-dom';
import ListedProperty from './ListedProperty';
import Properties from './Properties';

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
                    <th>{Properties.name}</th>
                    <th>{Properties.location}</th>
                    <th>{Properties.id}</th>
                </tbody>
            </Table>
        </div>
      );
}