import React, {useState} from 'react';
import { Form, Modal, Row, Col, Button } from 'react-bootstrap'
import { useAuth } from '../../../contexts/AuthContext';
import axios from 'axios';




function AddBook(props) {
    const auth = useAuth();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [book, setBook] = useState({
        title: '',
        summary: '',
        category: '',
    })
    const handleChange = (event) => {
        event.persist();
        setBook((book) => ({
            ...book,
            [event.target.name]: event.target.value,
        }));
    } 
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(book)
        postBook(book, props.currentProject.name, auth.currentUser.uid)
    }

    const postBook = async (book, projectID, userID) => {
        await axios.post('http://127.0.0.1:8000/' + userID + '/project/' + projectID + '/book/list', book)
        .then( res => {
            props.getBookList(projectID, userID)
            console.log(res)
        }).catch(err => {
            console.log("Error in postBook: " + err);
        });
    }

    
    return (
        <>
            <input className='btn btn-sm btn-outline-dark p-1' type="button" onClick={handleShow} value="New Book" 
            style={{
                backgroundColor: '#B85C38',
                borderColor: '#B85C38',
                color: '#E0C097',
                fontFamily: ('EB Garamond', 'serif'),
                fontStyle: 'italic',
            }}/>


            <Modal show={show} onHide={handleClose} className='modal-font text-center'
            size='lg'
            aria-labelledby='contained-modal-title-vcenter'
            centered
            >
                <Modal.Header closeButton id='modal-header-styling'
                    style={{
                        backgroundColor: '#E0C097',
                        borderColor: '#E0C097',
                        color: '#B85C38',
                        fontFamily: ('EB Garamond', 'serif'),
                        fontStyle: 'italic',
                    }}>
                    <Modal.Title id='contained-modal-title-vcenter'>
                        Add Book:
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body id='modal-body-styling'
                    style={{
                        backgroundColor: '#E0C097',
                        borderColor: '#E0C097',
                        color: '#B85C38',
                        fontFamily: ('EB Garamond', 'serif'),
                        fontStyle: 'italic',
                    }}>
                    <form onSubmit={handleSubmit} className='put'>
                        <Row >
                            <Form.Group as={Col} controlId='title'>
                                    <Form.Label>Title:</Form.Label>
                                    <Form.Control className='form-control shadow m-1' name='title' type='text' placeholder='Title...' onChange={handleChange} />
                            </Form.Group>
                            <Form.Group as={Col} controlId='category'>
                                    <Form.Label>Category:</Form.Label>
                                    <Form.Control className='form-control shadow m-1' name='category' type='text' placeholder='Category...' onChange={handleChange} />
                            </Form.Group>
                            <Form.Group as={Row} controlId='summary'>
                                    <Form.Label className='mt-1'>Summary:</Form.Label>
                                    <Form.Control as='textarea' rows={5} className='form-control shadow m-1' name='summary' type='text' placeholder='Summary...' onChange={handleChange} />
                            </Form.Group>
                        </Row>
                        <Button variant="secondary" className='shadow mt-4 m-1' type="submit"  onClick={handleClose}
                            style={{
                                backgroundColor: '#B85C38',
                                borderColor: '#B85C38',
                                color: '#E0C097',
                                fontFamily: ('EB Garamond', 'serif'),
                                fontStyle: 'italic',
                            }}>
                        Submit
                        </Button>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default AddBook;