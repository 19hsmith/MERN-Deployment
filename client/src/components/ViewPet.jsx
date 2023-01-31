import axios from 'axios';
import {useEffect,useState} from 'react';
import {useParams,Link,useNavigate} from 'react-router-dom';

function ViewPet() {
    const {id} = useParams();
    const [pet,setPet] = useState({});
    const navigate = useNavigate()

    useEffect(()=>{
        const controller = new AbortController();
        axios   
            .get(`http://localhost:8000/api/${id}`)
            .then(res => {
                setPet(res.data)
            })
            .catch(err => console.log(err))
    },[])

    function handleDelete(){
        axios
            .delete(`http://localhost:8000/api/${id}`)
            .then(res =>{
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    return(
       <div>
        <h1>Pet Shelter</h1>
        <h3>Details about:{pet.pet}</h3>
        <button onClick={handleDelete}>Adopt {pet.pet}</button>
        <Link to = {'/'}>go back to home</Link>
            <div>
                <h3>Type: {pet.type}</h3>
            </div>
            <div>
                <h3>Description: {pet.description}</h3>
            </div>
            <div>
                <h3>Skill: {pet.skill1}</h3>
            </div>
            <div>
                <h3>Skill: {pet.skill2}</h3>
            </div>
            <div>
                <h3>Skill: {pet.skill3}</h3>
            </div>
       </div> 
    )
}

export default ViewPet; 