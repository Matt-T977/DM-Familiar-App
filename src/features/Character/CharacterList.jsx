import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Col, Container, Row, ListGroup } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';
import NewCharacter from './NewCharacter/NewCharacter';
import EditCharacter from './EditCharacter/EditCharacter';


function CharacterList(props) {
    const auth = useAuth()
    const [characterList, setCharacterList] = useState({characters : []})
    const [currentCharacter, setCurrentCharacter] = useState({character:{}})

    const getCharacterList = async (userId, projectId) => {
        await axios.get('http://127.0.0.1:8000/' + userId + '/project/' + projectId + '/character/list')
        .then(res => {
            setCharacterList({characters: res.data})
        }).catch(err => {console.log(err);})
    }

    const getCurrentCharacter = async (userId, projectId, characterId) => {
        await axios.get('http://127.0.0.1:8000/' + userId + '/project/' + projectId + '/character/' + characterId)
        .then(res => {
            setCurrentCharacter({character:res.data})
        }).catch(err => {console.log(err);})
    }

    useEffect(()=> {
        getCharacterList(auth.currentUser.uid, props.currentProject.name)
        console.log("Characters loaded")
        console.log({characterList})
    },[]);



    return ( 
        <Container className='d-flex align-items-start justify-content-center mt-3' style={{minHeight: '100vh'}}>
            <Row className='w-100 overflow-auto' 
                style = {{
                    maxWidth: '50vw',
                    minHeight: '30vh',
                    backgroundColor: '#2D2424',
                    borderStyle: 'solid',
                    borderColor: '#5C3D2E',
                    borderWidth: '5px',
                    borderRadius: '1rem',
                    }}>
                <Col lg={3} className='mb-auto mt-3' >
                    <ListGroup >
                        {characterList.characters.map((character) => (
                            <ListGroup.Item action variant='warning' onClick={() => getCurrentCharacter(auth.currentUser.uid, props.currentProject.name, character.name)}
                            style={{
                                fontSize: '1.25rem',
                                fontWeight: '600',
                                fontFamily: ('EB Garamond', 'serif'),
                                fontStyle: 'italic',
                                color: '#B85C38',
                            }}>
                                <p>{character.name}</p>
                            </ListGroup.Item>
                        ))}

                    </ListGroup>
                </Col>
                <Col lg={9}>
                    <EditCharacter currentProject={props.currentProject} currentCharacter={currentCharacter.character}/>
                </Col>
            </Row>
        </Container>
     );
}

export default CharacterList;