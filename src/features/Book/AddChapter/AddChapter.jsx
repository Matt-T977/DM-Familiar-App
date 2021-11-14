import React, {useState} from 'react';
import { Form, Modal, Row, Col, Button } from 'react-bootstrap'
import { useAuth } from '../../../contexts/AuthContext';
import axios from 'axios';




function AddChapter(props) {
    const auth = useAuth();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [chapter, setChapter] = useState({
        title: '',
        summary: '',
        body: '',
        file: null,
        upload: false,
    })
    
    const handleChange = (event) => {
        event.persist();
        console.log(event.target.type)
        setChapter((chapter) => ({
            ...chapter,
            [event.target.name]: event.target.value,
        }));
    }
    
    const handleUpload = (event) => {
        event.persist();
        console.log(event.target.type)
        setChapter((chapter) => ({
            ...chapter,
            [event.target.name]: event.target.files[0]
        }))
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        chapter.file ? chapter.upload = true : chapter.upload = false
        console.log(chapter)
        console.log(props.currentProject)
        // chapter.upload && postUploadChapter(chapter, props.currentProject.name, auth.currentUser.uid, props.book.title)
        postChapter(chapter, props.currentProject.name, auth.currentUser.uid, props.book.title)
    }

    const postChapter = async (chapter, projectID, userID, bookID) => {
        var formData = new FormData()

        formData.append('title', chapter.title)
        formData.append('summary', chapter.summary)
        formData.append('body', chapter.body)
        chapter.upload && formData.append('file', chapter.file)
        formData.append('upload', chapter.upload)

        console.log(formData)
        await axios.post('http://127.0.0.1:8000/' + userID + '/project/' + projectID + '/book/' + bookID + '/chapter/list', formData, {headers: {'Content-Type' : 'multipart/form-data'}})
        .then( res => {
            console.log(res)
        }).catch(err => {
            console.log("Error in postChapter: " + err);
        });
    }


    
    return (
        <>
            <input className='btn btn-sm btn-outline-dark p-1' type="button" onClick={handleShow} value="New Chapter" 
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
                        Add Chapter:
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
                            <Form.Group as={Col} controlId='summary'>
                                    <Form.Label>Summary:</Form.Label>
                                    <Form.Control as='textarea' rows={5} className='form-control shadow m-1' name='summary' type='text' placeholder='Summary...' onChange={handleChange} />
                            </Form.Group>
                            <Form.Group as={Row} controlId='body'>
                                    <Form.Label className='mt-1'>Body:</Form.Label>
                                    <Form.Control as='textarea' rows={10} className='form-control shadow m-1' name='body' type='text' placeholder='Body...' onChange={handleChange} />
                            </Form.Group>
                            <Form.Group as={Row} controlId='file'>
                                    <Form.Label className='mt-1'>Upload Document:</Form.Label>
                                    <Form.Control className='form-control shadow m-1' name='file' type='file' onChange={handleUpload} />
                            </Form.Group>
                        </Row>
                        <Button variant="secondary" className='shadow mt-4 m-1' type="submit"  
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

export default AddChapter;