import React, {
    useEffect,
    useState 
} from 'react';
import axios from 'axios';
import './Selected_Property.css';
import { 
    Button, 
    Form, 
    FormGroup, 
    Collapse,
    ButtonGroup,
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter 
} from 'reactstrap';
import { Redirect, useParams, useHistory } from 'react-router-dom';


export default function MyPropertyForm() {

    const [isOpen, setIsOpen] = useState(false);
    const [utlState, setUtilState] = useState('No Utilities');
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={toggle}>&times;</button>;

    const toggleUtil = () => {
        setIsOpen(!isOpen);
        setUtilState(isOpen ? 'No Utilities' : 'Has Utilities');
    }

    const [submitted, setSubmitted] = useState(false);
    const submitForm = () => {
        axios.put('/api/Properties/' + sessionStorage.getItem("id"), {
            "name": name,
            "location": location,
            "imageURL": "string",
            "utilities": true,
            "roof": roof,
            "extWalls": exterior,
            "extOpenings": openings, //TODO add paint
            "framework": framework,
            "piers": piers,
            "chimney": chimneys,
            "door": doors,
            "windows": windows,
            "shutters": shutters,
            "flooring": floor,
            "electrical": electrical,
            "plumbing": plumbing,
            "sewer": sewage,
            "hvac": HVAC,
        })
        
        setSubmitted(true);
    }

    //All
    const[name, setName] = useState(null);
    const[location, setLocation] = useState(null);

    const [roof, setRoof] = useState(null);
    const [exterior, setExterior] = useState(null);
    const [openings, setOpenings] = useState(null);
    const [framework, setFramework] = useState(null);
    const [paint, setPaint] = useState(null);
    const [piers, setPiers] = useState(null);
    const [chimneys, setChimneys] = useState(null);
    const [doors, setDoors] = useState(null);
    const [windows, setWindows] = useState(null);
    const [shutters, setShutters] = useState(null);
    const [floor, setFloor] = useState(null);
    //Utility Only
    const [electrical, setElectrical] = useState(null);
    const [plumbing, setPlumbing] = useState(null);
    const [sewage, setSewage] = useState(null);
    const [HVAC, setHVAC] = useState(null);


    useEffect(()=>{
        axios.get('/api/Properties/' + sessionStorage.getItem("id"))
        .then((r) => {
            setName(r.data.name);
            setLocation(r.data.location);

            setRoof(r.data.roof);
            setExterior(r.data.extWalls);
            setOpenings(r.data.extOpenings);
            setFramework(r.data.framework);
            setPaint(r.data.paint);
            setPiers(r.data.piers);
            setChimneys(r.data.chimney);
            setDoors(r.data.door);
            setWindows(r.data.windows);
            setShutters(r.data.shutters);
            setFloor(r.data.flooring);
            setElectrical(r.data.electrical);
            setPlumbing(r.data.plumbing);
            setSewage(r.data.sewer);
            setHVAC(r.data.hvac);
        })
    }, [])
    
    return (
            <Form>
                {submitted && sessionStorage.getItem("isLoggedIn") == "true" ? <Redirect to = "/properties/"/> : null}
                <FormGroup>
                    <div className = 'propertyform_one'>
                        <div>
                            <h6>
                                Roof
                            </h6>
                            <ButtonGroup>
                                <Button color="secondary" onClick={() => setRoof(1)} active={roof === 1}>1</Button>
                                <Button color="secondary" onClick={() => setRoof(3)} active={roof === 3}>3</Button>
                                <Button color="secondary" onClick={() => setRoof(5)} active={roof === 5}>5</Button>
                                <Button color="secondary" onClick={() => setRoof(7)} active={roof === 7}>7</Button>
                            </ButtonGroup>
                            <br/>
                        </div>

                        <div>
                            <br/>
                            <h6>
                                Exterior Walls
                            </h6>
                            <ButtonGroup>
                                <Button color="secondary" onClick={() => setExterior(0)} active={exterior === 0}>∅</Button>
                                <Button color="secondary" onClick={() => setExterior(1)} active={exterior === 1}>1</Button>
                                <Button color="secondary" onClick={() => setExterior(3)} active={exterior === 3}>3</Button>
                                <Button color="secondary" onClick={() => setExterior(5)} active={exterior === 5}>5</Button>
                            </ButtonGroup>
                            <br/>
                        </div>

                        <div>
                            <br/>
                            <h6>
                                Openings
                            </h6>
                            <ButtonGroup>
                                <Button color="secondary" onClick={() => setOpenings(0)} active={openings === 0}>∅</Button>
                                <Button color="secondary" onClick={() => setOpenings(1)} active={openings === 1}>1</Button>
                                <Button color="secondary" onClick={() => setOpenings(3)} active={openings === 3}>3</Button>
                                <Button color="secondary" onClick={() => setOpenings(5)} active={openings === 5}>5</Button>
                            </ButtonGroup>
                            <br/>
                        </div>

                        <div>
                            <br/>
                            <h6>
                                Framework
                            </h6>
                            <ButtonGroup>
                                <Button color="secondary" onClick={() => setFramework(0)} active={framework === 0}>∅</Button>
                                <Button color="secondary" onClick={() => setFramework(1)} active={framework === 1}>1</Button>
                                <Button color="secondary" onClick={() => setFramework(3)} active={framework === 3}>3</Button>
                                <Button color="secondary" onClick={() => setFramework(5)} active={framework === 5}>5</Button>
                            </ButtonGroup>
                        </div>

                    </div>
                    <div className = 'propertyform_two'>

                        <div>
                            <h6>
                                Paint
                            </h6>
                            <ButtonGroup>
                                <Button color="secondary" onClick={() => setPaint(0)} active={paint === 0}>∅</Button>
                                <Button color="secondary" onClick={() => setPaint(1)} active={paint === 1}>1</Button>
                                <Button color="secondary" onClick={() => setPaint(3)} active={paint === 3}>3</Button>
                                <Button color="secondary" onClick={() => setPaint(5)} active={paint === 5}>5</Button>
                            </ButtonGroup>
                            <br/>
                        </div>

                        <div>
                            <br/>
                            <h6>
                                Piers & Footlings
                            </h6>
                            <ButtonGroup>
                                <Button color="secondary" onClick={() => setPiers(0)} active={piers === 0}>∅</Button>
                                <Button color="secondary" onClick={() => setPiers(1)} active={piers === 1}>1</Button>
                                <Button color="secondary" onClick={() => setPiers(3)} active={piers === 3}>3</Button>
                                <Button color="secondary" onClick={() => setPiers(5)} active={piers === 5}>5</Button>
                            </ButtonGroup>
                            <br/>
                        </div> 

                        <div>
                            <br/>
                            <h6>
                                Chimneys
                            </h6>
                            <ButtonGroup>
                                <Button color="secondary" onClick={() => setChimneys(0)} active={chimneys === 0}>∅</Button>
                                <Button color="secondary" onClick={() => setChimneys(1)} active={chimneys === 1}>1</Button>
                                <Button color="secondary" onClick={() => setChimneys(3)} active={chimneys === 3}>3</Button>
                                <Button color="secondary" onClick={() => setChimneys(5)} active={chimneys === 5}>5</Button>
                            </ButtonGroup>
                            <br/>
                        </div> 

                        <div>
                            <br/>
                            <h6>
                                Doors
                            </h6>
                            <ButtonGroup>
                                <Button color="secondary" onClick={() => setDoors(0)} active={doors === 0}>∅</Button>
                                <Button color="secondary" onClick={() => setDoors(1)} active={doors === 1}>1</Button>
                                <Button color="secondary" onClick={() => setDoors(3)} active={doors === 3}>3</Button>
                                <Button color="secondary" onClick={() => setDoors(5)} active={doors === 5}>5</Button>
                            </ButtonGroup>
                        </div> 

                    </div>
                    <div className = 'propertyform_three'>

                        <div>
                            <h6>
                                Windows
                            </h6>
                            <ButtonGroup>
                                <Button color="secondary" onClick={() => setWindows(0)} active={windows === 0}>∅</Button>
                                <Button color="secondary" onClick={() => setWindows(1)} active={windows === 1}>1</Button>
                                <Button color="secondary" onClick={() => setWindows(3)} active={windows === 3}>3</Button>
                                <Button color="secondary" onClick={() => setWindows(5)} active={windows === 5}>5</Button>
                            </ButtonGroup>
                            <br/>
                        </div> 

                        <div>
                            <br/>
                            <h6>
                                Shutters
                            </h6>
                            <ButtonGroup>
                                <Button color="secondary" onClick={() => setShutters(0)} active={shutters === 0}>∅</Button>
                                <Button color="secondary" onClick={() => setShutters(1)} active={shutters === 1}>1</Button>
                                <Button color="secondary" onClick={() => setShutters(3)} active={shutters === 3}>3</Button>
                                <Button color="secondary" onClick={() => setShutters(5)} active={shutters === 5}>5</Button>
                            </ButtonGroup>
                            <br/>
                        </div> 

                        <div>
                            <br/>
                            <h6>
                                Flooring
                            </h6>
                            <ButtonGroup>
                                <Button color="secondary" onClick={() => setFloor(0)} active={floor === 0}>∅</Button>
                                <Button color="secondary" onClick={() => setFloor(1)} active={floor === 1}>1</Button>
                                <Button color="secondary" onClick={() => setFloor(3)} active={floor === 3}>3</Button>
                                <Button color="secondary" onClick={() => setFloor(5)} active={floor === 5}>5</Button>
                            </ButtonGroup>
                        </div>
                    </div>
                </FormGroup>

            <div className = 'propertyform_util'>
                <Button color="secondary" onClick={toggleUtil} block>{utlState}</Button>

                <Collapse isOpen={isOpen}>
                    <Form>
                        <FormGroup>
                            <div>
                                <br/>
                                <h6>
                                    Electrical
                                </h6>
                                <ButtonGroup>
                                    <Button color="secondary" onClick={() => setElectrical(0)} active={electrical === 0}>∅</Button>
                                    <Button color="secondary" onClick={() => setElectrical(1)} active={electrical === 1}>1</Button>
                                    <Button color="secondary" onClick={() => setElectrical(3)} active={electrical === 3}>3</Button>
                                    <Button color="secondary" onClick={() => setElectrical(5)} active={electrical === 5}>5</Button>
                                </ButtonGroup>
                                <br/>
                            </div>

                            <div>
                                <br/>
                                <h6>
                                    Plumbing
                                </h6>
                                <ButtonGroup>
                                    <Button color="secondary" onClick={() => setPlumbing(0)} active={plumbing === 0}>∅</Button>
                                    <Button color="secondary" onClick={() => setPlumbing(1)} active={plumbing === 1}>1</Button>
                                    <Button color="secondary" onClick={() => setPlumbing(3)} active={plumbing === 3}>3</Button>
                                    <Button color="secondary" onClick={() => setPlumbing(5)} active={plumbing === 5}>5</Button>
                                </ButtonGroup>
                                <br/>
                            </div>

                            <div>
                                <br/>
                                <h6>
                                    Sewage
                                </h6>
                                <ButtonGroup>
                                    <Button color="secondary" onClick={() => setSewage(0)} active={sewage === 0}>∅</Button>
                                    <Button color="secondary" onClick={() => setSewage(1)} active={sewage === 1}>1</Button>
                                    <Button color="secondary" onClick={() => setSewage(3)} active={sewage === 3}>3</Button>
                                    <Button color="secondary" onClick={() => setSewage(5)} active={sewage === 5}>5</Button>
                                </ButtonGroup>
                                <br/>
                            </div>

                            <div>
                                <br/>
                                <h6>
                                    HVAC
                                </h6>
                                <ButtonGroup>
                                    <Button color="secondary" onClick={() => setHVAC(0)} active={HVAC === 0}>∅</Button>
                                    <Button color="secondary" onClick={() => setHVAC(1)} active={HVAC === 1}>1</Button>
                                    <Button color="secondary" onClick={() => setHVAC(3)} active={HVAC === 3}>3</Button>
                                    <Button color="secondary" onClick={() => setHVAC(5)} active={HVAC === 5}>5</Button>
                                </ButtonGroup>
                            </div>
                        </FormGroup>
                    </Form>
                </Collapse>
            </div>

            <div className = 'submitbutton'>
            <Button color="secondary" onClick={toggle} block>Submit</Button>
            <Modal isOpen={modal} toggle={toggle} className="confirmsubmission" external={externalCloseBtn}>
                <ModalHeader>Submit?</ModalHeader>
                <ModalBody>
                    {sessionStorage.getItem("isLoggedIn") == "true" ? 
                    "Are you sure you would like to submit? This cannot be undone."
                    :
                    "You are not Logged In"
                    }
                </ModalBody>
                <ModalFooter>
                {sessionStorage.getItem("isLoggedIn") == "true" ? //TODO check AuthO
                    <Button block color="success" onClick={submitForm}>Submit</Button> : null}
                    <Button block color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
            </div>
        </Form>
    );
}

