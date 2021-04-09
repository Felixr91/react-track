import {Link} from 'react-router-dom'
import WeatherCard from './WeatherCard'
// import { useState } from 'react'
// import React from 'react'

const FiveDay = (hourly) => {

    const ar = hourly['data']
    console.log(ar)

    return (
        <div className="five-day-container">
            <h4>5 Day Forcast</h4>
            {/* <Link to="/">Go Back</Link> */}
            <>
            {ar.map((i) => (
                <WeatherCard 
                    key={i.dt} 
                    description={i.weather[0].description} 
                    kelvin={i.main.temp}
                    datetxt = {i.dt_txt}
                    icon = {i.weather[0].icon}
                >
                </WeatherCard>
            ))}
            </>

        </div>
    )
}

export default FiveDay
