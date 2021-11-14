import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert, Container } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';


function SignUp() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !==
            passwordConfirmRef.current.value) {
                return setError('Your passwords do not match.')
            }

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            navigate('/')
        } catch {
            setError('Failed to create an account.')
        }

        setLoading(false)
    }


    return ( 
        <Container className='d-flex align-items-center justify-content-center' style = {{minHeight: '100vh'}}>
            <div  className='w-100' style = {{maxWidth: '400px'}}>
                <>
                    <Card
                    style={{
                        backgroundColor: '#E0C097',
                        color: '#B85C38',
                        borderStyle: 'solid',
                        borderColor: '#5C3D2E',
                        borderWidth: '5px',
                        borderRadius: '1rem',
                        textShadow: '2px 2px 6px'
                            }}>
                        <Card.Body>
                            <h2 className='text-center mb-4'>Sign Up</h2>
                            {error && <Alert variant='danger'>{error}</Alert>}
                            <Form onSubmit = {handleSubmit}>
                                <Form.Group id='email'>
                                    <Form.Label className='h5'>Email</Form.Label>
                                    <Form.Control className='shadow' type = 'email' ref = {emailRef} required />
                                </Form.Group>
                                <Form.Group id='password'>
                                    <Form.Label className='h5 mt-2'>Password</Form.Label>
                                    <Form.Control className='shadow' type = 'password' ref = {passwordRef} required />
                                </Form.Group>
                                <Form.Group id='password-confirm'>
                                    <Form.Label className='h5 mt-2'>Password Confirm</Form.Label>
                                    <Form.Control className='shadow' type = 'password' ref = {passwordConfirmRef} required />
                                </Form.Group>
                                <Button disabled={loading} className='w-100 mt-4 shadow' variant='success' type='submit' style={{fontFamily: ('EB Garamond', 'serif'), fontStyle: 'italic',}}>Sign Up</Button>
                            </Form>
                        <div className = "w-100 text-center mt-2">
                            Already have an account? <Link to='/login'>Log In</Link>
                        </div>
                        </Card.Body>
                    </Card>
                </>
            </div>
        </Container>
     );
}

export default SignUp;