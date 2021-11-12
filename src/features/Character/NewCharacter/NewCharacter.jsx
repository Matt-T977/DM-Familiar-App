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
                    <Row className='h3'>Character Sheet</Row>
                    <Row className='h5 pb-2 pt-1 shadow'
                        style={{
                            borderStyle: 'solid',
                            borderColor: '#5C3D2E',
                            borderRadius: '1rem',
                            color: '#B85C38'
                        }}>
                        <Col>
                            <Form.Label>Name</Form.Label>
                            <Form.Control placeholder='Character Name' />
                            <Form.Label>Background</Form.Label>
                            <Form.Control placeholder='Background' />
                        </Col>
                        <Col>
                            <Form.Label>Class</Form.Label>
                            <Form.Control placeholder='Class' />
                            <Form.Label>Level</Form.Label>
                            <Form.Control placeholder='Level' />
                        </Col>
                        <Col>
                            <Form.Label>Race</Form.Label>
                            <Form.Control placeholder='Race' />
                            <Form.Label>Alignment</Form.Label>
                            <Form.Control placeholder='Alignment' />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={2}>
                            <Row className='h5 p-2 shadow'
                            style={{
                                borderStyle: 'solid',
                                borderColor: '#5C3D2E',
                                borderRadius: '1rem',
                                color: '#B85C38'
                            }}>
                                <Form.Label>Strength</Form.Label>
                                <Form.Control placeholder='"18"' />
                            </Row>
                            <Row className='h5 p-2 shadow'
                            style={{
                                borderStyle: 'solid',
                                borderColor: '#5C3D2E',
                                borderRadius: '1rem',
                                color: '#B85C38'
                            }}>
                                <Form.Label>Dexterity</Form.Label>
                                <Form.Control placeholder='"16"' />
                            </Row>
                            <Row className='h5 p-2 shadow'
                            style={{
                                borderStyle: 'solid',
                                borderColor: '#5C3D2E',
                                borderRadius: '1rem',
                                color: '#B85C38'
                            }}>
                                <Form.Label>Constitution</Form.Label>
                                <Form.Control placeholder='"12"' />
                            </Row>
                            <Row className='h5 p-2 shadow'
                            style={{
                                borderStyle: 'solid',
                                borderColor: '#5C3D2E',
                                borderRadius: '1rem',
                                color: '#B85C38'
                            }}>
                                <Form.Label>Intelligence</Form.Label>
                                <Form.Control placeholder='"14"' />
                            </Row>
                            <Row className='h5 p-2 shadow'
                            style={{
                                borderStyle: 'solid',
                                borderColor: '#5C3D2E',
                                borderRadius: '1rem',
                                color: '#B85C38'
                            }}>
                                <Form.Label>Wisdom</Form.Label>
                                <Form.Control placeholder='"17"' />
                            </Row>
                            <Row className='h5 p-2 shadow'
                            style={{
                                borderStyle: 'solid',
                                borderColor: '#5C3D2E',
                                borderRadius: '1rem',
                                color: '#B85C38'
                            }}>
                                <Form.Label>Charisma</Form.Label>
                                <Form.Control placeholder='"13"' />
                            </Row>
                        </Col>
                        <Col lg={2}>
                            <Row>
                                <Form.Label>Health</Form.Label>
                                <Form.Control placeholder='health' />
                            </Row>
                            <Row>
                                <Form.Label>Temp HP</Form.Label>
                                <Form.Control placeholder='temp hp' />
                            </Row>
                            <Row>
                                <Form.Label>Armor Class</Form.Label>
                                <Form.Control placeholder='armor class' />
                            </Row>
                            <Row>
                                <Form.Label>Initiative</Form.Label>
                                <Form.Control placeholder='initiative' />
                            </Row>
                            <Row>
                                <Form.Label>Speed</Form.Label>
                                <Form.Control placeholder='speed' />
                            </Row>
                            <Row>
                                <Form.Label>Proficiency Bonus</Form.Label>
                                <Form.Control placeholder='proficiency bonus' />
                            </Row>
                            <Row>
                                <Form.Label>Passive Perception</Form.Label>
                                <Form.Control placeholder='passive perception' />
                            </Row>
                            <Row>
                                <Form.Label>Passive Investigation</Form.Label>
                                <Form.Control placeholder='passive investigation' />
                            </Row>
                            <Row>
                                <Form.Label>Death Success</Form.Label>
                                <Form.Control placeholder='death success' />
                            </Row>
                            <Row>
                                <Form.Label>Death Fail</Form.Label>
                                <Form.Control placeholder='death fail' />
                            </Row>
                        </Col>
                        <Col lg={3} className='mx-auto my-auto text-end px-4 p-2 shadow'
                        style={{
                            borderStyle: 'solid',
                            borderColor: '#5C3D2E',
                            borderRadius: '1rem',
                            color: '#B85C38'
                        }}>
                            <Row className='h5'>Skill Proficiencies</Row>
                            <Row>
                                <Form.Check type='checkbox' label='Acrobatics' placeholder='acrobatics' />
                            </Row>
                            <Row>
                                <Form.Check type='checkbox' label='Animal Handling' placeholder='animal handling' />
                            </Row>
                            <Row>
                                <Form.Check type='checkbox' label='Arcana' placeholder='arcana' />
                            </Row>
                            <Row>
                                <Form.Check type='checkbox' label='Athletics' placeholder='athletics' />
                            </Row>
                            <Row>
                                <Form.Check type='checkbox' label='Deception' placeholder='deception' />
                            </Row>
                            <Row>
                                <Form.Check type='checkbox' label='History' placeholder='history' />
                            </Row>
                            <Row>
                                <Form.Check type='checkbox' label='Insight' placeholder='insight' />
                            </Row>
                            <Row>
                                <Form.Check type='checkbox' label='Intimidation' placeholder='intimidation' />
                            </Row>
                            <Row>
                                <Form.Check type='checkbox' label='Investigation' placeholder='investigation' />
                            </Row>
                            <Row>
                                <Form.Check type='checkbox' label='Medicine' placeholder='medicine' />
                            </Row>
                            <Row>
                                <Form.Check type='checkbox' label='Nature' placeholder='nature' />
                            </Row>
                            <Row>
                                <Form.Check type='checkbox' label='Perception' placeholder='perception' />
                            </Row>
                            <Row>
                                <Form.Check type='checkbox' label='Performance' placeholder='performance' />
                            </Row>
                            <Row>
                                <Form.Check type='checkbox' label='Persuasion' placeholder='persuasion' />
                            </Row>
                            <Row>
                                <Form.Check type='checkbox' label='Relgion' placeholder='religion' />
                            </Row>
                            <Row>
                                <Form.Check type='checkbox' label='Sleight of Hand' placeholder='sleight of hand' />
                            </Row>
                            <Row>
                                <Form.Check type='checkbox' label='Stealth' placeholder='stealth' />
                            </Row>
                            <Row>
                                <Form.Check type='checkbox' label='Survival' placeholder='survival' />
                            </Row>
                        </Col>
                    </Row>
                </Form>
        </Container>
     );
}

export default NewCharacter;