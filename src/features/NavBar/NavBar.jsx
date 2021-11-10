import React from 'react';
import { Link } from "react-router-dom";
import { useAuth } from '../../contexts/AuthContext';
import { Nav } from 'react-bootstrap';


const NavBar = (props) => {
    const { currentUser, logout } = useAuth()

    
    return (
        <div className='row header-style justify-content-end' style={{maxHeight: '45px' , backgroundColor: '#5C3D2E'}}>
            <div className='col-2'></div>
            <div className='col text-center'>
                <div className='h2' style={{color: '#B85C38',}}>DM's Familiar</div>
            </div>
            <div className='col-2 align-self-middle'>
                <Nav >
                    <ul className='nav justify-content-end'>
                        {currentUser &&
                            <React.Fragment>
                                <li>
                                    <Link to = '/' className = 'nav-link' style={{color: '#B85C38',}}>Projects</Link>
                                </li>
                                <li>
                                    <Link to = '/create-project' className = 'nav-link' style={{color: '#B85C38',}}>New Project</Link>
                                </li>
                                <li>
                                    <Link to = '/login' onClick = {logout} className = 'nav-link' style={{color: '#B85C38'}}>Log Out</Link>
                                </li>
                            </React.Fragment>
                        }
                        {!currentUser &&
                            <React.Fragment>
                                <li>
                                    <Link to = '/login' className = 'nav-link' style={{color: '#B85C38',}}>Log In</Link>
                                </li>
                                <li>
                                    <Link to = '/signup' className = 'nav-link' style={{color: '#B85C38',}}>Sign Up</Link>
                                </li>
                            </React.Fragment>
                        }
                    </ul>
                </Nav>
            </div>
        </div>
     );
}

export default NavBar;