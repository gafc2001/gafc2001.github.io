import React, { useState,useRef} from 'react';
import { Col, Row, Form, Button, Spinner } from 'react-bootstrap';
import { Section } from './../Section';

import programming from './../../assets/images/i3.webp';
import { sendMessage } from '../../services/Message';


export const ContactForm = () => {

    const initialState = {
        "name" : '',
        "email" : '',
        "message" : '',
    }

    const [formdata, setFormdata] = useState(initialState);
    const [validate,setValidate] = useState(false);

    const button = useRef();
    const [loading, setLoading] = useState(false);
    const handleInputChange = (e) => {
        const value  = e.target.value;

        setValidate(true);
        setFormdata({
            ...formdata,
            [e.target.name] : value,
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        button.current.setAttribute("disabled",true);
        await sendMessage(formdata);
        setLoading(false);
        setValidate(false);
        setFormdata(initialState);
        button.current.removeAttribute("disabled");
    }

    

    return (
        <Section title="Contact">
            <Row>
                <Col className="mx-5">
                    <Form validated={validate} onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control name="name" onChange={(e) => handleInputChange(e)} type="text" placeholder="Your name" required value={formdata.name}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name="email" onChange={(e) => handleInputChange(e)}  type="email" placeholder="Enter email" required value={formdata.email}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Mensaje</Form.Label>
                            <Form.Control name="message" onChange={(e) => handleInputChange(e)}  as="textarea" placeholder="Tu mensaje" required value={formdata.message}/>
                        </Form.Group>
                        <Button variant="primary" type="submit" ref={button}>
                            <span>Submit</span>
                            {loading && (
                                <Spinner
                                className="ms-2"
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            />
                            )}
                        </Button>
                    </Form>
                </Col>
                <Col className="border-start border-3 border-secondary d-none d-lg-block">
                    <img src={programming} alt="programming" className='img-fluid' />
                </Col>
            </Row>
        </Section>
    );
}
