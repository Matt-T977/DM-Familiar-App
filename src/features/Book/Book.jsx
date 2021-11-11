import React, { useState, useEffect } from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';
import ScrollWall from '../../Static/ScrollWall.jpg'
import axios from 'axios';
import AddBook from './AddBook/AddBook';


function Book(props) {
    const auth = useAuth()
    const [bookList, setBookList] = useState({books : []})

    useEffect(() => {
        getBookList(props.currentProject.name, auth.currentUser.uid)
    }, []);

    const getBookList = async (ProjectID, userID) => {
        let response = await axios.get('http://127.0.0.1:8000/' + userID + '/project/' + ProjectID + '/book/list');
        setBookList({books : response.data})};

    return ( 
        <Container className='d-flex align-items-center justify-content-center' style={{minHeight: '100vh'}}>
            <Row className='w-100' 
            style = {{
                maxWidth: '50vw',
                minHeight: '30vh',
                backgroundColor: '#2D2424',
                borderStyle: 'solid',
                borderColor: '#5C3D2E',
                borderWidth: '5px',
                borderRadius: '1rem',
                }}>
                <Row md={2}>
                    {bookList.books.map((book) =>
                        <Card className='shadow m-1'
                        style={{
                            backgroundColor: '#E0C097',
                            borderColor: '#5C3D2E',
                            color: '#B85C38',
                            fontSize: '1rem',
                            borderRadius: '1rem',
                            borderWidth: '.25rem',
                            maxWidth: '10vw',
                            maxHeight: '20vh'
                        }}>
                            <Card.Img variant='top' src={ScrollWall} className='overflow-hidden mt-1 shadow'
                            style={{
                                borderRadius: '1rem',
                                objectFit: 'cover'

                                }}/>
                                <Card.Body>
                                    <Card.Title className='text-center'>{book.title}</Card.Title>
                                    <Card.Text>{book.summary}</Card.Text>
                                    <Card.Title>{book.category}</Card.Title>
                                </Card.Body>
                        </Card>
                    )}
                </Row>
                <AddBook currentProject={props.currentProject}/>
            </Row>
        </Container>
     );
}

export default Book;