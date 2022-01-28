import './styles/SubmitButton.css';
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

function SubmitButton({handleReset}) {
    const [show, setShow] = useState(false);

    const handleClose = () => { 
        setShow(false);
        handleReset();
    }
    const handleShow = () => {
        setShow(true);
        handleReset();
    }

    return (
        <>
            <Button 
                className="endBtn" 
                style={{marginRight: '10px'}}
                onClick={handleShow}
            >
                Submit
            </Button>

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
            </Modal>
        </>
    )
}

export default SubmitButton;