import { useState, useRef, useEffect } from "react";
import { Row, Col, Button, Dropdown } from 'react-bootstrap';
import briefcaseLogo from '../icons/briefcase.png';
import './styles/WithExtraOptions.css';

function WithExtraOptions({isReset, withExtraOptionsDone}) {
    const [isOpen, setIsOpen] = useState(false);
    const [options, setOptions] = useState([
        {
            id: Math.random(),
            name: "Global",
            icon: (<img src={briefcaseLogo} alt="briefcaseLogo" className="briefcaseLogo" />),
            isSelected: false
        },
        {
            id: Math.random(),
            name: "Dynamic Factors Orchestrator",
            icon: (<img src={briefcaseLogo} alt="briefcaseLogo" className="briefcaseLogo" />),
            isSelected: false
        }, 
        {
            id: Math.random(),
            name: "Human Communications Administrator",
            icon: (<img src={briefcaseLogo} alt="briefcaseLogo" className="briefcaseLogo" />),
            isSelected: false
        }, 
        {
            id: Math.random(),
            name: "Principal Functionality Producer",
            icon: (<img src={briefcaseLogo} alt="briefcaseLogo" className="briefcaseLogo" />),
            isSelected: false
        }
    ]);
    
    const ref = useRef();

    useEffect(() => {
        const checkIfClickedOutside = e => {
            if (isOpen && ref.current && !ref.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('click', checkIfClickedOutside)
        return () => {
            document.removeEventListener('click', checkIfClickedOutside)
        };
    }, [isOpen]);

    const togglingInput = () => setIsOpen(!isOpen);

    const onInputOptionClicked = value => () => {
        setOptions(options.map((option) => {
            if (option.id === value.id) {
                if (value.isSelected === false) {
                    value.isSelected = !value.isSelected;
                    withExtraOptionsDone();
                    return value;
                } else {
                    return value;
                }
            }
            if(option.isSelected === true) option.isSelected = false
            return option;
        }));
        setIsOpen(false);
    };

    if(isReset) { 
        options.map(option => {
            if(option.isSelected === true) option.isSelected = false;
            return option;
        })
    } 
    
    return (
        <Row className="rowStyle" onClick={togglingInput} ref={ref}>
            <Col md={{ span: 4 }} className="rowCol">
                <p className="rowParagraph">WithExtraOptions</p>
            </Col>

            <Col md={{ span: 8 }} className="rowCol">
                {options.filter(option => option.isSelected).length !== 0 ? 
                    <Button className="standBtn standBtnMobile">
                        {options.filter(option => option.isSelected)[0].icon}
                        {options.filter(option => option.isSelected)[0].name}
                    </Button> : 
                    <Button disabled className="standBtn standBtnMobile">I am a Placeholder</Button>}
            </Col>

            {isOpen && (
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

                    {options.map(option => {
                        if (option.isSelected) {
                            return (
                                <Col 
                                    style={{backgroundColor: '#d0fcfc'}} 
                                    className="DropDownItemColumn" 
                                    onClick={onInputOptionClicked(option)} 
                                    key={Math.random()}
                                >
                                    <Dropdown.Item 
                                        style={{backgroundColor: '#d0fcfc'}}
                                        className="DropDownItem"    
                                    >
                                        {option.icon}
                                        {option.name}
                                    </Dropdown.Item>
                                </Col>
                            )
                        } else {
                            return (
                                <Col 
                                    className="DropDownItemColumn" 
                                    onClick={onInputOptionClicked(option)}
                                    key={Math.random()}
                                >
                                    <Dropdown.Item className="DropDownItem">
                                        {option.icon}
                                        {option.name}
                                    </Dropdown.Item>
                                </Col>
                            )
                        }
                        })
                    }
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
    )
}

export default WithExtraOptions;