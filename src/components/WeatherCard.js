import { useState } from 'react'
import Icon from './Icon'

const WeatherCard = ({ description, kelvin, datetxt, icon }) => {

    
    const formatDate = () =>{
        const dd = datetxt.split(" ")
        return dd[0]
    }

    const formatTime = () =>{
        const dd = datetxt.split(" ")
        return dd[1]
    }

    return (
        <div className="hourly-card">
            
            <h3>{formatDate()}</h3>
            <h3>{formatTime()}</h3>
            <p>{description}</p>
            <Icon data={icon}></Icon>

        </div>
    )
}

export default WeatherCard
