import { useState } from 'react'

const ChangeLocation = ({ onUpdate }) => {
    const[city, setCity] = useState('')
    

    const onSubmit = (e) =>{
        e.preventDefault()

        if(!city){
            alert("Please provide a city")
            return
        }

        onUpdate({city})

        setCity('')

    }
  

    return (

    <div className="container">
        
        <form className="change-location" onSubmit={onSubmit}>
            <label className="location-label">Enter City Name</label>
            <input className="location-field" value={city} onChange={(e) => setCity(e.target.value)}></input>
            <input type="submit" value="GO" className="btn"></input>
        </form>
        
    </div>

    );

}

export default ChangeLocation