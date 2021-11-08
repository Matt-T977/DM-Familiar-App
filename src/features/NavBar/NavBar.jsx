import React from 'react';
import './NavBar.css'
import { Link } from "react-router-dom";
import { useAuth } from '../../contexts/AuthContext';
import { Nav } from 'react-bootstrap';


const NavBar = (props) => {
    const { currentUser, logout } = useAuth()

    
    return (
        <div className='row header-style'>
            <div>
                <div className='h1'>DM's Familiar</div>
            </div>
            <div>
                <Nav>
                    <ul>
                        {/* {currentUser &&
                            <React.Fragment>
                                <li>
                                    <Link to = '/' className = 'nav-link'>Home</Link>
                                </li>
                                <li>
                                    <Link to = '/projects' className = 'nav-link'>Projects</Link>
                                </li>
                                <li>
                                    <a onClick = {logout} className = 'nav-link'>Log Out</a>
                                </li>
                            </React.Fragment>
                        } */}
                        {/* {!currentUser &&
                            <React.Fragment>
                                <li>
                                    <Link to = '/login' className = 'nav-link'>Log In</Link>
                                </li>
                                <li>
                                    <Link to = '/signup' className = 'nav-link'>Sign Up</Link>
                                </li>
                            </React.Fragment>
                        } */}
                    </ul>
                </Nav>
            </div>
        </div>
     );
}

export default NavBar;