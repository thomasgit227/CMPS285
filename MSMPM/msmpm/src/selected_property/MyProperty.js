import React from 'react';
import './Selected_Property.css';

import PropertyImage from './PropertyImage';
import MyPropertyForm from './MyPropertyForm';
import MyPropertyName from './MyPropertyName';
import { Col, Container, Row } from 'reactstrap';

export default function MyProperty() {
    return (
        <Container className = 'myproperty'>
            <Row>
                <Col size = 'md'>
                    <MyPropertyName/>
                </Col>
            </Row>
            
            <Row>
                <Col size = "lg">
                    <MyPropertyForm/>
                </Col>
            </Row>

            <Row>
                <Col>
                    <PropertyImage/> 
                </Col>
            </Row>
        </Container>
    );
}
