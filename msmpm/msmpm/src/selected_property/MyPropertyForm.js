import React, {
    useState 
} from 'react';
import axios from 'axios';
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
    const [utlState, setUtilState] = useState('No Utilities');
    const toggle = () => {
        setIsOpen(!isOpen);
        setUtilState(isOpen ? 'No Utilities' : 'Has Utilities');
    }

    //All
    const [roofSelected, roofSetSelected] = useState(null);
    const [extSelected, extSetSelected] = useState(null);
    const [opnsSelected, opnsSetSelected] = useState(null);
    const [fwSelected, fwSetSelected] = useState(null);
    const [paintSelected, paintSetSelected] = useState(null);
    const [pfSelected, pfSetSelected] = useState(null);
    const [chimSelected, chimSetSelected] = useState(null);
    const [doorSelected, doorSetSelected] = useState(null);
    const [windSelected, windSetSelected] = useState(null);
    const [shutSelected, shutSetSelected] = useState(null);
    const [floorSelected, floorSetSelected] = useState(null);
    //Utility Only
    const [elecSelected, elecSetSelected] = useState(null);
    const [plumbSelected, plumbSetSelected] = useState(null);
    const [sewSelected, sewSetSelected] = useState(null);
    const [hvacSelected, hvacSetSelected] = useState(null);

    return (

            <Form>
                <FormGroup>
                    <div className = 'propertyform_one'>
                        <div>
                            <h6>
                                Roof
                            </h6>
                            <ButtonGroup>
                                <Button color="secondary" onClick={() => roofSetSelected(1)} active={roofSelected === 1}>1</Button>
                                <Button color="secondary" onClick={() => roofSetSelected(3)} active={roofSelected === 3}>3</Button>
                                <Button color="secondary" onClick={() => roofSetSelected(5)} active={roofSelected === 5}>5</Button>
                                <Button color="secondary" onClick={() => roofSetSelected(7)} active={roofSelected === 7}>7</Button>
                            </ButtonGroup>
                            <br/>
                        </div>

                        <div>
                            <br/>
                            <h6>
                                Exterior Walls
                            </h6>
                            <ButtonGroup>
                                <Button color="secondary" onClick={() => extSetSelected(0)} active={extSelected === 0}>∅</Button>
                                <Button color="secondary" onClick={() => extSetSelected(1)} active={extSelected === 1}>1</Button>
                                <Button color="secondary" onClick={() => extSetSelected(3)} active={extSelected === 3}>3</Button>
                                <Button color="secondary" onClick={() => extSetSelected(5)} active={extSelected === 5}>5</Button>
                            </ButtonGroup>
                            <br/>
                        </div>


                        <div>
                            <br/>
                            <h6>
                                Openings
                            </h6>
                            <ButtonGroup>
                                <Button color="secondary" onClick={() => opnsSetSelected(0)} active={opnsSelected === 0}>∅</Button>
                                <Button color="secondary" onClick={() => opnsSetSelected(1)} active={opnsSelected === 1}>1</Button>
                                <Button color="secondary" onClick={() => opnsSetSelected(3)} active={opnsSelected === 3}>3</Button>
                                <Button color="secondary" onClick={() => opnsSetSelected(5)} active={opnsSelected === 5}>5</Button>
                            </ButtonGroup>
                            <br/>
                        </div>

                        <div>
                            <br/>
                            <h6>
                                Framework
                            </h6>
                            <ButtonGroup>
                                <Button color="secondary" onClick={() => fwSetSelected(0)} active={fwSelected === 0}>∅</Button>
                                <Button color="secondary" onClick={() => fwSetSelected(1)} active={fwSelected === 1}>1</Button>
                                <Button color="secondary" onClick={() => fwSetSelected(3)} active={fwSelected === 3}>3</Button>
                                <Button color="secondary" onClick={() => fwSetSelected(5)} active={fwSelected === 5}>5</Button>
                            </ButtonGroup>
                        </div>

                    </div>
                    <div className = 'propertyform_two'>

                        <div>
                            <h6>
                                Paint
                            </h6>
                            <ButtonGroup>
                                <Button color="secondary" onClick={() => paintSetSelected(0)} active={paintSelected === 0}>∅</Button>
                                <Button color="secondary" onClick={() => paintSetSelected(1)} active={paintSelected === 1}>1</Button>
                                <Button color="secondary" onClick={() => paintSetSelected(3)} active={paintSelected === 3}>3</Button>
                                <Button color="secondary" onClick={() => paintSetSelected(5)} active={paintSelected === 5}>5</Button>
                            </ButtonGroup>
                            <br/>
                        </div>

                        <div>
                            <br/>
                            <h6>
                                Piers & Footlings
                            </h6>
                            <ButtonGroup>
                                <Button color="secondary" onClick={() => paintSelected(0)} active={pfSelected === 0}>∅</Button>
                                <Button color="secondary" onClick={() => pfSetSelected(1)} active={pfSelected === 1}>1</Button>
                                <Button color="secondary" onClick={() => pfSetSelected(3)} active={pfSelected === 3}>3</Button>
                                <Button color="secondary" onClick={() => pfSetSelected(5)} active={pfSelected === 5}>5</Button>
                            </ButtonGroup>
                            <br/>
                        </div> 

                        <div>
                            <br/>
                            <h6>
                                Chimneys
                            </h6>
                            <ButtonGroup>
                                <Button color="secondary" onClick={() => chimSetSelected(0)} active={chimSelected === 0}>∅</Button>
                                <Button color="secondary" onClick={() => chimSetSelected(1)} active={chimSelected === 1}>1</Button>
                                <Button color="secondary" onClick={() => chimSetSelected(3)} active={chimSelected === 3}>3</Button>
                                <Button color="secondary" onClick={() => chimSetSelected(5)} active={chimSelected === 5}>5</Button>
                            </ButtonGroup>
                            <br/>
                        </div> 

                        <div>
                            <br/>
                            <h6>
                                Doors
                            </h6>
                            <ButtonGroup>
                                <Button color="secondary" onClick={() => doorSetSelected(0)} active={doorSelected === 0}>∅</Button>
                                <Button color="secondary" onClick={() => doorSetSelected(1)} active={doorSelected === 1}>1</Button>
                                <Button color="secondary" onClick={() => doorSetSelected(3)} active={doorSelected === 3}>3</Button>
                                <Button color="secondary" onClick={() => doorSetSelected(5)} active={doorSelected === 5}>5</Button>
                            </ButtonGroup>
                        </div> 

                    </div>
                    <div className = 'propertyform_three'>

                        <div>
                            <h6>
                                Windows
                            </h6>
                            <ButtonGroup>
                                <Button color="secondary" onClick={() => windSetSelected(0)} active={windSelected === 0}>∅</Button>
                                <Button color="secondary" onClick={() => windSetSelected(1)} active={windSelected === 1}>1</Button>
                                <Button color="secondary" onClick={() => windSetSelected(3)} active={windSelected === 3}>3</Button>
                                <Button color="secondary" onClick={() => windSetSelected(5)} active={windSelected === 5}>5</Button>
                            </ButtonGroup>
                            <br/>
                        </div> 

                        <div>
                            <br/>
                            <h6>
                                Shutters
                            </h6>
                            <ButtonGroup>
                                <Button color="secondary" onClick={() => shutSetSelected(0)} active={shutSelected === 0}>∅</Button>
                                <Button color="secondary" onClick={() => shutSetSelected(1)} active={shutSelected === 1}>1</Button>
                                <Button color="secondary" onClick={() => shutSetSelected(3)} active={shutSelected === 3}>3</Button>
                                <Button color="secondary" onClick={() => shutSetSelected(5)} active={shutSelected === 5}>5</Button>
                            </ButtonGroup>
                            <br/>
                        </div> 

                        <div>
                            <br/>
                            <h6>
                                Flooring
                            </h6>
                            <ButtonGroup>
                                <Button color="secondary" onClick={() => floorSetSelected(0)} active={floorSelected === 0}>∅</Button>
                                <Button color="secondary" onClick={() => floorSetSelected(1)} active={floorSelected === 1}>1</Button>
                                <Button color="secondary" onClick={() => floorSetSelected(3)} active={floorSelected === 3}>3</Button>
                                <Button color="secondary" onClick={() => floorSetSelected(5)} active={floorSelected === 5}>5</Button>
                            </ButtonGroup>
                        </div>
                    </div>
                </FormGroup>

            <div className = 'propertyform_util'>
                <Button color="secondary" onClick={toggle} block>{utlState}</Button>

                <Collapse isOpen={isOpen}>
                    <Form>
                        <FormGroup>
                            <div>
                                <br/>
                                <h6>
                                    Electrical
                                </h6>
                                <ButtonGroup>
                                    <Button color="secondary" onClick={() => elecSetSelected(0)} active={elecSelected === 0}>∅</Button>
                                    <Button color="secondary" onClick={() => elecSetSelected(1)} active={elecSelected === 1}>1</Button>
                                    <Button color="secondary" onClick={() => elecSetSelected(3)} active={elecSelected === 3}>3</Button>
                                    <Button color="secondary" onClick={() => elecSetSelected(5)} active={elecSelected === 5}>5</Button>
                                </ButtonGroup>
                                <br/>
                            </div>

                            <div>
                                <br/>
                                <h6>
                                    Plumbing
                                </h6>
                                <ButtonGroup>
                                    <Button color="secondary" onClick={() => plumbSetSelected(0)} active={plumbSelected === 0}>∅</Button>
                                    <Button color="secondary" onClick={() => plumbSetSelected(1)} active={plumbSelected === 1}>1</Button>
                                    <Button color="secondary" onClick={() => plumbSetSelected(3)} active={plumbSelected === 3}>3</Button>
                                    <Button color="secondary" onClick={() => plumbSetSelected(5)} active={plumbSelected === 5}>5</Button>
                                </ButtonGroup>
                                <br/>
                            </div>

                            <div>
                                <br/>
                                <h6>
                                    Sewage
                                </h6>
                                <ButtonGroup>
                                    <Button color="secondary" onClick={() => sewSetSelected(0)} active={sewSelected === 0}>∅</Button>
                                    <Button color="secondary" onClick={() => sewSetSelected(1)} active={sewSelected === 1}>1</Button>
                                    <Button color="secondary" onClick={() => sewSetSelected(3)} active={sewSelected === 3}>3</Button>
                                    <Button color="secondary" onClick={() => sewSetSelected(5)} active={sewSelected === 5}>5</Button>
                                </ButtonGroup>
                                <br/>
                            </div>

                            <div>
                                <br/>
                                <h6>
                                    HVAC
                                </h6>
                                <ButtonGroup>
                                    <Button color="secondary" onClick={() => hvacSetSelected(0)} active={hvacSelected === 0}>∅</Button>
                                    <Button color="secondary" onClick={() => hvacSetSelected(1)} active={hvacSelected === 1}>1</Button>
                                    <Button color="secondary" onClick={() => hvacSetSelected(3)} active={hvacSelected === 3}>3</Button>
                                    <Button color="secondary" onClick={() => hvacSetSelected(5)} active={hvacSelected === 5}>5</Button>
                                </ButtonGroup>
                            </div>
                        </FormGroup>
                    </Form>
                </Collapse>
            </div>

            <div className = 'submitbutton'>
                <Button block>Submit</Button>
            </div>
        </Form>
    );
}

//Note to Self:
// {
//     state === 'new' ? 
//     (
//     <h1> New Button Saying </h1>
//     ) : (
//     <h1> Old Button Saying </h1>
//     )
// };