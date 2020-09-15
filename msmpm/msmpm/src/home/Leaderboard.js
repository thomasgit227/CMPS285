import React from 'react';
import {
    ListGroup,
    ListGroupItem,
  } from 'reactstrap';
import {
    Link,
    BrowserRouter,
} from 'react-router-dom';


export default function Leadership() {
    return (
        <BrowserRouter>    
            <div>
                <h3 className = 'leaderboard_heading'>
                    Leaderboard
                </h3>
                <ListGroup className = 'leaderboard'>
                    <ListGroupItem>
                        <Link>
                            property 1
                        </Link>
                    </ListGroupItem>

                    <ListGroupItem tag = 'a' href = "/properties/">. . . </ListGroupItem>
                </ListGroup>
            </div>
        </BrowserRouter>
    );

}