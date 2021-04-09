import WeatherCard from './WeatherCard'

const FiveDay = (hourly) => {

    const ar = hourly['data']

    return (
        <div className="five-day-container">
            <h4>5 Day Forcast</h4>
 
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
