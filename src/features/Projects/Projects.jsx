import React, { useEffect } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import StockProjectArt from '../../Static/StockProjectArt.jpg'
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Projects(props) {
    const auth = useAuth();
    const navigate = useNavigate()


    const handleOpenProject = (project) =>{
        props.getCurrentProject(project.name, auth.currentUser.uid);
        project.include_char_sheet && props.getCharacterList(auth.currentUser.uid, project.name);
        project.include_text_doc && props.getBookList(project.name, auth.currentUser.uid);
        console.log(project.name)
        navigate('/dashboard')
    }

    const handleDeleteProject = (projectId) =>{
        deleteCurrentProject(projectId, auth.currentUser.uid);
        console.log("Project Deleted");
    }

    const deleteCurrentProject = async (ProjectID, userID) => {
        await axios.delete('http://127.0.0.1:8000/' + userID + '/project/' + ProjectID)
        .then(response => {
          props.getProjectList(auth.currentUser.uid);
        }).catch(err => {console.log(err);})
      }

    useEffect(() => {
        try {
            props.getProjectList(auth.currentUser.uid)
        } catch {
            console.log("Unable to get Project List")
        } 
        console.log("Get Project List effect")
    }, []);

    return ( 
        <Container className='d-flex justify-content-center align-items-center' style={{minHeight: '100vh', minWidth: '100vw'}}>
            <Row lg={2} md={1} className='w-100 justify-content-center overflow-auto'>
                {props.projects.map((project) => (
                    <Col lg={5} md={10} className='m-2'
                    style={{
                        maxHeight: '50vh',
                        backgroundColor: '#E0C097',
                        borderStyle: 'solid',
                        borderColor: '#5C3D2E',
                        borderWidth: '5px',
                        borderRadius: '1rem',
                    }}>
                        <Row>
                            <Col >
                            <img className='d-block m-3 shadow mx-auto' src={StockProjectArt} alt='stock' 
                        style={{
                            borderRadius: '1rem',
                            maxHeight: '40vh'
                        }}/>
                            </Col>
                            <Col>
                                <Card
                                style={{
                                    backgroundColor: '#E0C097',
                                    borderColor: '#E0C097',
                                    color: '#B85C38',
                                    fontSize: '1rem',
                                    minHeight: '40vh'
                                }}>
                                    <Card.Body>
                                        <Card.Title className='mt-2' style={{fontSize: '2rem', textShadow: '2.5px 2.5px 6px'}}>{project.name}</Card.Title>
                                        <Card.Text className='my-5' style={{fontSize: '1.25rem', textShadow: '2px 2px 4px'}}>{project.summary}</Card.Text>
                                        <Button className='w-25 shadow'
                                        style={{
                                            position: 'absolute',
                                            bottom: '.5rem',
                                            left: '1rem',
                                            backgroundColor: '#B85C38',
                                            borderColor: '#B85C38',
                                            color: '#E0C097',
                                            fontFamily: ('EB Garamond', 'serif'),
                                            fontStyle: 'italic',
                                        }}>
                                            Edit
                                        </Button>
                                        <Button onClick={() => handleOpenProject(project)} className='w-25 shadow btn'
                                        style={{
                                            position: 'absolute',
                                            bottom: '.5rem',
                                            right: '38%',
                                            backgroundColor: '#B85C38',
                                            borderColor: '#B85C38',
                                            color: '#E0C097',
                                            fontFamily: ('EB Garamond', 'serif'),
                                            fontStyle: 'italic',
                                        }}>
                                            Open
                                        </Button>
                                        <Button onClick={() => handleDeleteProject(project.name)} className='w-25 shadow'
                                        style={{
                                            position: 'absolute',
                                            bottom: '.5rem',
                                            right: '1rem',
                                            backgroundColor: '#B85C38',
                                            borderColor: '#B85C38',
                                            color: '#E0C097',
                                            fontFamily: ('EB Garamond', 'serif'),
                                            fontStyle: 'italic',
                                        }}>
                                            Delete
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                ))}
            </Row>

        </Container>
     );
}

export default Projects;