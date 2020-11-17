import React, { useState, useEffect, useMemo } from 'react';
import './home_page.css';
import {
    Button,
    ButtonGroup,
    ListGroup,
    ListGroupItem,
    NavLink,
  } from 'reactstrap';
import {
    Link,
} from 'react-router-dom';

import axios from 'axios';

export default function Leadership() {

    const [order, setOrder] = useState("descending");

    const [tableInfo,setTableInfo] = useState({
        columns: [{
            name: "Name",
            location: "Location",
            id: "Id"
        }],
        data: [],
    });

    useEffect(() => {
        axios.get("/api/Properties/best/")
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

    const putIDInSession = (id) => {
        sessionStorage.setItem("id", id)
    }

    return (
            <div>

                <h4 className = 'leaderboard_heading'>
                    Leaderboard
                </h4>
 
                <ListGroup className = 'leaderboard'>
                { order == "ascending" ?
                    rows.map( (row) => (
                        <ListGroupItem className = "tableinfo">
                            <NavLink tag={Link} to={'/properties/myproperty/' + row.id} onClick={() => putIDInSession(row.id)}>{row.name}</NavLink>
                        </ListGroupItem>
                    )) 
                    : 
                    rows.map( (row) => (
                        <ListGroupItem className = "tableinfo">
                            <NavLink tag={Link} to={'/properties/myproperty/' + row.id} onClick={() => putIDInSession(row.id)}>{row.name}</NavLink>
                        </ListGroupItem>
                    )).reverse()
                }
                </ListGroup>

                <ButtonGroup className = "orderbuttons">
                    <Button onClick = {() => setOrder("ascending")}> ▲ </Button>
                    <Button onClick = {() => setOrder("descending")}> ▼ </Button>
                </ButtonGroup>
            </div>
    );

}