import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'
import characterStock from '../../Static/characterStock.jpg'
import ScrollWall from '../../Static/ScrollWall.jpg'
import stockReference from '../../Static/stockReference.jpg'
import locationStock from '../../Static/locationStock.jpg'
import { useAuth } from '../../contexts/AuthContext';
import Book from '../Book/Book';
import CharacterList from '../Character/CharacterList';


function Dashboard(props) {

    const auth = useAuth()
    const [error, setError] = useState("")


    return ( 
        <Container className='d-flex align-items-center justify-content-center' style={{minHeight: '100vh'}}>
            <Row className='w-100' style={{minWidth:'100vw'}}>
                <Col md={2}
                style={{
                    height: '80vh',
                    backgroundColor: '#E0C097',
                    borderStyle: 'solid',
                    borderColor: '#5C3D2E',
                    borderWidth: '5px',
                    // borderRadius: '1rem',
                }}>
                    {props.currentProject.include_char_sheet &&
                        <Container className='mt-2'>
                            <img className='shadow w-100' src={characterStock} alt='character stock'
                            style={{
                                borderRadius: '1rem',
                                height: '15vh',
                                objectFit: 'cover',
                            }}/>
                            <Button className='w-100 text-start'
                                style={{
                                    backgroundColor: '#B85C38',
                                    color: '#E0C097',
                                    fontStyle: 'italic',
                                    fontSize: '1.25rem',
                                    position: 'relative',
                                    bottom: '4rem',
                                    opacity: '.8'
                                }}>
                                    Character Sheets
                            </Button>
                        </Container>
                    }
                    {props.currentProject.include_text_doc &&
                        <Container >
                            <img className='shadow w-100' src={ScrollWall} alt='character stock'
                            style={{
                                borderRadius: '1rem',
                                height: '15vh',
                                objectFit: 'cover',
                            }}/>
                            <Button className='w-100 text-start'
                                style={{
                                    backgroundColor: '#B85C38',
                                    color: '#E0C097',
                                    fontStyle: 'italic',
                                    fontSize: '1.25rem',
                                    position: 'relative',
                                    bottom: '4rem',
                                    opacity: '.8'
                                }}>
                                    Documents
                            </Button>
                        </Container>
                    }
                    {props.currentProject.include_static_assets &&
                        <Container >
                            <img className='shadow w-100' src={stockReference} alt='character stock'
                            style={{
                                borderRadius: '1rem',
                                height: '15vh',
                                objectFit: 'cover',
                            }}/>
                            <Button className='w-100 text-start'
                                style={{
                                    backgroundColor: '#B85C38',
                                    color: '#E0C097',
                                    fontStyle: 'italic',
                                    fontSize: '1.25rem',
                                    position: 'relative',
                                    bottom: '4rem',
                                    opacity: '.8'
                                }}>
                                    References
                            </Button>
                        </Container>
                    }
                    {props.currentProject.include_location &&
                        <Container >
                            <img className='shadow w-100' src={locationStock} alt='character stock'
                            style={{
                                borderRadius: '1rem',
                                height: '15vh',
                                objectFit: 'cover',
                            }}/>
                            <Button className='w-100 text-start'
                                style={{
                                    backgroundColor: '#B85C38',
                                    color: '#E0C097',
                                    fontStyle: 'italic',
                                    fontSize: '1.25rem',
                                    position: 'relative',
                                    bottom: '4rem',
                                    opacity: '.8'
                                }}>
                                    Locations
                            </Button>
                        </Container>
                    }
                    {props.currentProject.name}
                </Col>



                <Col md={10}
                style={{
                    maxWidth: '100vw',
                    maxHeight: '100vh'
                }}>
                    <Row>
                        <Col>
                            <Book currentProject={props.currentProject}/>
                        </Col>
                        <Col>
                            <CharacterList  currentProject={props.currentProject} getCharacterList={props.getCharacterList} getCurrentCharacter={props.getCurrentCharacter} characters={props.characters} currentCharacter={props.currentCharacter}/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
     );
}

export default Dashboard;