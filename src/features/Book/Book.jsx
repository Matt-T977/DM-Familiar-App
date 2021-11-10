import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';
import AddBook from './AddBook/AddBook';


function Book() {
    const auth = useAuth()


    return ( 
        <Container className='d-flex align-items-center justify-content-center' style={{minHeight: '100vh'}}>
            <Row className='w-100' 
            style = {{
                maxWidth: '25vw',
                minHeight: '30vh',
                backgroundColor: '#E0C097',
                borderStyle: 'solid',
                borderColor: '#5C3D2E',
                borderWidth: '5px',
                borderRadius: '1rem',
                }}>
                <AddBook />
            </Row>
        </Container>
     );
}

export default Book;