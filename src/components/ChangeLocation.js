import { useState, useEffect } from 'react'

const ChangeLocation = ({ onUpdate }) => {
    const[city, setCity] = useState('')
    

    const onSubmit = (e) =>{
        e.preventDefault()

        if(!city){
            alert("Please add city")
            return
        }

        onUpdate({city})

        setCity('')

    }
  

    return (

    <div className="container">
        
        <form className="change-location" onSubmit={onSubmit}>
            <input value={city} onChange={(e) => setCity(e.target.value)}></input>
            <input type="submit" value="Sumit Location" className="btn"></input>
        </form>
        
    </div>

    );

}

export default ChangeLocation