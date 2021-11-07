import React from 'react';
import { Container } from 'react-bootstrap';
import { Redirect, Routes, Route } from 'react-router';
import { Counter } from './features/counter/Counter';
import SignUp from './features/SignUp/SignUp'
import './App.css';


// var firebase = require('firebase');
// var firebaseui = require('firebaseui');
// var ui = new firebaseui.auth.AuthUI(firebase.auth());



function App() {
  return (
    <div className="App">
      <Container className='d-flex align-items-center justify-content-center' style = {{minHeight: '100vh'}}>
        <div className='w-100' style = {{maxWidth: '400px'}}>
          <SignUp />
        </div>
      </Container>
        {/* <Routes>
          <Route path = '/' exact />
          <Route path = '/signup' element = {SignUp} />
          <Route path = '/login' />
          <Route path = '/projects' />
          <Route path = '/create-project' />
          <Redirect to = '/not-found' />
        </Routes> */}
    </div>
  );
}

export default App;
