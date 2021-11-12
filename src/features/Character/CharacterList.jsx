import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import NewCharacter from './NewCharacter/NewCharacter';


function CharacterList(props) {
    return ( 
        <Container className='d-flex align-items-center justify-content-center ' style={{minHeight: '100vh'}}>
            <Row className='w-100 overflow-auto' 
            style = {{
                maxWidth: '50vw',
                minHeight: '30vh',
                backgroundColor: '#2D2424',
                borderStyle: 'solid',
                borderColor: '#5C3D2E',
                borderWidth: '5px',
                borderRadius: '1rem',
                }}>
                <Col lg={3}>
                    characters go here
                </Col>
                <Col lg={9}>
                    <NewCharacter currentProject={props.currentProject}/>
                </Col>
            </Row>
        </Container>
     );
}

export default CharacterList;