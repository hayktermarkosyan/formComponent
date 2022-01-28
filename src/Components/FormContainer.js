import { useState } from 'react';
import './FormContainer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Form } from 'react-bootstrap';
import FormHeader from './FormElements/FormHeader';
import PropertySelector from "./FormElements/PropertySelector";
import WithExtraOptions from './FormElements/WithExtraOptions';
import SearchSearch from './FormElements/SearchSearch';
import MultiSearch from './FormElements/MultiSearch';
import ChooseATheme from './FormElements/ChooseATheme';
import Status from './FormElements/Status';
import Type from './FormElements/Type';
import Urgency from './FormElements/Urgency';
import SubmitButton from './FormElements/SubmitButton';
import ResetButton from './FormElements/ResetButton';


function FormContainer () {

    const [isReset, setIsReset] = useState(false);

    const handleReset = () => setIsReset(!isReset);

    return (
        <Container>
            <Col md={{ span: 6, offset: 3 }} className="outsideBorder">
                <Form className="formBorder">
                    
                    <FormHeader />

                    <hr className="HR" />

                    <PropertySelector isReset={isReset} />

                    <hr className="HR" />

                    <WithExtraOptions isReset={isReset} />

                    <hr className="HR" />

                    <SearchSearch isReset={isReset} />

                    <hr className="HR" />
                    
                    <MultiSearch />

                    <hr className="HR" />

                    <ChooseATheme />

                    <hr className="HR" />

                    <Status isReset={isReset} />

                    <hr className="HR" />
                    
                    <Type isReset={isReset} />

                    <hr className="HR" />

                    <Urgency isReset={isReset} />

                    <hr className="HR" />

                </Form>

                <SubmitButton handleReset={handleReset} />
                
                <ResetButton handleReset={handleReset} />
            </Col>
        </Container>
    );
}

export default FormContainer;