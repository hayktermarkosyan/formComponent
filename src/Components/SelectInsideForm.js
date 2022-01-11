import { useState, useRef, useEffect } from "react";
import './SelectInsideForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button, Dropdown } from 'react-bootstrap';
import profileLogo from './profile.png';

const first_INPUT_options = ["Brandon Waelchi", "Rosina Ernser", "Jaunita Champlin", "Jaycee Renner", "Lucius Conn"];

function SelectInsideForm () {

    const [is_FIRST_Open, setIs_FIRST_Open] = useState(false);
    const [selected_FIRST_Option, setSelected_FIRST_Option] = useState(null);
    const ref_FIRST = useRef();

    useEffect(() => {
        const checkIfClickedOutside = (e) => {
            if (is_FIRST_Open && ref_FIRST.current && !ref_FIRST.current.contains(e.target)) {
                setIs_FIRST_Open(false);
            }
        };
        document.addEventListener('click', checkIfClickedOutside)
        return () => {
            document.removeEventListener('click', checkIfClickedOutside)
        };
    }, [is_FIRST_Open]);

    const [is_SECOND_Open, setIs_SECOND_Open] = useState(false);
    const [SECOND_Option, setSECOND_Option] = useState([
        {
            name: "Global",
            icon: (<img src={profileLogo} alt="profileLogo" className="profileLogo" />),
            isSelected: false
        },
        {
            name: "Dynamic Factors Orchestrator",
            icon: (<img src={profileLogo} alt="profileLogo" className="profileLogo" />),
            isSelected: false
        }, 
        {
            name: "Human Communications Administrator",
            icon: (<img src={profileLogo} alt="profileLogo" className="profileLogo" />),
            isSelected: false
        }, 
        {
            name: "Principal Functionality Producer",
            icon: (<img src={profileLogo} alt="profileLogo" className="profileLogo" />),
            isSelected: false
        }
    ]);
    const ref_SECOND = useRef();

    useEffect(() => {
        const checkIfClickedOutside = (e) => {
            if (is_SECOND_Open && ref_SECOND.current && !ref_SECOND.current.contains(e.target)) {
                setIs_SECOND_Open(false);
            }
        };
        document.addEventListener('click', checkIfClickedOutside)
        return () => {
            document.removeEventListener('click', checkIfClickedOutside)
        };
    }, [is_SECOND_Open]);

    const toggling_FIRSTinput = () => setIs_FIRST_Open(!is_FIRST_Open);
    const toggling_SECONDinput = () => setIs_SECOND_Open(!is_SECOND_Open);

    const on_FIRSTinput_OptionClicked = value => () => {
        setSelected_FIRST_Option(value);
        setIs_FIRST_Open(false);
    };

    const on_SECONDinput_OptionClicked = value => () => {
        setSECOND_Option(() => !value.isSelected)
        setIs_SECOND_Open(false);

        console.log(value.isSelected)
    };

    return (
        <Container>
            <Col md={{ span: 6, offset: 3 }} className="outsideBorder">
                <Form className="formBorder">
                    <Row className="rowStyle" style={{backgroundColor: '#F5FCFC'}}>
                        <p className="rowParagraph"><b>SelectInsideForm</b></p>
                    </Row>

                    <hr className="HR" />

                    <Row className="rowStyle" onClick={toggling_FIRSTinput} ref={ref_FIRST}>
                        <Col md={{ span: 4 }} className="rowCol">
                            <p className="rowParagraph">PropertySelector</p>
                        </Col>

                        <Col md={{ span: 8 }} className="rowCol">
                            
                            <Button className="standBtn">
                                <img src={profileLogo} alt="profileLogo" className="profileLogo" />
                                {selected_FIRST_Option || "Lucius Conn"}
                            </Button>                   
                        </Col>

                        {is_FIRST_Open && (
                            <Dropdown className="DropDownContainer">
                                <p 
                                    className="rowParagraph"
                                    style={{color: 'gray'}}
                                >
                                    <b>Choose a Topic</b>
                                </p>
                                {first_INPUT_options.map(option => (
                                    <Col className="DropDownItemColumn" onClick={on_FIRSTinput_OptionClicked(option)} key={Math.random()}>
                                        <Dropdown.Item className="DropDownItem">
                                            <img src={profileLogo} alt="profileLogo" className="profileLogo" />
                                            {option}
                                        </Dropdown.Item>
                                    </Col>
                                ))}
                                <Button 
                                    className="btn-danger DropDownListBtn"
                                    style={{marginRight: '0.5rem'}}
                                >
                                    closeMenu
                                </Button>
                                <Button className="btn-danger DropDownListBtn">
                                    clearValue
                                </Button>
                            </Dropdown>
                        )}
                    </Row>

                    <hr className="HR" />

                    <Row className="rowStyle" onClick={toggling_SECONDinput} ref={ref_SECOND}>
                        <Col md={{ span: 4 }} className="rowCol">
                            <p className="rowParagraph">WithExtraOptions</p>
                        </Col>

                        <Col md={{ span: 8 }} className="rowCol">                            
                            <Button disabled className="standBtn">I am a Placeholder</Button>
                        </Col>

                        {is_SECOND_Open && (
                            <Dropdown className="DropDownContainer">
                                <p 
                                    className="rowParagraph"
                                    style={{color: 'gray'}}
                                >
                                    <b>Choose a Topic</b>
                                </p>

                                <p className="secondDropDownMenuParagraphs">
                                    <b>Extra Option 1</b>
                                </p>

                                <p className="secondDropDownMenuParagraphs">
                                    <b>Extra Option 2</b>
                                </p>

                                <Button 
                                    className="DropDownListBtn"
                                    style={{
                                        marginRight: '0.5rem',
                                        marginTop: '5px',
                                        backgroundColor: '#030257',
                                        width: '92%'
                                    }}
                                >
                                    Extra Option 3
                                </Button>

                                {SECOND_Option.map(option => (
                                    <Col className="DropDownItemColumn" onClick={on_SECONDinput_OptionClicked(option)} key={Math.random()}>
                                        <Dropdown.Item className="DropDownItem">
                                            {option.icon}
                                            {option.name}
                                        </Dropdown.Item>
                                    </Col>
                                ))}
                                <Button 
                                    className="btn-danger DropDownListBtn"
                                    style={{marginRight: '0.5rem'}}
                                >
                                    closeMenu
                                </Button>
                                <Button className="btn-danger DropDownListBtn">
                                    clearValue
                                </Button>
                            </Dropdown>
                        )}
                    </Row>

                    <hr className="HR" />

                    <Row className="rowStyle">
                        <Col md={{ span: 4 }} className="rowCol">
                            <p className="rowParagraph">SearchSearch</p>
                        </Col>
                        
                        <Col md={{ span: 8 }} className="rowCol">
                            <Button disabled className="standBtn">I am a Placeholder</Button>
                        </Col>
                    </Row>

                    <hr className="HR" />
                    
                    <Row className="rowStyle">
                        <Col md={{ span: 4 }} className="rowCol">
                            <p className="rowParagraph">MultiSearch</p>
                        </Col>
                        
                        <Col md={{ span: 8 }} className="rowCol">
                            <Button className="multiSearchBtn">Inbox Updates</Button>
                            <Button className="multiSearchBtn">Bug Triage</Button>
                            <Button className="plusBtn">+</Button>
                        </Col>
                    </Row>

                    <hr className="HR" />

                    <Row className="rowStyle">
                        <Col md={{ span: 4 }} className="rowCol">
                            <p className="rowParagraph">Choose a Theme</p>
                        </Col>
                        
                        <Col md={{ span: 6, offset: 2 }} className="rowCol">
                            <input disabled type="radio" className="radioBox" />
                            <button disabled className="chooseBtn">Placeholder text...</button>
                            <Button disabled className="chooseTriangle">&#9660;</Button>
                        </Col>
                    </Row>

                    <hr className="HR" />

                    <Row className="rowStyle">
                        <Col md={{ span: 4 }} className="rowCol">
                            <p className="rowParagraph">Status</p>
                        </Col>
                        
                        <Col md={{ span: 8 }} className="rowCol">
                            <Button disabled className="standBtn">Choose a Status</Button>
                        </Col>
                    </Row>

                    <hr className="HR" />
                    
                    <Row className="rowStyle">
                        <Col md={{ span: 4 }} className="rowCol">
                            <p className="rowParagraph">Type</p>
                        </Col>
                        
                        <Col md={{ span: 8 }} className="rowCol">
                            <Button disabled className="standBtn">Choose a Type</Button>
                        </Col>
                    </Row>

                    <hr className="HR" />

                    <Row className="rowStyle">
                        <Col md={{ span: 4 }} className="rowCol">
                            <p className="rowParagraph">Urgency</p>
                        </Col>

                        <Col md={{ span: 8 }} className="rowCol">
                            <Button disabled className="standBtn">Urgency</Button>
                        </Col>
                    </Row>

                    <hr className="HR" />

                </Form>

                <Button className="endBtn" style={{marginRight: '10px'}}>Submit</Button>

                <Button className="endBtn">Reset</Button>
            </Col>
        </Container>
    );
}

export default SelectInsideForm;