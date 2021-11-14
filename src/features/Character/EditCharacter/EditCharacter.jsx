import React, { useState } from 'react';
import { useAuth } from '../../../contexts/AuthContext';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import axios from 'axios';


function EditCharacter(props) {
    const auth = useAuth()
    const[character, setCharacter] = useState({
        is_player_character: false,
        player_name: '',
        name: props.currentCharacter.name,
        character_class: props.currentCharacter.character_class,
        level: props.currentCharacter.level,
        race: props.currentCharacter.race,
        background: props.currentCharacter.background,
        alignment: props.currentCharacter.alignment,

        strength: props.currentCharacter.strength,
        dexterity: props.currentCharacter.dexterity,
        constitution: props.currentCharacter.constitution,
        intelligence: props.currentCharacter.intelligence,
        wisdom: props.currentCharacter.wisdom,
        charisma: props.currentCharacter.charisma,

        health: props.currentCharacter.health,
        temp_hp: props.currentCharacter.temp_hp,
        armor_class: props.currentCharacter.armor_class,
        initiative: props.currentCharacter.initiative,
        speed: props.currentCharacter.speed,
        proficiency_bonus: props.currentCharacter.proficiency_bonus,
        passive_perception: props.currentCharacter.passive_perception,
        passive_investigation: props.currentCharacter.passive_investigation,
        death_success: props.currentCharacter.death_success,
        death_fail: props.currentCharacter.death_fail,

        acrobatics: props.currentCharacter.acrobatics,
        animal_handling: props.currentCharacter.animal_handling,
        arcana: props.currentCharacter.arcana,
        athletics: props.currentCharacter.athletics,
        deception: props.currentCharacter.deception,
        history: props.currentCharacter.history,
        insight: props.currentCharacter.insight,
        intimidation: props.currentCharacter.intimidation,
        investigation: props.currentCharacter.investigation,
        medicine: props.currentCharacter.medicine,
        nature: props.currentCharacter.nature,
        perception: props.currentCharacter.perception,
        performance: props.currentCharacter.performance,
        persuasion: props.currentCharacter.persuasion,
        religion: props.currentCharacter.religion,
        sleight_of_hand: props.currentCharacter.sleight_of_hand,
        stealth: props.currentCharacter.stealth,
        survival: props.currentCharacter.survival,

        traits: props.currentCharacter.traits,
        ideals: props.currentCharacter.ideals,
        bonds: props.currentCharacter.bonds,
        flaws: props.currentCharacter.flaws,

    })

    const handleCheck = (e) => {
        e.persist();
        if (e.target.checked) {
            setCharacter(currentState =>({
                ...currentState,
                [e.target.name]: true,
            }))
        } else {
            setCharacter(currentState =>({
                ...currentState,
                [e.target.name]: false,
            }))
        }
    }

    const handleChange = (e) => {
        e.persist();

        setCharacter((project) => ({
            ...project,
            [e.target.name]: e.target.value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            console.log(character)
            postCharacter(character, props.currentProject.name, auth.currentUser.uid);
        } catch {
            console.log("No character created")
        }
    }

    const postCharacter = async (character, projectId, userId) => {
        await axios.post('http://127.0.0.1:8000/' + userId + '/project/' + projectId + '/character/list', character)
        .then(res => {
            props.getCharacterList(userId, projectId)
            console.log(res)
        }).catch(err => {
            console.log("Error in postCharacter: " + err);
        });
    }

    return ( 
        <Container className='d-flex align-items-center justify-content-center w-100 overflow-auto my-3' 
        style = {{
            minHeight: '60vh',
            maxHeight: '90vh',
            backgroundColor: '#E0C097',
            borderStyle: 'solid',
            borderColor: '#5C3D2E',
            borderWidth: '5px',
            borderRadius: '1rem',
            }}>
                <Form onSubmit={handleSubmit}>
                    <Row className='h3' style={{color: '#B85C38'}}>Character Sheet</Row>
                    <Row className='h5 pb-2 pt-1 shadow'
                        style={{
                            borderStyle: 'solid',
                            borderColor: '#5C3D2E',
                            borderRadius: '1rem',
                            color: '#B85C38'
                        }}>
                        <Col>
                            <Form.Label>Name</Form.Label>
                            <Form.Control name='name' value={character.name} placeholder='Character Name' onChange={handleChange} required/>
                            <Form.Label>Background</Form.Label>
                            <Form.Control name='background' value={character.background} placeholder='Background' onChange={handleChange} required/>
                        </Col>
                        <Col>
                            <Form.Label>Class</Form.Label>
                            <Form.Control name='character_class' value={character.character_class} placeholder='Class' onChange={handleChange}/>
                            <Form.Label>Level</Form.Label>
                            <Form.Control name='level' value={character.level} placeholder='Level' onChange={handleChange}/>
                        </Col>
                        <Col>
                            <Form.Label>Race</Form.Label>
                            <Form.Control name='race' value={character.race} placeholder='Race' onChange={handleChange} required/>
                            <Form.Label>Alignment</Form.Label>
                            <Form.Control name='alignment' value={character.alignment} placeholder='Alignment' onChange={handleChange}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6} >
                            <Row className='justify-content-center mb-2'>
                                <Col lg={5} className='text-end px-4 p-2 shadow mx-2 mb-auto'
                                style={{
                                    borderStyle: 'solid',
                                    borderColor: '#5C3D2E',
                                    borderRadius: '1rem',
                                    color: '#B85C38' 
                                }}>
                                    <Row className='h5'>Attributes</Row>
                                    <Row className='h6 p-2 shadow'
                                    style={{
                                        borderStyle: 'solid',
                                        borderColor: '#5C3D2E',
                                        borderRadius: '1rem',
                                        color: '#B85C38'
                                    }}>
                                        <Form.Label>Strength</Form.Label>
                                        <Form.Control name='strength' value={character.strength} placeholder='"18"' onChange={handleChange}/>
                                    </Row>
                                    <Row className='h6 p-2 shadow'
                                    style={{
                                        borderStyle: 'solid',
                                        borderColor: '#5C3D2E',
                                        borderRadius: '1rem',
                                        color: '#B85C38'
                                    }}>
                                        <Form.Label>Dexterity</Form.Label>
                                        <Form.Control name='dexterity' value={character.dexterity} placeholder='"16"' onChange={handleChange}/>
                                    </Row>
                                    <Row className='h6 p-2 shadow'
                                    style={{
                                        borderStyle: 'solid',
                                        borderColor: '#5C3D2E',
                                        borderRadius: '1rem',
                                        color: '#B85C38'
                                    }}>
                                        <Form.Label>Constitution</Form.Label>
                                        <Form.Control name='constitution' value={character.constitution} placeholder='"12"' onChange={handleChange}/>
                                    </Row>
                                    <Row className='h6 p-2 shadow'
                                    style={{
                                        borderStyle: 'solid',
                                        borderColor: '#5C3D2E',
                                        borderRadius: '1rem',
                                        color: '#B85C38'
                                    }}>
                                        <Form.Label>Intelligence</Form.Label>
                                        <Form.Control name='intelligence' value={character.intelligence} placeholder='"14"' onChange={handleChange}/>
                                    </Row>
                                    <Row className='h6 p-2 shadow'
                                    style={{
                                        borderStyle: 'solid',
                                        borderColor: '#5C3D2E',
                                        borderRadius: '1rem',
                                        color: '#B85C38'
                                    }}>
                                        <Form.Label>Wisdom</Form.Label>
                                        <Form.Control name='wisdom' value={character.wisdom} placeholder='"17"' onChange={handleChange}/>
                                    </Row>
                                    <Row className='h6 p-2 shadow'
                                    style={{
                                        borderStyle: 'solid',
                                        borderColor: '#5C3D2E',
                                        borderRadius: '1rem',
                                        color: '#B85C38'
                                    }}>
                                        <Form.Label>Charisma</Form.Label>
                                        <Form.Control name='charisma' value={character.charisma} placeholder='"13"' onChange={handleChange}/>
                                    </Row>
                                </Col>
                                <Col lg={5} className='text-end px-4 p-2 shadow mx-2 mb-auto'
                                style={{
                                    borderStyle: 'solid',
                                    borderColor: '#5C3D2E',
                                    borderRadius: '1rem',
                                    color: '#B85C38'
                                }}>
                                    <Row className='h5'>Skill Proficiencies</Row>
                                    <Row>
                                        <Form.Check type='checkbox' label='Acrobatics' name='acrobatics' checked={character.acrobatics} onChange={handleCheck}/>
                                    </Row>
                                    <Row>
                                        <Form.Check type='checkbox' label='Animal Handling' name='animal_handling' checked={character.animal_handling} onChange={handleCheck}/>
                                    </Row>
                                    <Row>
                                        <Form.Check type='checkbox' label='Arcana' name='arcana' checked={character.arcana} onChange={handleCheck}/>
                                    </Row>
                                    <Row>
                                        <Form.Check type='checkbox' label='Athletics' name='athletics' checked={character.athletics} onChange={handleCheck}/>
                                    </Row>
                                    <Row>
                                        <Form.Check type='checkbox' label='Deception' name='deception' checked={character.deception} onChange={handleCheck}/>
                                    </Row>
                                    <Row>
                                        <Form.Check type='checkbox' label='History' name='history' checked={character.history} onChange={handleCheck}/>
                                    </Row>
                                    <Row>
                                        <Form.Check type='checkbox' label='Insight' name='insight' checked={character.insight} onChange={handleCheck}/>
                                    </Row>
                                    <Row>
                                        <Form.Check type='checkbox' label='Intimidation' name='intimidation' checked={character.intimidation} onChange={handleCheck}/>
                                    </Row>
                                    <Row>
                                        <Form.Check type='checkbox' label='Investigation' name='investigation' checked={character.investigation} onChange={handleCheck}/>
                                    </Row>
                                    <Row>
                                        <Form.Check type='checkbox' label='Medicine' name='medicine' checked={character.medicine} onChange={handleCheck}/>
                                    </Row>
                                    <Row>
                                        <Form.Check type='checkbox' label='Nature' name='nature' checked={character.nature} onChange={handleCheck}/>
                                    </Row>
                                    <Row>
                                        <Form.Check type='checkbox' label='Perception' name='perception' checked={character.perception} onChange={handleCheck}/>
                                    </Row>
                                    <Row>
                                        <Form.Check type='checkbox' label='Performance' name='performance' checked={character.performance} onChange={handleCheck}/>
                                    </Row>
                                    <Row>
                                        <Form.Check type='checkbox' label='Persuasion' name='persuasion' checked={character.persuasion} onChange={handleCheck}/>
                                    </Row>
                                    <Row>
                                        <Form.Check type='checkbox' label='Religion' name='religion' checked={character.religion} onChange={handleCheck}/>
                                    </Row>
                                    <Row>
                                        <Form.Check type='checkbox' label='Sleight of Hand' name='sleight_of_hand' checked={character.sleight_of_hand} onChange={handleCheck}/>
                                    </Row>
                                    <Row>
                                        <Form.Check type='checkbox' label='Stealth' name='stealth' checked={character.stealth} onChange={handleCheck}/>
                                    </Row>
                                    <Row>
                                        <Form.Check type='checkbox' label='Survival' name='survival' checked={character.survival} onChange={handleCheck}/>
                                    </Row>
                                </Col>
                            </Row>
                            <Row className='align-items-center'>
                                <Row>
                                    <Col lg={5} className='h6 p-2 shadow mx-1'
                                        style={{
                                            borderStyle: 'solid',
                                            borderColor: '#5C3D2E',
                                            borderRadius: '1rem',
                                            color: '#B85C38'
                                        }}>
                                        <Form.Label>Passive Perception</Form.Label>
                                        <Form.Control name='passive_perception' value={character.passive_perception} placeholder='"15"' onChange={handleChange}/>
                                    </Col>
                                    <Col lg={5} className='h6 p-2 shadow mx-1'
                                        style={{
                                            borderStyle: 'solid',
                                            borderColor: '#5C3D2E',
                                            borderRadius: '1rem',
                                            color: '#B85C38'
                                        }}>
                                        <Form.Label>Passive Investigation</Form.Label>
                                        <Form.Control name='passive_investigation' value={character.passive_investigation} placeholder='"14"' onChange={handleChange}/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={6} className='h6 p-2 shadow mx-auto'
                                        style={{
                                            borderStyle: 'solid',
                                            borderColor: '#5C3D2E',
                                            borderRadius: '1rem',
                                            color: '#B85C38'
                                        }}>
                                        <Form.Label>Proficiency Bonus</Form.Label>
                                        <Form.Control name='proficiency_bonus' value={character.proficiency_bonus} placeholder='"2"' onChange={handleChange}/>
                                    </Col>
                                </Row>
                            </Row>
                        </Col>
                        <Col lg={6}>
                            <Row className='h5 p-2 shadow mx-2'
                                    style={{
                                        borderStyle: 'solid',
                                        borderColor: '#5C3D2E',
                                        borderRadius: '1rem',
                                        color: '#B85C38'
                                    }}>
                                <Col>
                                    <Form.Label>Health</Form.Label>
                                    <Form.Control name='health' value={character.health} placeholder='"24"' onChange={handleChange}/>
                                </Col>
                                <Col>
                                    <Form.Label>Temp HP</Form.Label>
                                    <Form.Control name='temp_hp' value={character.temp_hp} placeholder='"8"' onChange={handleChange}/>
                                </Col>
                            </Row>
                            <Row className='align-items-center'>
                                <Col className='h5 p-2 shadow mx-2'
                                    style={{
                                        borderStyle: 'solid',
                                        borderColor: '#5C3D2E',
                                        borderRadius: '1rem',
                                        color: '#B85C38'
                                    }}>
                                    <Form.Label>Armor Class</Form.Label>
                                    <Form.Control name='armor_class' value={character.armor_class} placeholder='"16"' onChange={handleChange}/>
                                </Col>
                                <Col className='h5 p-2 shadow mx-2'
                                    style={{
                                        borderStyle: 'solid',
                                        borderColor: '#5C3D2E',
                                        borderRadius: '1rem',
                                        color: '#B85C38'
                                    }}>
                                    <Form.Label>Initiative</Form.Label>
                                    <Form.Control name='initiative' value={character.initiative} placeholder='"3"' onChange={handleChange}/>
                                </Col>
                                <Col className='h5 p-2 shadow mx-2'
                                    style={{
                                        borderStyle: 'solid',
                                        borderColor: '#5C3D2E',
                                        borderRadius: '1rem',
                                        color: '#B85C38'
                                    }}>
                                    <Form.Label>Speed</Form.Label>
                                    <Form.Control name='speed' value={character.speed} placeholder='"30"' onChange={handleChange}/>
                                </Col>
                            </Row>
                            <Row className='h5 p-2 shadow mx-2'
                                    style={{
                                        borderStyle: 'solid',
                                        borderColor: '#5C3D2E',
                                        borderRadius: '1rem',
                                        color: '#B85C38'
                                    }}>
                                <Form.Label>Traits</Form.Label>
                                <Form.Control as='textarea' rows={3} name='traits' value={character.traits} placeholder='Character Traits' onChange={handleChange}/>
                            </Row>
                            <Row className='h5 p-2 shadow mx-2'
                                    style={{
                                        borderStyle: 'solid',
                                        borderColor: '#5C3D2E',
                                        borderRadius: '1rem',
                                        color: '#B85C38'
                                    }}>
                                <Form.Label>Ideals</Form.Label>
                                <Form.Control as='textarea' rows={3} name='ideals' value={character.ideals} placeholder='Character Ideals' onChange={handleChange}/>
                            </Row>
                            <Row className='h5 p-2 shadow mx-2'
                                    style={{
                                        borderStyle: 'solid',
                                        borderColor: '#5C3D2E',
                                        borderRadius: '1rem',
                                        color: '#B85C38'
                                    }}>
                                <Form.Label>Bonds</Form.Label>
                                <Form.Control as='textarea' rows={3} name='bonds' value={character.bonds} placeholder='Character Bonds' onChange={handleChange}/>
                            </Row>
                            <Row className='h5 p-2 shadow mx-2'
                                    style={{
                                        borderStyle: 'solid',
                                        borderColor: '#5C3D2E',
                                        borderRadius: '1rem',
                                        color: '#B85C38'
                                    }}>
                                <Form.Label>Flaws</Form.Label>
                                <Form.Control as='textarea' rows={3} name='flaws' value={character.flaws} placeholder='Character Flaws' onChange={handleChange}/>
                            </Row>
                        </Col>
                    </Row>
                    <Button className='d-flex w-50 mx-auto justify-content-center mt-3' type='submit' 
                            style={{
                                backgroundColor: '#B85C38',
                                borderColor: '#B85C38',
                                color: '#E0C097',
                                fontFamily: ('EB Garamond', 'serif'),
                                fontStyle: 'italic',
                            }}>
                            Update Character
                    </Button>
                </Form>
        </Container>
     );
}

export default EditCharacter;