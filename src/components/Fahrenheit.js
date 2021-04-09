import React from 'react'


const Fahrenheit = (temp) => {

    const convertKelvin = () =>{
        const kel = temp.data
        const fahren = Math.floor(1.8 * (kel - 273) + 32)
        return fahren
    }


    return (
        <div className="converTemp">
            <h3>{convertKelvin()+'°F'}</h3>
        </div>
    )
}

export default Fahrenheit