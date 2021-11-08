import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router';
import { Counter } from './features/counter/Counter';
import BGImage from './Static/BGImage.jpg'
import SignUp from './features/SignUp/SignUp'
import AuthProvider from './contexts/AuthContext';
import Dashboard from './features/Dashboard/Dashboard';
import Login from './features/Login/Login';
import NavBar from './features/NavBar/NavBar';
import ProjectCreator from './features/ProjectCreator/ProjectCreator';


// var firebase = require('firebase');
// var firebaseui = require('firebaseui');
// var ui = new firebaseui.auth.AuthUI(firebase.auth());



function App() {


  return (
    <AuthProvider>
      <div className="App" style={{
            backgroundImage: `url(${BGImage})`,
            backgroundColor: '#2D2424',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
        }} >
        <NavBar />
        <Container className='w-100' >
          <Routes>
            <Route path = '/' exact element = {<Dashboard /> } />
            <Route path = '/signup' element = {<SignUp /> } />
            <Route path = '/login' element = {<Login/> }/>
            {/* <Route path = '/projects' /> */}
            <Route path = '/create-project' element = {<ProjectCreator />}/>
            {/* <Redirect to = '/not-found' /> */}
          </Routes>
        </Container>
      </div>
    </AuthProvider>
  );
}

export default App;
