import { Row, Col, Button } from 'react-bootstrap';
import './styles/ChooseATheme.css';

function ChooseATheme() {
    return (
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
    )
}

export default ChooseATheme;