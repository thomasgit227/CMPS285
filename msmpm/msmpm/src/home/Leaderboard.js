import React from 'react';
import {
    ListGroup,
    ListGroupItem,
  } from 'reactstrap';
import {
    Router,
    Link,
    BrowserRouter,
} from 'react-router-dom';


export default function Leadership() {
    return (
        <BrowserRouter>    
            <div>
                <h3 className = 'leadership_heading'>
                    Leaderboard
                </h3>
                <ListGroup className = 'leaderboard'>
                    <ListGroupItem>
                        <Link>
                            property 1
                        </Link>
                    </ListGroupItem>
                    <ListGroupItem tag = 'a' href = "/properties/2/">property 2</ListGroupItem>
                    <ListGroupItem tag = 'a' href = "/properties/3/">property 3</ListGroupItem>
                    <ListGroupItem tag = 'a' href = "/properties/4/">property 4</ListGroupItem>
                    <ListGroupItem tag = 'a' href = "/properties/5/">property 5</ListGroupItem>
                    <ListGroupItem tag = 'a' href = "/properties/6/">property 6</ListGroupItem>
                    <ListGroupItem tag = 'a' href = "/properties/">. . . </ListGroupItem>
                </ListGroup>
            </div>
        </BrowserRouter>
    );

}