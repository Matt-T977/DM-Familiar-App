import React, { useState, useEffect } from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';
import AddChapter from '../AddChapter/AddChapter';


function Chapter(props) {
    let keyInterval = 0

    return ( 
        <Container>
            <Row >
                <Accordion className='mt-1 mb-2'
                >
                    {props.chapters.map(chapter =>
                        <Accordion.Item eventKey={keyInterval++}
                        style={{
                            backgroundColor: '#E0C097',
                            color: '#B85C38',
                            fontFamily: ('EB Garamond', 'serif'),
                            fontStyle: 'italic',
                        }}>
                            <Accordion.Header >
                                <Col lg={4} md={3} sm={2}>
                                    {chapter.title}
                                </Col>
                                <Col>
                                    {chapter.summary}
                                </Col>
                            </Accordion.Header>
                            <Accordion.Body>
                                {chapter.body}
                            </Accordion.Body>
                        </Accordion.Item>
                    )}
                </Accordion>
            </Row>
            <Row>
                <AddChapter book={props.book} currentProject={props.currentProject} getChapterList={props.getChapterList}/>
            </Row>
        </Container>
     );
}

export default Chapter;