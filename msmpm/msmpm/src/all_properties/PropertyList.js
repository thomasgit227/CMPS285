import React, { useEffect, useState } from 'react';
import './All_Properties.css';
import { 
    NavLink,
    Table,
    Button
} from 'reactstrap';
import {
    Link,
} from 'react-router-dom';
import ListedProperty from './ListedProperty';
import Properties from './Properties';
import axios from 'axios';

export default function PropertyList() {

    

    //If status code equals 200 remove the 
    const handleDelete = async (id) => {
        let res = await axios.delete(`https://localhost:44378/api/Properties/${id}`);
        if(res.status === 200){
            let newTableInfo = tableInfo.data.filter(property => property.id !== res.data.id);
            setTableInfo({
                columns: [{
                    name: "Name",
                    location: "Location",
                    id: "Id"
                }],
                data: newTableInfo
            });
        }
        //Filtering based off condition of property ID not equaling result
        //Give us property and filter (array method) and return a new array based on condition of function AKA property.id != <res className="data id">//AKA if the id in our array is not the id of the data we deleted</res>
        //Give us an array with only the properties that arent the ID of the one that we deleted
        //Grab table info which should be an array of 
    }  

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
                        <th><Button color="primary" onClick={() => handleDelete(row.id)}> Delete </Button></th>
                    </tbody>
                ))}
            </Table>
        </div>
    );
}