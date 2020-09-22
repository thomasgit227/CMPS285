import React from 'react';
import './App.css';
import { 
    Button, 
    Form, 
    FormGroup, 
    Label, 
    Input, 
} from 'reactstrap';

export default function MyPropertyForm() {
    return (
        <div className = 'propertyform'>
            <Form>
            
            <FormGroup check>
                <Label check>
                <Input type="checkbox" />{' '}
                Has Utilities?
                </Label>
            </FormGroup>

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

            <Button>Submit</Button>
            </Form>
        </div>
    );
}