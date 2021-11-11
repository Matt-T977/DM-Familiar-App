import React from 'react';
import { Link } from "react-router-dom";
import { useAuth } from '../../contexts/AuthContext';
import { Navbar, Nav, Container } from 'react-bootstrap';

// 2D2424
// 5C3D2E
// B85C38
// E0C097
const NavBar = (props) => {
    const { currentUser, logout } = useAuth()

    
    return (
        <Navbar fixed='sticky' expand='lg' style={{maxHeight: '45px' , backgroundColor: '#2D2424', borderBottom: 'solid', borderColor: '#5C3D2E'}}>
            <Container fluid>
                <Navbar.Brand href='/' style={{color: '#B85C38',}}>DM's Familiar</Navbar.Brand>
            {/* <div className='col-2'></div>
            <div className='col text-center'>
                <div className='h2' style={{color: '#B85C38',}}>DM's Familiar</div>
            </div> */}
            {/* <div className='col-2 align-self-middle'> */}
                <Nav >
                    {currentUser &&
                        <>
                            <Nav.Link>
                                <Link to = '/' className = 'nav-link' style={{color: '#B85C38',}}>Projects</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to = '/create-project' className = 'nav-link' style={{color: '#B85C38',}}>New Project</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to = '/login' onClick = {logout} className = 'nav-link' style={{color: '#B85C38'}}>Log Out</Link>
                            </Nav.Link>
                        </>
                    }
                    {!currentUser &&
                        <>
                            <Nav.Link>
                                <Link to = '/login' className = 'nav-link' style={{color: '#B85C38',}}>Log In</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to = '/signup' className = 'nav-link' style={{color: '#B85C38',}}>Sign Up</Link>
                            </Nav.Link>
                        </>
                    }
                </Nav>
            </Container>
        </Navbar>
    );
}


export default NavBar;