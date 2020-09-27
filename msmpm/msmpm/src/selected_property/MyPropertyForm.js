import React, {useState } from 'react';
import './Selected_Property.css';
import { 
    Button, 
    Form, 
    FormGroup, 
    Collapse,
    ButtonGroup
} from 'reactstrap';


export default function MyPropertyForm() {
        const [isOpen, setIsOpen] = useState(false);
        const toggle = () => setIsOpen(!isOpen);
        
        //All
        var [roofSelected, roofSetSelected] = useState(null);
        var [extSelected, extSetSelected] = useState(null);
        var [opnsSelected, opnsSetSelected] = useState(null);
        var [fwSelected, fwSetSelected] = useState(null);
        var [paintSelected, paintSetSelected] = useState(null);
        var [pfSelected, pfSetSelected] = useState(null);
        var [chimSelected, chimSetSelected] = useState(null);
        var [doorSelected, doorSetSelected] = useState(null);
        var [windSelected, windSetSelected] = useState(null);
        var [shutSelected, shutSetSelected] = useState(null);
        var [floorSelected, floorSetSelected] = useState(null);
        //Utility Only
        var [elecSelected, elecSetSelected] = useState(null);
        var [plumbSelected, plumbSetSelected] = useState(null);
        var [sewSelected, sewSetSelected] = useState(null);
        var [hvacSelected, hvacSetSelected] = useState(null);

        return (
            <div className = 'propertyform'>

                <Form>
                    <FormGroup>
                        <div>
                            <br/>
                            <h6>
                                Roof
                            </h6>
                            <ButtonGroup>
                                <Button color="primary" onClick={() => roofSetSelected(1)} active={roofSelected === 1}>1</Button>
                                <Button color="primary" onClick={() => roofSetSelected(3)} active={roofSelected === 3}>3</Button>
                                <Button color="primary" onClick={() => roofSetSelected(5)} active={roofSelected === 5}>5</Button>
                                <Button color="primary" onClick={() => roofSetSelected(7)} active={roofSelected === 7}>7</Button>
                            </ButtonGroup>
                            <br/>
                        </div>

                        <div>
                            <br/>
                            <h6>
                                Exterior Walls
                            </h6>
                            <ButtonGroup>
                                <Button color="primary" onClick={() => extSetSelected(1)} active={extSelected === 1}>1</Button>
                                <Button color="primary" onClick={() => extSetSelected(3)} active={extSelected === 3}>3</Button>
                                <Button color="primary" onClick={() => extSetSelected(5)} active={extSelected === 5}>5</Button>
                            </ButtonGroup>
                            <br/>
                        </div>


                        <div>
                            <br/>
                            <h6>
                                Openings
                            </h6>
                            <ButtonGroup>
                                <Button color="primary" onClick={() => opnsSetSelected(1)} active={opnsSelected === 1}>1</Button>
                                <Button color="primary" onClick={() => opnsSetSelected(3)} active={opnsSelected === 3}>3</Button>
                                <Button color="primary" onClick={() => opnsSetSelected(5)} active={opnsSelected === 5}>5</Button>
                            </ButtonGroup>
                            <br/>
                        </div>

                        <div>
                            <br/>
                            <h6>
                                Framework
                            </h6>
                            <ButtonGroup>
                                <Button color="primary" onClick={() => fwSetSelected(1)} active={fwSelected === 1}>1</Button>
                                <Button color="primary" onClick={() => fwSetSelected(3)} active={fwSelected === 3}>3</Button>
                                <Button color="primary" onClick={() => fwSetSelected(5)} active={fwSelected === 5}>5</Button>
                            </ButtonGroup>
                            <br/>
                        </div>

                        <div>
                            <br/>
                            <h6>
                                Paint
                            </h6>
                            <ButtonGroup>
                                <Button color="primary" onClick={() => paintSetSelected(1)} active={paintSelected === 1}>1</Button>
                                <Button color="primary" onClick={() => paintSetSelected(3)} active={paintSelected === 3}>3</Button>
                                <Button color="primary" onClick={() => paintSetSelected(5)} active={paintSelected === 5}>5</Button>
                            </ButtonGroup>
                            <br/>
                        </div>

                        <div>
                            <br/>
                            <h6>
                                Piers & Footlings
                            </h6>
                            <ButtonGroup>
                                <Button color="primary" onClick={() => pfSetSelected(1)} active={pfSelected === 1}>1</Button>
                                <Button color="primary" onClick={() => pfSetSelected(3)} active={pfSelected === 3}>3</Button>
                                <Button color="primary" onClick={() => pfSetSelected(5)} active={pfSelected === 5}>5</Button>
                            </ButtonGroup>
                            <br/>
                        </div> 

                        <div>
                            <br/>
                            <h6>
                                Chimneys
                            </h6>
                            <ButtonGroup>
                                <Button color="primary" onClick={() => chimSetSelected(1)} active={chimSelected === 1}>1</Button>
                                <Button color="primary" onClick={() => chimSetSelected(3)} active={chimSelected === 3}>3</Button>
                                <Button color="primary" onClick={() => chimSetSelected(5)} active={chimSelected === 5}>5</Button>
                            </ButtonGroup>
                            <br/>
                        </div> 

                        <div>
                            <br/>
                            <h6>
                                Doors
                            </h6>
                            <ButtonGroup>
                                <Button color="primary" onClick={() => doorSetSelected(1)} active={doorSelected === 1}>1</Button>
                                <Button color="primary" onClick={() => doorSetSelected(3)} active={doorSelected === 3}>3</Button>
                                <Button color="primary" onClick={() => doorSetSelected(5)} active={doorSelected === 5}>5</Button>
                            </ButtonGroup>
                            <br/>
                        </div> 

                        <div>
                            <br/>
                            <h6>
                                Windows
                            </h6>
                            <ButtonGroup>
                                <Button color="primary" onClick={() => windSetSelected(1)} active={windSelected === 1}>1</Button>
                                <Button color="primary" onClick={() => windSetSelected(3)} active={windSelected === 3}>3</Button>
                                <Button color="primary" onClick={() => windSetSelected(5)} active={windSelected === 5}>5</Button>
                            </ButtonGroup>
                            <br/>
                        </div> 

                        <div>
                            <br/>
                            <h6>
                                Shutters
                            </h6>
                            <ButtonGroup>
                                <Button color="primary" onClick={() => shutSetSelected(1)} active={shutSelected === 1}>1</Button>
                                <Button color="primary" onClick={() => shutSetSelected(3)} active={shutSelected === 3}>3</Button>
                                <Button color="primary" onClick={() => shutSetSelected(5)} active={shutSelected === 5}>5</Button>
                            </ButtonGroup>
                            <br/>
                        </div> 

                        <div>
                            <br/>
                            <h6>
                                Flooring
                            </h6>
                            <ButtonGroup>
                                <Button color="primary" onClick={() => floorSetSelected(1)} active={floorSelected === 1}>1</Button>
                                <Button color="primary" onClick={() => floorSetSelected(3)} active={floorSelected === 3}>3</Button>
                                <Button color="primary" onClick={() => floorSetSelected(5)} active={floorSelected === 5}>5</Button>
                            </ButtonGroup>
                            <br/>
                        </div>
                    </FormGroup>

                    <Button color="primary" onClick={toggle} style={{ marginBottom: '2em' },{marginTop: '2em'}}>Utility Only</Button>

                    <Collapse isOpen={isOpen}>
                        <Form>
                            <FormGroup>
                                <div>
                                    <br/>
                                    <h6>
                                        Electrical
                                    </h6>
                                    <ButtonGroup>
                                        <Button color="primary" onClick={() => elecSetSelected(1)} active={elecSelected === 1}>1</Button>
                                        <Button color="primary" onClick={() => elecSetSelected(3)} active={elecSelected === 3}>3</Button>
                                        <Button color="primary" onClick={() => elecSetSelected(5)} active={elecSelected === 5}>5</Button>
                                    </ButtonGroup>
                                    <br/>
                                </div>

                                <div>
                                    <br/>
                                    <h6>
                                        Plumbing
                                    </h6>
                                    <ButtonGroup>
                                        <Button color="primary" onClick={() => plumbSetSelected(1)} active={plumbSelected === 1}>1</Button>
                                        <Button color="primary" onClick={() => plumbSetSelected(3)} active={plumbSelected === 3}>3</Button>
                                        <Button color="primary" onClick={() => plumbSetSelected(5)} active={plumbSelected === 5}>5</Button>
                                    </ButtonGroup>
                                    <br/>
                                </div>

                                <div>
                                    <br/>
                                    <h6>
                                        Sewage
                                    </h6>
                                    <ButtonGroup>
                                        <Button color="primary" onClick={() => sewSetSelected(1)} active={sewSelected === 1}>1</Button>
                                        <Button color="primary" onClick={() => sewSetSelected(3)} active={sewSelected === 3}>3</Button>
                                        <Button color="primary" onClick={() => sewSetSelected(5)} active={sewSelected === 5}>5</Button>
                                    </ButtonGroup>
                                    <br/>
                                </div>

                                <div>
                                    <br/>
                                    <h6>
                                        HVAC
                                    </h6>
                                    <ButtonGroup>
                                        <Button color="primary" onClick={() => hvacSetSelected(1)} active={hvacSelected === 1}>1</Button>
                                        <Button color="primary" onClick={() => hvacSetSelected(3)} active={hvacSelected === 3}>3</Button>
                                        <Button color="primary" onClick={() => hvacSetSelected(5)} active={hvacSelected === 5}>5</Button>
                                    </ButtonGroup>
                                    <br/>
                                </div>
                            </FormGroup>
                        </Form>
                    </Collapse>
                    <br/>
  
                    <Button style={{ marginBottom: '2em' },{marginTop: '2em'}}>Submit</Button>

                </Form>
            </div>
        );
    }
