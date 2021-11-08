import React from 'react';
import './NavBar.css'
import { Link } from "react-router-dom";
import { useAuth } from '../../contexts/AuthContext';
import { Nav } from 'react-bootstrap';


const NavBar = (props) => {
    const { currentUser, logout } = useAuth()

    
    return (
        <div className='row header-style justify-content-end' style={{maxHeight: '45px'}}>
            <div className='col-2'></div>
            <div className='col'>
                <div className='h2'>DM's Familiar</div>
            </div>
            <div className='col-2 align-self-middle'>
                <Nav>
                    <ul className='nav justify-content-end'>
                        {currentUser &&
                            <React.Fragment>
                                <li>
                                    <Link to = '/' className = 'nav-link'>Home</Link>
                                </li>
                                <li>
                                    <Link to = '/projects' className = 'nav-link'>Projects</Link>
                                </li>
                                <li>
                                    <Link to = '/login' onClick = {logout} className = 'nav-link'>Log Out</Link>
                                </li>
                            </React.Fragment>
                        }
                        {!currentUser &&
                            <React.Fragment>
                                <li>
                                    <Link to = '/login' className = 'nav-link'>Log In</Link>
                                </li>
                                <li>
                                    <Link to = '/signup' className = 'nav-link'>Sign Up</Link>
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