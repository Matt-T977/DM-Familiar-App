import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';


function NewCharacter() {
    return ( 
        <Container className='d-flex align-items-center justify-content-center w-100' 
        style = {{
            minHeight: '60vh',
            backgroundColor: '#E0C097',
            borderStyle: 'solid',
            borderColor: '#5C3D2E',
            borderWidth: '5px',
            borderRadius: '1rem',
            }}>
                <Form>
                    <Row>
                        <Col>
                            <Form.Control placeholder='Character Name' />
                            <Form.Control placeholder='Background' />
                        </Col>
                        <Col>
                            <Form.Control placeholder='Class' />
                            <Form.Control placeholder='Level' />
                        </Col>
                        <Col>
                            <Form.Control placeholder='race' />
                            <Form.Control placeholder='Background' />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Row>
                                <Form.Control placeholder='Strength' />
                            </Row>
                            <Row>
                                <Form.Control placeholder='Dexterity' />
                            </Row>
                            <Row>
                                <Form.Control placeholder='Constitution' />
                            </Row>
                            <Row>
                                <Form.Control placeholder='Intelligence' />
                            </Row>
                            <Row>
                                <Form.Control placeholder='Wisdom' />
                            </Row>
                            <Row>
                                <Form.Control placeholder='Charisma' />
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <Form.Control placeholder='health' />
                            </Row>
                            <Row>
                                <Form.Control placeholder='temp hp' />
                            </Row>
                            <Row>
                                <Form.Control placeholder='armor class' />
                            </Row>
                            <Row>
                                <Form.Control placeholder='initiative' />
                            </Row>
                            <Row>
                                <Form.Control placeholder='speed' />
                            </Row>
                            <Row>
                                <Form.Control placeholder='proficiency bonus' />
                            </Row>
                            <Row>
                                <Form.Control placeholder='passive perception' />
                            </Row>
                            <Row>
                                <Form.Control placeholder='passive investigation' />
                            </Row>
                            <Row>
                                <Form.Control placeholder='death success' />
                            </Row>
                            <Row>
                                <Form.Control placeholder='death fail' />
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <Form.Control placeholder='acrobatics' />
                            </Row>
                            <Row>
                                <Form.Control placeholder='animal handling' />
                            </Row>
                            <Row>
                                <Form.Control placeholder='arcana' />
                            </Row>
                            <Row>
                                <Form.Control placeholder='athletics' />
                            </Row>
                            <Row>
                                <Form.Control placeholder='deception' />
                            </Row>
                            <Row>
                                <Form.Control placeholder='history' />
                            </Row>
                            <Row>
                                <Form.Control placeholder='insight' />
                            </Row>
                            <Row>
                                <Form.Control placeholder='intimidation' />
                            </Row>
                            <Row>
                                <Form.Control placeholder='investigation' />
                            </Row>
                            <Row>
                                <Form.Control placeholder='medicine' />
                            </Row>
                            <Row>
                                <Form.Control placeholder='nature' />
                            </Row>
                            <Row>
                                <Form.Control placeholder='perception' />
                            </Row>
                            <Row>
                                <Form.Control placeholder='performance' />
                            </Row>
                            <Row>
                                <Form.Control placeholder='persuasion' />
                            </Row>
                            <Row>
                                <Form.Control placeholder='religion' />
                            </Row>
                            <Row>
                                <Form.Control placeholder='sleight of hand' />
                            </Row>
                            <Row>
                                <Form.Control placeholder='stealth' />
                            </Row>
                            <Row>
                                <Form.Control placeholder='survival' />
                            </Row>
                        </Col>
                    </Row>
                </Form>
        </Container>
     );
}

export default NewCharacter;