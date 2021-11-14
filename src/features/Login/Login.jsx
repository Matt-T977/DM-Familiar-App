import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert, Container } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';


function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login, signInWithGoogle } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()


        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            navigate('/')
        } catch {
            setError('Failed to sign in.')
        }

        setLoading(false)
    }

    async function handleClick (e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await signInWithGoogle()
            navigate('/')
        } catch {
            setError('Failed to sign in.')
        }
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
                            <h2 className='text-center mb-4'>Log In</h2>
                            {error && <Alert variant='danger'>{error}</Alert>}
                            <Form onSubmit = {handleSubmit}>
                                <Form.Group id='email'>
                                    <Form.Label className='h5'>Email</Form.Label>
                                    <Form.Control className='shadow mb-2' type = 'email' ref = {emailRef} required />
                                </Form.Group>
                                <Form.Group id='password'>
                                    <Form.Label className='h5'>Password</Form.Label>
                                    <Form.Control className='shadow' type = 'password' ref = {passwordRef} required />
                                </Form.Group>
                                <Button disabled={loading} className='w-100 mt-4 shadow' variant='success' type='submit' style={{fontFamily: ('EB Garamond', 'serif'), fontStyle: 'italic',}}>Log In</Button>
                                <Button disabled={loading} className='w-100 mt-4 shadow' variant='danger' onClick={handleClick} style={{fontFamily: ('EB Garamond', 'serif'), fontStyle: 'italic',}}>Google Account?</Button>
                            </Form>
                            <div className = "w-100 text-center mt-2">
                                Need an account? <Link to='/signup'>Sign Up</Link>
                            </div>
                        </Card.Body>
                    </Card>
                </>
            </div>
        </Container>
     );
}

export default Login;