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
                    <Card>
                        <Card.Body>
                            <h2 className='text-center mb-4'>Sign Up</h2>
                            {error && <Alert variant='danger'>{error}</Alert>}
                            <Form onSubmit = {handleSubmit}>
                                <Form.Group id='email'>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type = 'email' ref = {emailRef} required />
                                </Form.Group>
                                <Form.Group id='password'>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type = 'password' ref = {passwordRef} required />
                                </Form.Group>
                                <Form.Group id='password-confirm'>
                                    <Form.Label>Password Confirm</Form.Label>
                                    <Form.Control type = 'password' ref = {passwordConfirmRef} required />
                                </Form.Group>
                                <Button disabled={loading} className='w-100 mt-4' type='submit'>Sign Up</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                    <div className = "w-100 text-center mt-2">
                        Already have an account? <Link to='/login'>Log In</Link>
                    </div>
                </>
            </div>
        </Container>
     );
}

export default SignUp;