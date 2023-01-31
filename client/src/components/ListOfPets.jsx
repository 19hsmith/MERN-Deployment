function PetList({pet}) {
    return(
        pet && pet.map(pet =>{
            return(
                <div>
                    <p>{pet.pet}</p>
                    <p>{pet.type}</p>
                </div>
            )
        })
    )
}