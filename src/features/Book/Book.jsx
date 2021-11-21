import React, { useState } from 'react';
import { ButtonGroup, Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';
import ScrollWall from '../../Static/ScrollWall.jpg'
import AddBook from './AddBook/AddBook';
import Chapter from './Chapter/Chapter';
import axios from 'axios';
import './Book.css'


function Book(props) {
    const auth = useAuth()
    const [currentBook, setCurrentBook] = useState({book : {}})


    const handleClick = (ProjectID, BookID, book) => {
        setCurrentBook({book: book})
        console.log({currentBook})
        props.getChapterList(ProjectID, auth.currentUser.uid, BookID)
    }

    const handleDelete = (projectId, BookId) => {
        deleteBook(projectId, BookId, auth.currentUser.uid);
        console.log()
    }

    const deleteBook = async (projectId, BookId, userId) => {
        await axios.delete('http://127.0.0.1:8000/' + userId + '/project/' + projectId + '/book/' + BookId)
        .then(response => {
          props.getBookList(auth.currentUser.uid);
        }).catch(err => {console.log(err);})
    }

    return ( 
        <Container className='d-flex align-items-start justify-content-center mt-3 g-0' style={{minHeight: '100vh'}}>
            <Row className='w-100 overflow-hidden' 
            style = {{
                minHeight: '30vh',
                backgroundColor: '#2D2424',
                borderStyle: 'solid',
                borderColor: '#5C3D2E',
                borderWidth: '5px',
                borderRadius: '1rem',
                }}>
                <Row className='text-center w-100 g-0'
                style ={{
                    maxHeight: '2rem',
                    width: '20px',
                    backgroundColor: '#E0C097',
                    borderColor: '#5C3D2E',
                    color: '#B85C38',
                    fontSize: '1.25rem',
                    fontWeight: '800'
                }}>
                    <Col>Book Shelf</Col>
                </Row>
                <Row >
                    <Col md={4} className='overflow-auto p-3' 
                    style={{
                        maxHeight: '70vh'
                        }}>
                        <Row md={1} >
                            {props.books.map((book) =>
                                <Card onClick={() => handleClick(props.currentProject.name, book.title, book)} className='shadow m-1'
                                style={{
                                    backgroundColor: '#E0C097',
                                    borderColor: '#5C3D2E',
                                    color: '#B85C38',
                                    fontSize: '1rem',
                                    borderRadius: '1rem',
                                    borderWidth: '.25rem',
                                    maxHeight: '30vh'
                                }}>
                                    <Card.Img variant='top' src={ScrollWall} className='overflow-hidden mt-1 shadow'
                                    style={{
                                        borderRadius: '1rem',
                                        minHeight: '10vh',
                                        objectFit: 'cover'

                                        }}/>
                                    <Card.Body>
                                        <Card.Title className='text-center'>{book.title}</Card.Title>
                                        <Card.Text className='overflow-auto'>{book.summary}</Card.Text>
                                        <Card.Title>{book.category}</Card.Title>
                                        <div align='center'>
                                            <ButtonGroup size='sm'>
                                                <Button variant='success'>
                                                    Edit
                                                </Button>
                                                <Button variant='danger' onClick={() => handleDelete(props.currentProject.name, book.title)}>
                                                    Delete
                                                </Button>
                                            </ButtonGroup>
                                        </div>

                                    </Card.Body>
                                </Card>
                            )}
                        </Row>
                    </Col>
                    <Col >
                        <Chapter currentProject={props.currentProject} chapters={props.chapters} book={currentBook.book} getChapterList={props.getChapterList}/>
                    </Col>
                </Row>
                <AddBook currentProject={props.currentProject} getBookList={props.getBookList}/>
            </Row>
        </Container>
     );
}

export default Book;