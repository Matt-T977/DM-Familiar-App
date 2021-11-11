import React, { useState, useEffect } from 'react';
import { Accordion, Container, Row } from 'react-bootstrap';
import { useAuth } from '../../../contexts/AuthContext';


function Chapter(props) {
    const auth = useAuth()




    return ( 
        <Container>
            <Row>
                <Accordion>
                    <Accordion.Item>
                        <Accordion.Header>

                        </Accordion.Header>
                        <Accordion.Body>

                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Row>
        </Container>
     );
}

export default Chapter;