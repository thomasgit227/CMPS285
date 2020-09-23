import React, { Component, useState } from 'react';
import '../App.css';
import { 
    Button, 
    Form, 
    FormGroup, 
    Label, 
    Input,
    CustomInput,
    Collapse
} from 'reactstrap';


export default function MyPropertyForm() {
        const [isOpen, setIsOpen] = useState(false);

        const toggle = () => setIsOpen(!isOpen);
        return (
            <div className = 'propertyform'>

                <Form>
                    <FormGroup>
                        <Label for="roof">Roof</Label>
                        <Input type="select" name="roof" id="roof">
                        <option>1</option>
                        <option>3</option>
                        <option>5</option>
                        <option>7</option>
                        </Input>

                        <Label for="extwalls">Exterior Walls</Label>
                        <Input type="select" name="extwalls" id="extwalls">
                        <option>1</option>
                        <option>3</option>
                        <option>5</option>
                        </Input>

                        <Label for="openings">Openings</Label>
                        <Input type="select" name="openings" id="openings">
                        <option>1</option>
                        <option>3</option>
                        <option>5</option>
                        </Input>
                        
                        <Label for="framework">Framework</Label>
                        <Input type="select" name="framework" id="framework">
                        <option>1</option>
                        <option>3</option>
                        <option>5</option>
                        </Input>

                        <Label for="paint">Paint</Label>
                        <Input type="select" name="paint" id="paint">
                        <option>1</option>
                        <option>3</option>
                        <option>5</option>
                        </Input>

                        <Label for="piers">Piers & Footlings</Label>
                        <Input type="select" name="piers" id="piers">
                        <option>1</option>
                        <option>3</option>
                        <option>5</option>
                        </Input>    

                        <Label for="chimineys">Chiminey(s)</Label>
                        <Input type="select" name="chimineys" id="chimineys">
                        <option>1</option>
                        <option>3</option>
                        <option>5</option>
                        </Input>

                        <Label for="doors">Doors</Label>
                        <Input type="select" name="doors" id="doors">
                        <option>1</option>
                        <option>3</option>
                        <option>5</option>
                        </Input>

                        <Label for="windows">Windows</Label>
                        <Input type="select" name="windows" id="windows">
                        <option>1</option>
                        <option>3</option>
                        <option>5</option>
                        </Input>

                        <Label for="shutters">Shutters</Label>
                        <Input type="select" name="shutters" id="shutters">
                        <option>1</option>
                        <option>3</option>
                        <option>5</option>
                        </Input>

                        <Label for="flooring">Flooring</Label>
                        <Input type="select" name="flooring" id="flooring">
                        <option>1</option>
                        <option>3</option>
                        <option>5</option>
                        </Input>
                    </FormGroup>

                    <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Utility Only</Button>

                    <Collapse isOpen={isOpen}>
                        <Form>
                            <FormGroup>
                                <Label for="electrical">Electrical</Label>
                                <Input type="select" name="electrical" id="electrical">
                                <option>1</option>
                                <option>3</option>
                                <option>5</option>
                                </Input>

                                <Label for="plumbing">Plumbing</Label>
                                <Input type="select" name="plumbing" id="plumbing">
                                <option>1</option>
                                <option>3</option>
                                <option>5</option>
                                </Input>

                                <Label for="sewage">Sewage</Label>
                                <Input type="select" name="sewage" id="sewages">
                                <option>1</option>
                                <option>3</option>
                                <option>5</option>
                                </Input>

                                <Label for="hvac">HVAC</Label>
                                <Input type="select" name="hvac" id="hvac">
                                <option>1</option>
                                <option>3</option>
                                <option>5</option>
                                </Input>
                            </FormGroup>
                        </Form>
                    </Collapse>
                    <br/>
  
                    <Button>Submit</Button>

                </Form>
            </div>
        );
    }
