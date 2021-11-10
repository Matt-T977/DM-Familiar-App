import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
// import { Link } from 'react-router-dom';
// import { useAuth } from '../../contexts/AuthContext';
import Book from '../Book/Book';


function Dashboard() {

    // const { currentUser } = useAuth()
    // const [error, setError] = useState("")
    // const [project, setProject] = useState({
    //     name: '',
    //     summary: '',
    //     creation_date: '',
    //     include_char_sheet: false,
    //     include_text_doc: false,
    //     include_static_assets: false,
    //     include_video: false,
    //     include_audio: false,
    //     include_location: false,
    // })



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
                    Project Nav
                </Col>
                <Col 
                style={{
                    maxWidth: '85vw',
                    maxHeight: '100vh'
                }}>
                    <Book />
                </Col>
            </Row>
        </Container>
     );
}

export default Dashboard;