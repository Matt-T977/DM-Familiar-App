import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
// import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import Book from '../Book/Book';


function Dashboard(props) {

    const { currentUser } = useAuth()
    const [error, setError] = useState("")



    return ( 
        <Container className='d-flex align-items-center justify-content-center' style={{minHeight: '100vh'}}>
            <Row className='w-100' style={{minWidth:'100vw'}}>
                <Col 
                style={{
                    maxWidth: '12.5vw',
                    height: '80vh',
                    backgroundColor: '#E0C097',
                    borderStyle: 'solid',
                    borderColor: '#5C3D2E',
                    borderWidth: '5px',
                    // borderRadius: '1rem',
                }}>
                    {props.currentProject.name}
                </Col>
                <Col 
                style={{
                    maxWidth: '85vw',
                    maxHeight: '100vh'
                }}>
                    <Book currentProject={props.currentProject}/>
                </Col>
            </Row>
        </Container>
     );
}

export default Dashboard;