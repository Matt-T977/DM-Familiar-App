import React, { useState } from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router';
import axios from 'axios';
import BGImage from './Static/BGImage.jpg'
import SignUp from './features/SignUp/SignUp'
import AuthProvider from './contexts/AuthContext';
import Dashboard from './features/Dashboard/Dashboard';
import Login from './features/Login/Login';
import NavBar from './features/NavBar/NavBar';
import ProjectCreator from './features/ProjectCreator/ProjectCreator';
import Projects from './features/Projects/Projects';
import RequireAuth from './features/RequireAuth';




function App() {

  const [projectList, setProjectList] = useState({projects : []})
  const [currentProject, setCurrentProject] = useState({currentProject : {}})
  const [characterList, setCharacterList] = useState({characters : []})
  const [currentCharacter, setCurrentCharacter] = useState({character:{}})
  const [bookList, setBookList] = useState({books : []})
  const [chapterList, setChapterList] = useState({chapters : []})



  const getProjectList = async (userId) => {
    let response = await axios.get('http://127.0.0.1:8000/' + userId + '/project/');
    setProjectList({projects: response.data,})};
    console.log(projectList)

  const getCurrentProject = async (ProjectID, userID) => {
    let response = await axios.get('http://127.0.0.1:8000/' + userID + '/project/' + ProjectID);
    setCurrentProject({currentProject : response.data})};
    console.log(currentProject)

  const getCharacterList = async (userId, projectId) => {
    await axios.get('http://127.0.0.1:8000/' + userId + '/project/' + projectId + '/character/list')
    .then(res => {
        console.log(res)
        setCharacterList({characters : res.data})
    }).catch(err => {console.log(err);})
  }

  const getCurrentCharacter = async (userId, projectId, characterId) => {
    await axios.get('http://127.0.0.1:8000/' + userId + '/project/' + projectId + '/character/' + characterId)
    .then(res => {
        setCurrentCharacter({character:res.data})
    }).catch(err => {console.log(err);})
  }

  const getBookList = async (ProjectID, userID) => {
    await axios.get('http://127.0.0.1:8000/' + userID + '/project/' + ProjectID + '/book/list')
    .then(response => setBookList({books : response.data}))};

  const getChapterList = async (projectID, userID, BookID) => {
    await axios.get('http://127.0.0.1:8000/' + userID + '/project/' + projectID + '/book/' + BookID + '/chapter/list')
    .then(response => setChapterList({chapters : response.data}))};


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
            <Route path = '/' exact 
                  element = { <RequireAuth> 
                                <Projects 
                                  getProjectList={getProjectList} 
                                  projects={projectList.projects} 
                                  getCurrentProject={getCurrentProject} 
                                  getCharacterList={getCharacterList}
                                  getBookList={getBookList}/> 
                              </RequireAuth>} />
            <Route path = '/signup' element = {<SignUp /> } />
            <Route path = '/login' element = {<Login /> } />
            <Route path = '/dashboard' 
              element = { <RequireAuth>
                            <Dashboard 
                              currentProject={currentProject.currentProject} 
                              getCharacterList={getCharacterList} 
                              getCurrentCharacter={getCurrentCharacter} 
                              characters={characterList.characters} 
                              currentCharacter={currentCharacter.character}
                              getBookList={getBookList}
                              getChapterList={getChapterList}
                              books={bookList.books}
                              chapters={chapterList.chapters}/>
                          </RequireAuth>} />
            
              <Route path = '/create-project' 
              element = { <RequireAuth>
                            <ProjectCreator 
                              getCurrentProject={getCurrentProject}/>
                          </RequireAuth>} />
            
            {/* <Redirect to = '/not-found' /> */}
          </Routes>
        </Container>
      </div>
    </AuthProvider>
  );
}

export default App;
