import React, { useState, useEffect } from 'react';
import { Accordion, Container, Row } from 'react-bootstrap';
import AddChapter from '../AddChapter/AddChapter';


function Chapter(props) {


    return ( 
        <Container>
            <Row>
                <Accordion className='mt-1'>
                    {props.chapters.map(chapter =>
                        <Accordion.Item>
                            <Accordion.Header>
                                {chapter.title}
                            </Accordion.Header>
                            <Accordion.Body>
                                {chapter.body}
                            </Accordion.Body>
                        </Accordion.Item>
                    )}
                </Accordion>
            </Row>
            <Row>
                <AddChapter book={props.book} currentProject={props.currentProject}/>
            </Row>
        </Container>
     );
}

export default Chapter;