import React, { useState,useRef} from 'react';
import { Col, Row, Form, Button, Spinner } from 'react-bootstrap';
import { Section } from './../Utils/Section';

import programming from './../../assets/images/i3.webp';
import { sendMessage } from '../../services/Message';
import useLanguage from './../../hooks/useLanguage';

export const ContactForm = () => {

    const initialState = {
        "name" : '',
        "email" : '',
        "message" : '',
    }

    const { lang} = useLanguage();
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
        const response = await sendMessage(formdata);
        setLoading(false);
        setValidate(false);
        console.log(response);
        if(response){
            setFormdata(initialState);
        }
        button.current.removeAttribute("disabled");
    }

    

    return (
        <Section title={lang.contact.title} id="contact-section">
            <Row>
                <Col className="mx-5">
                    <Form validated={validate} onSubmit={handleSubmit} className="paragraph">
                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label>{lang.contact.fields.name.title}</Form.Label>
                            <Form.Control name="name" onChange={(e) => handleInputChange(e)} type="text" placeholder={lang.contact.fields.name.placeholder} required value={formdata.name}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>{lang.contact.fields.email.title}</Form.Label>
                            <Form.Control name="email" onChange={(e) => handleInputChange(e)}  type="email" placeholder={lang.contact.fields.email.placeholder} required value={formdata.email}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>{lang.contact.fields.message.title}</Form.Label>
                            <Form.Control name="message" onChange={(e) => handleInputChange(e)}  as="textarea" placeholder={lang.contact.fields.message.placeholder} required value={formdata.message}/>
                        </Form.Group>
                        <Button variant="primary" type="submit" ref={button}>
                            <span>{lang.contact.fields.button.title}</span>
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
