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
import { Redirect } from 'react-router-dom';


//TODO
//MAKE A TRY CATCH FOR A TOAST ON SUBMIT

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
    const toggleSubmitModal = () => {
        setSubmitted(true);
    }

    // TODO:
    //WHENEVER U HIT SUBMIT DO A TOAST
    //ALSO CLOSE MODAL

    const submitForm = async () => {
        let dataBody = {
            Roof: roofSelected,
            ExtWalls: extSelected,
            ExtOpenings: opnsSelected,
            Framework: fwSelected,
            Piers: pfSelected,
            Chimney: chimSelected,
            Door: doorSelected,
            Windows: windSelected,
            Shutters: shutSelected,
            Flooring: floorSelected,
            Electrical: elecSelected,
            Plumbing: plumbSelected,
            Sewer: sewSelected,
            HVAC: hvacSelected,
            Location: propertyLocation,
            Name: propertyName,
            ImageURL
        }; //Left is side on server and right is state sending it
        let res = await axios.post("https://localhost:44378/api/Properties", dataBody);
        console.log(res);
        toggleSubmitModal();

    }
    


    // MAKE ANOTHER GET REQUEST TO CONTROLLER FOR 

    //Make

    //Saving the state of the values on the buttons
    const [unsavedChanges, setChanges] = useState();
    


    // Things to try to save button values to session storage
    // On componenet unmount grab all values and save to storage
    // Anytime value is changed pass a callback function

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
    const [propertyLocation, setLocation] = useState(null);
    const [propertyName, setName] = useState(null);
    const [ImageURL, setImageURL] = useState(null);


    const [FLAGBAG, setFLAGBAG] = useState(false);

    useEffect(() => {
        if(FLAGBAG === false){
            setFLAGBAG(true);
        }
        else{
            var changes = { //var grabbing all of the values of current state
                            // making an object of state to store in session
                roofSelected,
                extSelected,
                opnsSelected,
                fwSelected,
                paintSelected,
                pfSelected,
                chimSelected,
                doorSelected,
                windSelected,
                shutSelected,
                floorSelected,
                elecSelected,
                plumbSelected,
                sewSelected,
                hvacSelected
            };

            console.log(changes);
            
            sessionStorage.changes = JSON.stringify(changes);

            console.log(sessionStorage);
        }
    }, [
        roofSelected,
        extSelected,
        opnsSelected,
        fwSelected,
        paintSelected,
        pfSelected,
        chimSelected,
        doorSelected,
        windSelected,
        shutSelected,
        floorSelected,
        elecSelected,
        plumbSelected,
        sewSelected,
        hvacSelected]);

    useEffect(() => {
        //Grabbing value and setting state
        var changes = JSON.parse(sessionStorage.getItem("changes"));
        //This one is calling ternary inside roof selected setting the state no matter what 
        //but we dont wanna set state no matter what cuz thats big dum 
        // if(changes != null){    // ?. means dont throw if it is null
        //     roofSetSelected(changes?.roofSelected != null ? changes.roofSelected : roofSelected)
        // }

        if(changes != null){
          if(changes.roofSelected != null){
                roofSetSelected(changes.roofSelected);
            }
          if(changes.extSelected != null){
                extSetSelected(changes.extSelected);
            }
          if(changes.opnsSelected != null){
            fwSetSelected(changes.opnsSelected);
            }
          if(changes.fwSelected != null){
            paintSetSelected(changes.fwSelected);
            }
          if(changes.paintSelected != null){
            pfSetSelected(changes.paintSelected);
            }
          if(changes.pfSelected != null){
            chimSetSelected(changes.pfSelected);
            }
          if(changes.chimSelected != null){
            doorSetSelected(changes.chimSelected);
            }
          if(changes.doorSelected != null){
            windSetSelected(changes.doorSelected);
            }
          if(changes.windSelected != null){
            shutSetSelected(changes.windSelected);
            }
          if(changes.shutSelected != null){
            shutSetSelected(changes.shutSelected);
            }
          if(changes.floorSelected != null){
            floorSetSelected(changes.floorSelected);
            }
          if(changes.elecSelected != null){
                roofSetSelected(changes.elecSelected);
            }
          if(changes.plumbSelected != null){
                roofSetSelected(changes.plumbSelected);
            }
          if(changes.sewSelected != null){
                roofSetSelected(changes.sewSelected);
            }
          if(changes.hvacSelected != null){
                roofSetSelected(changes.hvacSelected);
            }
        }
    }, //Eeverytime the dependency gets updated this UseEffect gets called!!!
        // So this makes useffect essentially a component did mount 
    []);


    // SET LABELS ON INPUTS
    return (
            <Form>
                {
                //submitted && sessionStorage.getItem("isLoggedIn") == "true" ? <Redirect to = "/properties/"/> : null
                }
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
                                {// A callback function is a parameter that you pass to a function and then that function calls it after you finish whatever ur doing
                                // 
                                // In JS you can passs function as parameters (CallBack functions)
                                }
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

            <FormGroup className = 'propertyform_texts'>
                <h6> Change Name / Location </h6>
                <Input type="text" value={propertyName} onChange={(e) => setName(e.target.value)} placeholder = "property name"/>
                <Input type="text" value={propertyLocation} onChange={(e) => setLocation(e.target.value)} placeholder = "location"/>
                <Input type="text" value={ImageURL} onChange={(e) => setImageURL(e.target.value)} placeholder = "image URL"/>
            </FormGroup>
        </Form>
    );
}

