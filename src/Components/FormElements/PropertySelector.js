import { useState, useRef, useEffect } from "react";
import { Row, Col, Button, Dropdown } from 'react-bootstrap';
import profileLogo from '../icons/profile.png';
import './styles/PropertySelector.css';

function PropertySelector({isReset}) {
    const [isOpen, setIsOpen] = useState(false);
    const [options, setOptions] = useState([
        {
            id: Math.random(),
            name: "Brandon Waelchi",
            icon: (<img src={profileLogo} alt="profileLogo" className="profileLogo" />),
            isSelected: false
        },
        {
            id: Math.random(),
            name: "Rosina Ernser",
            icon: (<img src={profileLogo} alt="profileLogo" className="profileLogo" />),
            isSelected: false
        }, 
        {
            id: Math.random(),
            name: "Jaunita Champlin",
            icon: (<img src={profileLogo} alt="profileLogo" className="profileLogo" />),
            isSelected: false
        }, 
        {
            id: Math.random(),
            name: "Jaycee Renner",
            icon: (<img src={profileLogo} alt="profileLogo" className="profileLogo" />),
            isSelected: false
        },
        {
            id: Math.random(),
            name: "Lucius Conn",
            icon: (<img src={profileLogo} alt="profileLogo" className="profileLogo" />),
            isSelected: true
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
            if(option.name !== "Lucius Conn") option.isSelected = false;
            else option.isSelected = true;
            return option;
        })
    } 

    return (
        <Row className="rowStyle" onClick={togglingInput} ref={ref}>
            <Col md={{ span: 4 }} className="rowCol">
                <p className="rowParagraph">PropertySelector</p>
            </Col>

            <Col md={{ span: 8 }} className="rowCol"> 
                <Button className="standBtn">
                    {options.filter(option => option.isSelected)[0].icon}
                    {options.filter(option => option.isSelected)[0].name}
                </Button>   
            </Col>

            {isOpen && (
                <Dropdown className="DropDownContainer">
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
                                <Col className="DropDownItemColumn" onClick={onInputOptionClicked(option)} key={Math.random()}>
                                    <Dropdown.Item className="DropDownItem">
                                        {option.icon}
                                        {option.name}
                                    </Dropdown.Item>
                                </Col>
                            )
                        }
                    })}
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

export default PropertySelector;
