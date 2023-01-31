import axios from 'axios'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

function PetForm(props) {
    const [pet, setPet] = useState('');
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    const [skill1, setSkill1] = useState('');
    const [skill2, setSkill2] = useState('');
    const [skill3, setSkill3] = useState('');
    const [error, setError] = useState(null)
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPet = {
            pet,
            type,
            description,
            skill1,
            skill2,
            skill3
        }
        axios
            .post('http://localhost:8000/api', newPet)
            .then(() => {
                navigate('/')
            })
            .catch(err => {
                console.log(err.response)
                setError(err.response.data.errors)
            })
    }

    return (
        <div>
            <h1>Pet Shelter</h1>
            <h3>Know a pet needing a home?</h3>
            <Link to={'/'}>go back to home</Link>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='pet'>Name:</label>
                        <input
                            type='text'
                            name='pet'
                            id='pet'
                            onChange={(e) => setPet(e.target.value)}
                        />
                        {error?.pet &&
                            <p>{error.pet.message}</p>
                        }
                    </div>
                    <div>
                        <label htmlFor='type'>Type:</label>
                        <input
                            type='text'
                            name='type'
                            id='type'
                            onChange={(e) => setType(e.target.value)}
                        />
                        {error?.type &&
                            <p>{error.type.message}</p>
                        }
                    </div>
                    <div>
                        <label htmlFor='description'>Description:</label>
                        <input
                            type='text'
                            name='description'
                            id='description'
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        {error?.description &&
                            <p>{error.description.message}</p>
                        }
                    </div>
                    <div>
                        <label htmlFor='skill1'>Skill</label>
                        <input
                            type='text'
                            name='skill1'
                            id='skill1'
                            onChange={(e) => setSkill1(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor='skill2'>Skill</label>
                        <input
                            type='text'
                            name='skill2'
                            id='skill2'
                            onChange={(e) => setSkill2(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor='skill3'>Skill</label>
                        <input
                            type='text'
                            name='skill3'
                            id='skill3'
                            onChange={(e) => setSkill3(e.target.value)}
                        />
                    </div>
                    <button type='submit'>Create Pet</button>
                </form>
            </div>
        </div>
    )
}

export default PetForm;