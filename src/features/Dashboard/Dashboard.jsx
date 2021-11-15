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
    const [characterToggle, setCharacterToggle] = useState(true)
    const [documentToggle, setDocumentToggle] = useState(true)
    const [referenceToggle, setReferenceToggle] = useState(true)
    const [locationToggle, setLocationToggle] = useState(true)
    const [error, setError] = useState("")

    const showCharacter = () => setCharacterToggle(state => !state)
    const showDocument = () => setDocumentToggle(state => !state)
    const showReference = () => setReferenceToggle(state => !state)
    const showLocation = () => setLocationToggle(state => !state)

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
                            <Button className='w-100 text-start' onClick={showCharacter}
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
                            <Button className='w-100 text-start' onClick={showDocument}
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
                            <Button className='w-100 text-start' onClick={showReference}
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
                            <Button className='w-100 text-start' onClick={showLocation}
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
                    <div className='h2' 
                    style={{
                        color: '#B85C38',
                        textShadow: '2.5px 2.5px 6px'
                    }}>{props.currentProject.name}</div>
                </Col>


                <Col md={10}>
                    <Row>
                        {documentToggle &&
                            <Col md={5}>
                                <Book 
                                    currentProject={props.currentProject} 
                                    getBookList={props.getBookList} 
                                    getChapterList={props.getChapterList} 
                                    books={props.books} chapters={props.chapters}/>
                            </Col>
                        }
                        {characterToggle &&
                            <Col>
                                <CharacterList  
                                    currentProject={props.currentProject} 
                                    getCharacterList={props.getCharacterList} 
                                    getCurrentCharacter={props.getCurrentCharacter} 
                                    characters={props.characters} currentCharacter={props.currentCharacter}/>
                            </Col>
                        }
                    </Row>
                </Col>
            </Row>
        </Container>
     );
}

export default Dashboard;