import React, { useState } from 'react';
import { Col, Container, Row, ListGroup } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';
import NewCharacter from './NewCharacter/NewCharacter';
import EditCharacter from './EditCharacter/EditCharacter';


function CharacterList(props) {
    const auth = useAuth()
    const [isCharacterSelected, setIsCharacterSelected] = useState(false)

    const toggle = () => setIsCharacterSelected(state => !state)

    const handleClick = (userId, ProjectId, CharacterId) => {
        props.getCurrentCharacter(userId, ProjectId, CharacterId)
        toggle()
        console.log(props.currentCharacter.name)
        console.log(isCharacterSelected)
    }


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
                        {props.characters.map((character) => (
                            <ListGroup.Item action variant='warning' onClick={() => handleClick(auth.currentUser.uid, props.currentProject.name, character.name)}
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
                    {!isCharacterSelected &&
                        <NewCharacter currentProject={props.currentProject} getCharacterList={props.getCharacterList}/>
                    }
                    {isCharacterSelected &&
                        <EditCharacter currentProject={props.currentProject} currentCharacter={props.currentCharacter} getCharacterList={props.getCharacterList}/>
                    }
                </Col>
            </Row>
        </Container>
     );
}

export default CharacterList;