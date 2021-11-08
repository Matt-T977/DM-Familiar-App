import React from 'react';
import { Container } from 'react-bootstrap';
import { Redirect, Routes, Route } from 'react-router';
import { Counter } from './features/counter/Counter';
import SignUp from './features/SignUp/SignUp'
import './App.css';
import AuthProvider from './contexts/AuthContext';
import Dashboard from './features/Dashboard/Dashboard';
import Login from './features/Login/Login';
import PrivateRoute from './PrivateRoute';


// var firebase = require('firebase');
// var firebaseui = require('firebaseui');
// var ui = new firebaseui.auth.AuthUI(firebase.auth());



function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Container >
          <Routes>
            <PrivateRoute exact path = '/' element = {<Dashboard /> } />
            <Route path = '/signup' element = {<SignUp /> } />
            <Route path = '/login' element = {<Login/> }/>
            {/* <Route path = '/projects' /> */}
            {/* <Route path = '/create-project' /> */}
            {/* <Redirect to = '/not-found' /> */}
          </Routes>
        </Container>
      </div>
    </AuthProvider>
  );
}

export default App;
