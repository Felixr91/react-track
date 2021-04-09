import Icon from './Icon'
import Fahrenheit from './Fahrenheit'

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
            
            <p>{formatDate()}</p>
            <p>{formatTime()}</p>
            <p>{description}</p>
            <Icon data={icon}></Icon>
            <Fahrenheit data={kelvin}></Fahrenheit>

        </div>
    )
}

export default WeatherCard
