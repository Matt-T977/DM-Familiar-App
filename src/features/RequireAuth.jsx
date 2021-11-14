import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useLocation, Navigate } from 'react-router';

export default function RequireAuth({ children: Children, ...rest }) {
     let auth = useAuth();
     let location = useLocation();
     console.log(auth)


     if (!auth.currentUser) {
        return (
        <Navigate to='/login' state={{location}} /> )
     }

     return Children
 }