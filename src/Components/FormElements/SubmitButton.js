import './styles/SubmitButton.css';
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

function SubmitButton({handleReset, withExtraOptions, searchSearch, status, type, urgency}) {
    const [show, setShow] = useState(false);
    const doneOptionsArr = [
        {
            id: Math.random(),
            name: "WithExtraOptions",
            filled: withExtraOptions
        },
        {
            id: Math.random(),
            name: "SearchSearch",
            filled: searchSearch
        },
        {
            id: Math.random(),
            name: "Status",
            filled: status
        },
        {
            id: Math.random(),
            name: "Type",
            filled: type
        },
        {
            id: Math.random(),
            name: "Urgency",
            filled: urgency
        }
    ];    

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    return (
        <>
            <Button 
                className="endBtn" 
                style={{marginRight: '10px'}}
                onClick={handleShow}
            >
                Submit
            </Button>

            {doneOptionsArr.filter(option => option.filled === true).length === 5 ? 
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Information about form</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>The form has been submitted to the server</Modal.Body>

                    <Modal.Footer>
                        <Button variant="primary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal> : 
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Information about form</Modal.Title>
                    </Modal.Header>

                    <Modal.Body> 
                        {doneOptionsArr.filter(option => option.filled === false).map(opt => {
                            return (
                                <p key={Math.random()}>
                                    Fill out the required field <b style={{color: 'red'}}>"{opt.name}"</b>!!!
                                </p>
                            )
                        })}
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="primary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>}
        </>
    )
}

export default SubmitButton;