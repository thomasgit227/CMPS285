import React, {
    useState,
    useEffect 
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
    ModalFooter,
    Input 
} from 'reactstrap';
import { Redirect, useParams, useHistory } from 'react-router-dom';


//TODO
//MAKE A TRY CATCH FOR A TOAST ON SUBMIT

//How to conditionally render based off Prop type? props.type decides what we render

export default function MyPropertyForm(props) {

    const { id } = useParams();
    const history = useHistory();
    const [redirect, setRedirect] = useState(false);
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
    const toggleSubmitModal = () => {
        setSubmitted(true);
    }


    const setPropertyValues = (values) => {
        if(values == null) {
            return;
        }
        if (values.roof != null) {
            roofSet(values.roof);
        }
        if (values.extWalls != null) {
            setExtWalls(values.extWalls);
        }
        if (values.extOpenings != null) {
            setExtOpenings(values.extOpenings);
        }
        if (values.framework != null) {
            setFramework(values.framework);
        }
        if (values.paint != null) {
            setPaint(values.paint);
        }
        if (values.piers != null) {
            setPiers(values.piers);
        }
        if (values.chimney != null) {
            setChimney(values.chimney);
        }
        if (values.door != null) {
            setDoor(values.door);
        }
        if (values.windows != null) {
            setWindows(values.windows);
        }
        if (values.shutters != null) {
            setShutters(values.shutters);
        }
        if (values.flooring != null) {
            setFlooring(values.flooring);
        }
        if (values.electrical != null) {
            setElectrical(values.electrical);
        }
        if (values.plumbing != null) {
            setPlumbing(values.plumbing);
        }
        if (values.sewer != null) {
            setSewer(values.sewer);
        }
        if (values.hvac != null) {
            setHvac(values.hvac);
        }
    }

    // TODO:
    //WHENEVER U HIT SUBMIT DO A TOAST
    //ALSO CLOSE MODAL
    //Also clear the cookie

    const submitForm = async () => {
        setRedirect(true);
        let dataBody = {
            Roof: roof,
            ExtWalls: extWalls,
            ExtOpenings: extOpenings,
            Framework: framework,
            Piers: piers,
            Chimney: chimney,
            Door: door,
            Windows: windows,
            Shutters: shutters,
            Flooring: flooring,
            Electrical: electrical,
            Plumbing: plumbing,
            Sewer: sewer,
            HVAC: hvac,
            Location: propertyLocation,
            Name: propertyName,
            ImageURL
        }; //Left is side on server and right is state sending it
        if(props.formType === "CreateForm"){
            let res = await axios.post("https://localhost:44378/api/Properties", dataBody);
            console.log(res);
            if(res.data.id !== null) {
                history.push(`properties/myproperty/${res.data.id}`);
            }
        }
        if(props.formType === "EditForm"){ 
            let res = await axios.put(`https://localhost:44378/api/Properties/${id}`, dataBody);
            console.log(res);
        }
        toggleSubmitModal();
    }

    const getMyPropertyFormValues = async () => {
        //we want to get the values from the 
        //Get property by ID
        //Get property ID's values and put it into our state
        let res = await axios.get(`https://localhost:44378/api/Properties/${id}`);
        if (res.data != null) {
            setPropertyValues(res.data);
        }


        console.log(id);
    }

    const loadCookie = () => {
        var changes = JSON.parse(sessionStorage.getItem("changes"));
        //This one is calling ternary inside roof selected setting the state no matter what
        //but we dont wanna set state no matter what cuz thats big dum
        // if(changes != null){    // ?. means dont throw if it is null
        //     roofSetSelected(changes?.roofSelected != null ? changes.roofSelected : roofSelected)
        // }

        if (changes != null) {
            setPropertyValues(changes);
        }
    }


    // MAKE ANOTHER GET REQUEST TO CONTROLLER FOR 

    //Make

    //Saving the state of the values on the buttons
    const [unsavedChanges, setChanges] = useState();
    


    // Things to try to save button values to session storage
    // On componenet unmount grab all values and save to storage
    // Anytime value is changed pass a callback function

    //All
    const [roof, roofSet] = useState(null);

    const [extWalls, setExtWalls] = useState(null);
    const [extOpenings, setExtOpenings] = useState(null);
    const [framework, setFramework] = useState(null);
    const [paint, setPaint] = useState(null);
    const [piers, setPiers] = useState(null);
    const [chimney, setChimney] = useState(null);
    const [door, setDoor] = useState(null);
    const [windows, setWindows] = useState(null);
    const [shutters, setShutters] = useState(null);
    const [flooring, setFlooring] = useState(null);
    //Utility Only
    const [electrical, setElectrical] = useState(null);
    const [plumbing, setPlumbing] = useState(null);
    const [sewer, setSewer] = useState(null);
    const [hvac, setHvac] = useState(null);
    const [propertyLocation, setPropertyLocation] = useState(null);
    const [propertyName, setPropertyName] = useState(null);
    const [ImageURL, setImageURL] = useState(null);


    const [FLAGBAG, setFLAGBAG] = useState(false);

    //This runs anytime anything () in the dependency array gets changes which then stores as a JSON object called changes in session Storage
    useEffect(() => {
        if(FLAGBAG === false){
            setFLAGBAG(true);
        }
        else{
            var changes = { //var grabbing all of the values of current state
                            // making an object of state to store in session
                roof,
                extWalls,
                extOpenings,
                framework,
                paint,
                piers,
                chimney,
                door,
                windows,
                shutters,
                flooring,
                electrical,
                plumbing,
                sewer,
                hvac
            };

            console.log(changes);
            
            sessionStorage.changes = JSON.stringify(changes);

            console.log(sessionStorage);
        }
    }, [
        roof,
        extWalls,
        extOpenings,
        framework,
        paint,
        piers,
        chimney,
        door,
        windows,
        shutters,
        flooring,
        electrical,
        plumbing,
        sewer,
        hvac]);

    useEffect(() => {
        //Grabbing value and setting state

        //If we are visiting the edit page this useEffect doesn't get called
        if (props.formType === "EditForm") {
            getMyPropertyFormValues();
        }

        if (props.formType === "CreateForm") {
            loadCookie();
        }
        
    }, //Eeverytime the dependency gets updated this UseEffect gets called!!!
        // So this makes useffect essentially a component did mount 
    []);


    // SET LABELS ON INPUTS
    //TODO: MAKE THE INPUT LABELS NOT UGLY
    
    return (
            <Form>
                {
                redirect ? <Redirect to = "/properties/"/> : null
                }
                <FormGroup>
                    <div className = 'propertyform_one'>
                        <div>
                            <h6>
                                Roof
                            </h6>
                            <ButtonGroup>
                                <Button color="secondary" onClick={() => roofSet(1)} active={roof === 1}>1</Button>
                                <Button color="secondary" onClick={() => roofSet(3)} active={roof === 3}>3</Button>
                                <Button color="secondary" onClick={() => roofSet(5)} active={roof === 5}>5</Button>
                                <Button color="secondary" onClick={() => roofSet(7)} active={roof === 7}>7</Button>
                            </ButtonGroup>
                            <br/>
                        </div>

                        <div>
                            <br/>
                            <h6>
                                Exterior Walls
                            </h6> 
                            <ButtonGroup>
                                <Button color="secondary" onClick={() => setExtWalls(0)} active={extWalls === 0}>∅</Button>  
                                {// A callback function is a parameter that you pass to a function and then that function calls it after you finish whatever ur doing
                                // 
                                // In JS you can passs function as parameters (CallBack functions)
                                }
                                <Button color="secondary" onClick={() => setExtWalls(1)} active={extWalls === 1}>1</Button>
                                <Button color="secondary" onClick={() => setExtWalls(3)} active={extWalls === 3}>3</Button>
                                <Button color="secondary" onClick={() => setExtWalls(5)} active={extWalls === 5}>5</Button>
                            </ButtonGroup>
                            <br/>
                        </div>

                        <div>
                            <br/>
                            <h6>
                                Openings
                            </h6>
                            <ButtonGroup>
                                <Button color="secondary" onClick={() => setExtOpenings(0)} active={extOpenings === 0}>∅</Button>
                                <Button color="secondary" onClick={() => setExtOpenings(1)} active={extOpenings === 1}>1</Button>
                                <Button color="secondary" onClick={() => setExtOpenings(3)} active={extOpenings === 3}>3</Button>
                                <Button color="secondary" onClick={() => setExtOpenings(5)} active={extOpenings === 5}>5</Button>
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
                                <Button color="secondary" onClick={() => paint(0)} active={piers === 0}>∅</Button>
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
                                <Button color="secondary" onClick={() => setChimney(0)} active={chimney === 0}>∅</Button>
                                <Button color="secondary" onClick={() => setChimney(1)} active={chimney === 1}>1</Button>
                                <Button color="secondary" onClick={() => setChimney(3)} active={chimney === 3}>3</Button>
                                <Button color="secondary" onClick={() => setChimney(5)} active={chimney === 5}>5</Button>
                            </ButtonGroup>
                            <br/>
                        </div> 

                        <div>
                            <br/>
                            <h6>
                                Doors
                            </h6>
                            <ButtonGroup>
                                <Button color="secondary" onClick={() => setDoor(0)} active={door === 0}>∅</Button>
                                <Button color="secondary" onClick={() => setDoor(1)} active={door === 1}>1</Button>
                                <Button color="secondary" onClick={() => setDoor(3)} active={door === 3}>3</Button>
                                <Button color="secondary" onClick={() => setDoor(5)} active={door === 5}>5</Button>
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
                                <Button color="secondary" onClick={() => setFlooring(0)} active={flooring === 0}>∅</Button>
                                <Button color="secondary" onClick={() => setFlooring(1)} active={flooring === 1}>1</Button>
                                <Button color="secondary" onClick={() => setFlooring(3)} active={flooring === 3}>3</Button>
                                <Button color="secondary" onClick={() => setFlooring(5)} active={flooring === 5}>5</Button>
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
                                    <Button color="secondary" onClick={() => setSewer(0)} active={sewer === 0}>∅</Button>
                                    <Button color="secondary" onClick={() => setSewer(1)} active={sewer === 1}>1</Button>
                                    <Button color="secondary" onClick={() => setSewer(3)} active={sewer === 3}>3</Button>
                                    <Button color="secondary" onClick={() => setSewer(5)} active={sewer === 5}>5</Button>
                                </ButtonGroup>
                                <br/>
                            </div>

                            <div>
                                <br/>
                                <h6>
                                    HVAC
                                </h6>
                                <ButtonGroup>
                                    <Button color="secondary" onClick={() => setHvac(0)} active={hvac === 0}>∅</Button>
                                    <Button color="secondary" onClick={() => setHvac(1)} active={hvac === 1}>1</Button>
                                    <Button color="secondary" onClick={() => setHvac(3)} active={hvac === 3}>3</Button>
                                    <Button color="secondary" onClick={() => setHvac(5)} active={hvac === 5}>5</Button>
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
                {/* {sessionStorage.getItem("isLoggedIn") == "true" ? //TODO check AuthO */}
                    <Button block color="success" onClick={submitForm}>Submit</Button>
                     {/* : null} */}
                    <Button block color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
            </div>

            {props.formType === "CreateForm" &&
                <FormGroup className = 'propertyform_texts'>
                    <h6> Change Name / Location </h6>
                    <Input type="text" value={propertyName} onChange={(e) => setPropertyName(e.target.value)} placeholder = "property name"/>
                    <Input type="text" value={propertyLocation} onChange={(e) => setPropertyLocation(e.target.value)} placeholder = "location"/>
                    <Input type="text" value={ImageURL} onChange={(e) => setImageURL(e.target.value)} placeholder = "image URL"/>
                </FormGroup>
            }
        </Form>
    );
}

