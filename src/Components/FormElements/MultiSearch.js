import { Row, Col, Button } from 'react-bootstrap';
import './styles/MultiSearch.css';

function MultiSearch() {
    return (
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
    )
}

export default MultiSearch;