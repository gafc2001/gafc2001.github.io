import React from 'react';
import { Col, Row, Form, Button } from 'react-bootstrap';
import { Section } from './../Section';

import programming from './../../assets/images/i3.webp';
// import { Form } from 'react-bootstrap-validation';

export const ContactForm = () => {
    return (
        <Section title="Contact">
            <Row>
                <Col className="mx-5">
                    <Form>
                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Your name" required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Mensaje</Form.Label>
                            <Form.Control as="textarea" placeholder="Tu mensaje" required/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
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
