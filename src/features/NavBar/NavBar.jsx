import React from 'react';
import { Link } from "react-router-dom";


const NavBar = (props) => {
    return (
        <div className='row'>
            <div>
                <div className='h1'>DM's Familiar</div>
            </div>
            <div>
                <nav>
                    <ul>
                        <li><Link to = '/' className = 'nav-link'>Home</Link></li>
                        {props.user &&
                            <React.Fragment>
                                <li>
                                    <Link to = '/projects' className = 'nav-link'>Projects</Link>
                                </li>
                                <li>
                                    <a onClick = {props.logoutUser} className = 'nav-link'>Log Out</a>
                                </li>
                            </React.Fragment>
                        }
                    </ul>
                </nav>
            </div>
        </div>
     );
}

export default NavBar;