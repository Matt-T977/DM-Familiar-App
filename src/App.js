import React, { useState } from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router';
import axios from 'axios';
import BGImage from './Static/BGImage.jpg'
import SignUp from './features/SignUp/SignUp'
import AuthProvider, { useAuth } from './contexts/AuthContext';
import Dashboard from './features/Dashboard/Dashboard';
import Login from './features/Login/Login';
import NavBar from './features/NavBar/NavBar';
import ProjectCreator from './features/ProjectCreator/ProjectCreator';
import Projects from './features/Projects/Projects';


// var firebase = require('firebase');
// var firebaseui = require('firebaseui');
// var ui = new firebaseui.auth.AuthUI(firebase.auth());



function App() {

  const auth = useAuth()
  const [projectList, setProjectList] = useState({projects : []})
  const [currentProject, setCurrentProject] = useState({currentProject : {}})


  const getProjectList = async (userID) => {
    let response = await axios.get('http://127.0.0.1:8000/' + userID + '/project/');
    setProjectList({projects: response.data,})};
    console.log(projectList)

  const getCurrentProject = async (ProjectID, userID) => {
    let response = await axios.get('http://127.0.0.1:8000/' + userID + '/project/' + ProjectID);
    setCurrentProject({currentProject : response.data})};
    console.log(currentProject)

  const deleteCurrentProject = async (ProjectID, userID) => {
    await axios.delete('http://127.0.0.1:8000/' + userID + '/project/' + ProjectID)
    .then(response => {
      getProjectList(auth.currentUser.uid);
    }).catch(err => {console.log(err);})
  }

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
        <Container className='w-100' style={{minWidth: '100vw'}} >
          <Routes>
            <Route path = '/' exact element = {<Projects getProjectList={getProjectList} projects={projectList.projects} getCurrentProject={getCurrentProject} deleteCurrentProject={deleteCurrentProject}/>} />
            <Route path = '/signup' element = {<SignUp /> } />
            <Route path = '/login' element = {<Login /> } />
            <Route path = '/dashboard' element = {<Dashboard currentProject={currentProject.currentProject}/>} />
            <Route path = '/create-project' element = {<ProjectCreator getCurrentProject={getCurrentProject}/>} />
            {/* <Redirect to = '/not-found' /> */}
          </Routes>
        </Container>
      </div>
    </AuthProvider>
  );
}

export default App;
