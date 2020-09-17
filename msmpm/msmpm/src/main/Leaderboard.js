import React from 'react';
import {
    ListGroup,
    ListGroupItem,
  } from 'reactstrap';
import {
    Link,
} from 'react-router-dom';


export default function Leadership() {
    return (
            <div>

                <h3 className = 'leaderboard_heading'>
                    Leaderboard
                </h3>

                <ListGroup className = 'leaderboard'>

                    <ListGroupItem>
                        <Link to="/properties/1">
                            property 1
                        </Link>
                    </ListGroupItem>

                    <ListGroupItem>
                        <Link to="/properties/2">
                            property 2
                        </Link>
                    </ListGroupItem>

                    <ListGroupItem>
                        <Link to="/properties/3">
                            property 3
                        </Link>
                    </ListGroupItem>

                    <ListGroupItem>
                        <Link to="/properties/4">
                            property 4
                        </Link>
                    </ListGroupItem>

                    <ListGroupItem>
                        <Link to="/properties/5">
                            property 5
                        </Link>
                    </ListGroupItem>

                    <ListGroupItem>
                        <Link to="/properties/6">
                            property 6
                        </Link>
                    </ListGroupItem>

                    <ListGroupItem>
                        <Link to="/properties/">
                            . . . 
                        </Link>
                    </ListGroupItem>

                </ListGroup>
            </div>
    );

}