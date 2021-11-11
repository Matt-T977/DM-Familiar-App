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
            console.log(res)
        }).catch(err => {
            console.log("Error in postBook: " + err);
        });
    }

    
    return (
        <>
            <input className='btn btn-sm btn-outline-dark p-1' type="button" onClick={handleShow} value="New Book" />


            <Modal show={show} onHide={handleClose} className='modal-font text-center'
            size='lg'
            aria-labelledby='contained-modal-title-vcenter'
            centered
            >
                <Modal.Header closeButton id='modal-header-styling'>
                    <Modal.Title id='contained-modal-title-vcenter'>
                        Add Book:
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body id='modal-body-styling'>
                    <form onSubmit={handleSubmit} className='put'>
                        <Row className='mb-3'>
                            <Form.Group as={Col} controlID='title'>
                                    <Form.Label>Title:</Form.Label>
                                    <Form.Control className='form-control shadow m-1' name='title' type='text' placeholder='Title...' onChange={handleChange} />
                            </Form.Group>
                            <Form.Group as={Col} controlID='category'>
                                    <Form.Label>Category:</Form.Label>
                                    <Form.Control className='form-control shadow m-1' name='category' type='text' placeholder='Category...' onChange={handleChange} />
                            </Form.Group>
                            <Form.Group as={Row} controlID='summary'>
                                    <Form.Label>Summary:</Form.Label>
                                    <Form.Control as='textarea' rows={5} className='form-control shadow m-1' name='summary' type='text' placeholder='Summary...' onChange={handleChange} />
                            </Form.Group>
                        </Row>
                        <Button variant="secondary" className='shadow mt-4 m-1' type="submit"  >
                        Submit
                        </Button>
                    </form>
                </Modal.Body>
                <Modal.Footer id='modal-footer-styling'>

                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddBook;