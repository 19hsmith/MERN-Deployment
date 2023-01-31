import axios from 'axios';
import {useEffect,useState} from 'react';
import {Link} from 'react-router-dom';

function Main () {
    const [pet,setPet] = useState([]);
    const [loaded,setLoaded] = useState(true);

    useEffect(()=>{
        const controller = new AbortController();
        axios
            .get('http://localhost:8000/api',{signal:controller.signal})
            .then(res=>{
                console.log(res.data)
                setPet(res.data);
            })
            .catch(err=>console.log(err))
    },[loaded])

    function handleLoad(){
        setLoaded(!loaded)
    }
    const sortedList = pet.sort((a, b) =>
    a.type.localeCompare(b.type));
    
    return(
        <div>
            <h1>Pet Shelter</h1>
            <Link to={'/pet'}>add a pet</Link>
            <div>
                These pets are looking for a good home
            </div>
            <div>
                {pet &&
                    pet.map((pet,idx) =>{
                        return(
                            <div className='card w-25 mx-auto'key={idx}>
                                <h3>Name: {pet.pet}</h3>
                                <h3>Type: {pet.type}</h3>
                                <Link to={`/pet/${pet._id}/Show`}>Details</Link>
                                <Link to={`/pet/${pet._id}/edit`}>Edit</Link>
                            </div>
                        )
                    })                
                }

            </div>
        </div>
    )

}

export default Main;