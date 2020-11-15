import React, { useEffect, useState } from 'react';
import './All_Properties.css';
import { 
    NavLink,
    Table,
} from 'reactstrap';
import {
    Link,
} from 'react-router-dom';
import ListedProperty from './ListedProperty';
import Properties from './Properties';
import axios from 'axios';

export default function PropertyList() {

    const [tableInfo,setTableInfo] = useState({
        columns: [{
            name: "Name",
            location: "Location",
            id: "Id"
        }],
        data: [],

    });

    const putIDInSession = (id) => {
        sessionStorage.id = id;
    }

    useEffect(() => {
        axios.get("/api/Properties")
        .then( (res) =>{
            setTableInfo( (table) => {
                const callInfo = {...table};
                res.data.map( (d) => {
                    callInfo.data = [...callInfo.data, d];
                })
                return callInfo;
            })
        })
    },[])

    const rows = tableInfo.data;

    console.log(tableInfo);
    //TODO put ID in session
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
                {rows.map( (row) => (
                    <tbody className = "tableinfo">
                        <th><NavLink tag={Link} to={'myproperty/' + row.id} onClick={putIDInSession(row.id)}>{row.name}</NavLink></th>
                        <th>{row.location}</th>
                        <th>{row.id}</th>
                    </tbody>
                ))}
            </Table>
        </div>
      );
}