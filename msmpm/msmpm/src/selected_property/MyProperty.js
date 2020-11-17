import React from 'react';
import './Selected_Property.css';

import PropertyImage from './PropertyImage';
import MyPropertyForm from './MyPropertyForm';
import MyPropertyName from './MyPropertyName';
import { Col, Container, Row } from 'reactstrap';

export default function MyProperty(props) {
    return (
        <Container className = 'myproperty'>

            {props.formType === "EditForm" &&
                <Row>
                    <Col size = 'md'>
                        <MyPropertyName/>
                    </Col>
                </Row>
            }
            
            <Row>
                <Col size="lg">
                    <MyPropertyForm formType={props.formType} />
                </Col>
            </Row>

            {props.formType === "EditForm" &&
                <Row>
                    <Col>
                        <PropertyImage/> 
                    </Col>
                </Row>
            }
        </Container>
    );
}
