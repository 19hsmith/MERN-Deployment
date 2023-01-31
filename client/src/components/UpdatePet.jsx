import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

function UpdateInfo() {
    const { id } = useParams();
    console.log(id)
    const [pet, setPet] = useState('');
    const navigate = useNavigate();
    const [update, setUpdate] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();
        axios
            .get(`http://localhost:8000/api/${id}`, { signal: controller.signal })
            .then(res => {
                setUpdate(res.data)
                console.log(res.data)
            })
            .catch(err => console.log(err));
        return () => controller.abort
    }, [id])

    const handleChange = (e) => {
        setUpdate({
            ...update,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .put(`http://localhost:8000/api/${update._id}`, {
                ...update,
            })
            .then(res => {
                console.log(res.data)
                navigate('/')
            })
            .catch(err => {
                console.log(err)
                setError(err.response.data.errors)
            })
    };

    return (
        <div>
            <h1>Pet Shelter</h1>
            <Link to={'/'}>back to home</Link>
            <h3>Edit {update.pet}</h3>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                    <label htmlFor='pet'>Name:</label>
                        <input
                            type='text'
                            name='pet'
                            id='pet'
                            value={update.pet}
                            onChange={(e) => setUpdate({...update,[e.target.name]:e.target.value})}
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
                            value={update.type}
                            onChange={(e) => setUpdate({...update,[e.target.name]:e.target.value})}    
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
                            value={update.description}
                            onChange={(e) => setUpdate({...update,[e.target.name]:e.target.value})}    
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
                            value={update.skill1}
                            onChange={(e) => setUpdate({...update,[e.target.name]:e.target.value})}    
                        />
                    </div>
                    <div>
                        <label htmlFor='skill2'>Skill</label>
                        <input
                            type='text'
                            name='skill2'
                            id='skill2'
                            value={update.skill2}
                            onChange={(e) => setUpdate({...update,[e.target.name]:e.target.value})}    
                        />
                    </div>
                    <div>
                        <label htmlFor='skill3'>Skill</label>
                        <input
                            type='text'
                            name='skill3'
                            id='skill3'
                            value={update.skill3}
                            onChange={(e) => setUpdate({...update,[e.target.name]:e.target.value})}    
                        />
                    </div>
                    <button type='submit'>Edit Pet</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateInfo;