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
    const handleReset = () => { 
        setIsReset(!isReset);
        setWithExtraOptions(false);
        setSearchSearch(false);
        setStatus(false);
        setType(false);
        setUrgency(false);
    }

    const [withExtraOptions, setWithExtraOptions] = useState(false);
    const withExtraOptionsDone = () => setWithExtraOptions(true);

    const [searchSearch, setSearchSearch] = useState(false);
    const searchSearchDone = () => setSearchSearch(true);

    const [status, setStatus] = useState(false);
    const statusDone = () => setStatus(true);

    const [type, setType] = useState(false);
    const typeDone = () => setType(true);

    const [urgency, setUrgency] = useState(false);
    const urgencyDone = () => setUrgency(true);

    return (
        <Container>
            <Col lg={{ span: 6, offset: 3 }}  className="outsideBorder">
                <Form className="formBorder">
                    
                    <FormHeader />

                    <hr className="HR" />

                    <PropertySelector isReset={isReset} />

                    <hr className="HR" />

                    <WithExtraOptions 
                        isReset={isReset} 
                        withExtraOptionsDone={withExtraOptionsDone}
                    />

                    <hr className="HR" />

                    <SearchSearch 
                        isReset={isReset}
                        searchSearchDone={searchSearchDone}
                    />

                    <hr className="HR" />
                    
                    <MultiSearch />

                    <hr className="HR" />

                    <ChooseATheme />

                    <hr className="HR" />

                    <Status 
                        isReset={isReset}
                        statusDone={statusDone}
                    />

                    <hr className="HR" />
                    
                    <Type 
                        isReset={isReset}
                        typeDone={typeDone}   
                    />

                    <hr className="HR" />

                    <Urgency 
                        isReset={isReset} 
                        urgencyDone={urgencyDone}    
                    />

                    <hr className="HR" />

                </Form>

                <SubmitButton 
                    handleReset={handleReset} 
                    withExtraOptions={withExtraOptions}
                    searchSearch={searchSearch}
                    status={status}
                    type={type}
                    urgency={urgency}
                />
                
                <ResetButton handleReset={handleReset} />
            </Col>
        </Container>
    );
}

export default FormContainer;