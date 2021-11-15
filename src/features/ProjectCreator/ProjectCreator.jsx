import React, { useState, useRef } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import projectStockImage from '../../Static/projectStockImage.jpg'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router';


function ProjectCreator(props) {

    const auth = useAuth()
    const nameRef = useRef()
    const summaryRef = useRef()
    const dateRef = useRef()
    const navigate = useNavigate()
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

    const handleChange = (e) => {
        e.persist();

        setProject((project) => ({
            ...project,
            [e.target.name]: e.target.value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            postProject(project, auth.currentUser.uid);
        } catch {
            console.log('No Project Posted')
        }

        navigate('/dashboard');
    }

    const postProject = async (project, userID) => {
        await axios.post('http://127.0.0.1:8000/' + userID + '/project/', project)
        .then( res => {
            console.log(res)
            props.getCurrentProject(project.name, auth.currentUser.uid);
        }).catch(err => {
            console.log("Error in postProject: " + err);
        });
    }



    return ( 
        <Container className='d-flex align-items-center justify-content-center' style={{minHeight: '100vh'}}>
            <Row className='w-100 align-items-center pt-5' 
            style = {{
                maxWidth: '90vw',
                minHeight: '75vh',
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
                    <h2 className='text-center mb-3'
                    style={{
                        color: '#B85C38',
                        textShadow: '2.5px 2.5px 6px'
                    }}>Create your Project!</h2>
                    <Form onSubmit={handleSubmit}
                    style={{
                        color: '#B85C38',
                    }}>
                        <Form.Group>
                            <Form.Label className='h5'>Name</Form.Label>
                            <Form.Control type='text' ref={nameRef} name='name' value={project.name} placeholder='Project Name' onChange={handleChange} required/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className='h5 mt-2'>Summary</Form.Label>
                            <Form.Control as='textarea' rows={5} type='text' ref={summaryRef} name='summary' value={project.summary} placeholder='Write your summary here!' onChange={handleChange} required/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className='h5 mt-2'>Date</Form.Label>
                            <Form.Control type='date' ref={dateRef} name='creation_date' value={project.creation_date} onChange={handleChange} required/>
                        </Form.Group>

                        <Row className='text-center'>
                            <Col>
                                <Form.Group>
                                    <Form.Label className='h5 mt-2'>Characters?</Form.Label>
                                    <Form.Check type='checkbox' name = "include_char_sheet"  checked={project.include_char_sheet} onChange={handleCheck}/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className='h5 mt-2'>Documents?</Form.Label>
                                    <Form.Check type='checkbox' name = "include_text_doc" checked={project.include_text_doc} onChange={handleCheck}/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className='h5 mt-2'>References?</Form.Label>
                                    <Form.Check type='checkbox' name = "include_static_assets" checked={project.include_static_assets} onChange={handleCheck}/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label className='h5 mt-2'>Videos?</Form.Label>
                                    <Form.Check type='checkbox' name = "include_video" checked={project.include_video} disabled onChange={handleCheck}/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className='h5 mt-2'>Audio?</Form.Label>
                                    <Form.Check type='checkbox' name = "include_audio" checked={project.include_audio} disabled onChange={handleCheck}/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className='h5 mt-2'>Locations?</Form.Label>
                                    <Form.Check type='checkbox' name = "include_location" checked={project.include_location} onChange={handleCheck}/>
                                </Form.Group>
                            </Col>
                        </Row>
                        
                        <Button className='d-flex w-50 mx-auto justify-content-center mt-3 shadow' type='submit' 
                            style={{
                                backgroundColor: '#B85C38',
                                borderColor: '#B85C38',
                                color: '#E0C097',
                                fontFamily: ('EB Garamond', 'serif'),
                                fontStyle: 'italic',
                            }}>
                            Create Project
                        </Button>
                    </Form>
                </Col>
            </Row>

        </Container>
     );
}

export default ProjectCreator;