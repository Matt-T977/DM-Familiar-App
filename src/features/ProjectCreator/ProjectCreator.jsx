import React, { useState, useRef } from 'react';
import projectStockImage from '../../Static/projectStockImage.jpg'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';


function ProjectCreator() {

    const nameRef = useRef()
    const summaryRef = useRef()
    const dateRef = useRef()
    const [project, setProject] = useState({
        name: '',
        summary: '',
        creation_date: '',
        include_char_sheet: false,
        include_text_doc: false,
        include_static_assets: false,
        include_video: false,
        include_audio: false,
        include_location: false,
    })

    const handleCheck = (e) => {
        e.persist();
        if (e.target.checked) {
            setProject(currentState =>({
                ...currentState,
                [e.target.name]: true,
            }))
        } else {
            setProject(currentState =>({
                ...currentState,
                [e.target.name]: false,
            }))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setProject(currentState =>({
            ...currentState,
            name: nameRef.current.value,
            summary:summaryRef.current.value,
            creation_date: dateRef.current.value,
        }))
        console.log(project)
    }



    return ( 
        <Container className='d-flex align-items-center justify-content-center' style={{minHeight: '100vh'}}>
            <Row className='w-100 align-items-center' 
            style = {{
                maxWidth: '90vw',
                minHeight: '80vh',
                backgroundColor: '#E0C097',
                borderStyle: 'solid',
                borderColor: '#5C3D2E',
                borderWidth: '5px',
                borderRadius: '1rem',
                }}>
                <Col className='m-3'>
                    <Container>
                        <img className='d-block w-100 shadow' src={projectStockImage} alt='stock' 
                        style={{
                            borderRadius: '1rem'
                        }}/>
                        <Button className='w-100 text-start'
                        style={{
                            backgroundColor: '#B85C38',
                            color: '#E0C097',
                            fontStyle: 'italic',
                            fontSize: '2rem',
                            position: 'relative',
                            bottom: '8rem',
                            opacity: '.8'
                        }}>
                            Upload Project Image
                        </Button>
                    </Container>
                </Col>
                <Col className='m-3'>
                    <h2 className='text-center mb-3'>Create your Project!</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type='text' ref={nameRef} placeholder='Project Name' required/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Summary</Form.Label>
                            <Form.Control as='textarea' rows={5} type='text' ref={summaryRef} placeholder='Write your summary here!' required/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Date</Form.Label>
                            <Form.Control type='date' ref={dateRef} required/>
                        </Form.Group>

                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Characters?</Form.Label>
                                    <Form.Check type='checkbox' name = "include_char_sheet"  checked={project.include_char_sheet} onChange={handleCheck}/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Documents?</Form.Label>
                                    <Form.Check type='checkbox' name = "include_text_doc" value ={project.include_text_doc} onChange={handleCheck}/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>References?</Form.Label>
                                    <Form.Check type='checkbox' name = "include_static_assets" value ={project.include_static_assets} onChange={handleCheck}/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Videos?</Form.Label>
                                    <Form.Check type='checkbox' name = "include_video" value ={project.include_video} onChange={handleCheck}/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Audio?</Form.Label>
                                    <Form.Check type='checkbox' name = "include_audio" value ={project.include_audio} onChange={handleCheck}/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Locations?</Form.Label>
                                    <Form.Check type='checkbox' name = "include_location" value ={project.include_location} onChange={handleCheck}/>
                                </Form.Group>
                            </Col>
                        </Row>
                        
                        <Button className='d-flex w-50 mx-auto justify-content-center mt-3' variant='primary' type='submit'>Create Project</Button>
                    </Form>
                </Col>
            </Row>

        </Container>
     );
}

export default ProjectCreator;