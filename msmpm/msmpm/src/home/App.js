import React from 'react';
import './App.css';
import './AppNavbar';
import {
  ListGroup,
  ListGroupItem,
  Badge, 
} from 'reactstrap';

function App() {

  

  return (
    <div>
      <div>

      </div>
      <div className = 'propertylist_heading'>
        <Badge pill>
          properties
        </Badge>
      </div>
      <div className = 'propertylist'>

        <ListGroup>
          <ListGroupItem tag = 'a' href = "/properties/1/">property 1</ListGroupItem>
          <ListGroupItem tag = 'a' href = "/properties/2/">property 2</ListGroupItem>
          <ListGroupItem tag = 'a' href = "/properties/3/">property 3</ListGroupItem>
          <ListGroupItem tag = 'a' href = "/properties/4/">property 4</ListGroupItem>
          <ListGroupItem tag = 'a' href = "/properties/5/">property 5</ListGroupItem>
          <ListGroupItem tag = 'a' href = "/properties/6/">property 6</ListGroupItem>
          <ListGroupItem tag = 'a' href = "/properties/">. . . </ListGroupItem>
        </ListGroup>

      </div>
    </div>
  );
}

export default App;
