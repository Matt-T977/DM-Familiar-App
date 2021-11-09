import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';
import axios from 'axios';


function Projects() {
    const auth = useAuth();
    const [projectList, setProjectList] = useState({projects: []})

    const getProjectList = async (userID) => {
        let response = await axios.get('http://127.0.0.1:8000/' + userID + '/project/');
        setProjectList({
            projects: response.data,
        })
    }

    useEffect(() => {
        getProjectList(auth.currentUser.uid)
    }, []);

    return ( 
        <Container className='d-flex justify-content-center align-items-center' style={{minHeight: '100vh'}}>
            <Row xs={2} className='w-100'>
                {projectList.projects.map((project) => (
                    <Col className='m-2'
                    style={{
                        minHeight: '30vh',
                        maxWidth: '30vw',
                        backgroundColor: '#E0C097',
                        borderStyle: 'solid',
                        borderColor: '#5C3D2E',
                        borderWidth: '5px',
                        borderRadius: '1rem',
                    }}>
                        <Row>
                            <Col>
                                image
                            </Col>
                            <Col>
                                {project.name}
                            </Col>
                        </Row>
                    </Col>
                ))}
            </Row>

        </Container>
     );
}

export default Projects;