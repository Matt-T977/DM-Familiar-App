import React from 'react';
import { Route, Routes, useNavigate } from 'react-router';
import { useAuth } from '../../contexts/AuthContext';


function AuthRoute( { component: Component, ...rest } ) {
    const { currentUser } = useAuth()
    const navigate = useNavigate
    return ( 
        <Routes>
            <Route
                {...rest}
                render={props =>{
                    currentUser ? <Component {...props} /> : navigate('/login')
                }}
            />
        </Routes>
     );
}

export default AuthRoute;