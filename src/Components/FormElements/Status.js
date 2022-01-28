import { useState, useRef, useEffect } from "react";
import { Row, Col, Button, Dropdown } from 'react-bootstrap';
import statLogo from '../icons/check-mark.png';
import './styles/Status.css';

function Status({isReset}) {
    const [isOpen, setIsOpen] = useState(false);
    const [options, setOptions] = useState([
        {
            id: Math.random(),
            name: "To Do",
            icon: (<img src={statLogo} alt="statLogo" className="statLogo" />),
            isSelected: false
        },
        {
            id: Math.random(),
            name: "In Process",
            icon: (<img src={statLogo} alt="statLogo" className="statLogo" />),
            isSelected: false
        }, 
        {
            id: Math.random(),
            name: "Done",
            icon: (<img src={statLogo} alt="statLogo" className="statLogo" />),
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
                    return value;
                } else {
                    return value;
                }
            }
            if(option.isSelected === true) {
                option.isSelected = false;
            }
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
                <p className="rowParagraph">Status</p>
            </Col>

            <Col md={{ span: 8 }} className="rowCol"> 
                {options.filter(option => option.isSelected).length !== 0 ? 
                    <Button className="standBtn">
                        {options.filter(option => option.isSelected)[0].icon}
                        {options.filter(option => option.isSelected)[0].name}
                    </Button> : 
                    <Button disabled className="standBtn">Status</Button>}
            </Col>

            {isOpen && (
                <Dropdown className="DropDownContainerStatus">
                    <p 
                        className="rowParagraph"
                        style={{color: 'gray'}}
                    >
                        <b>Choose a Topic</b>
                    </p>

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

export default Status;