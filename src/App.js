import { useState } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ChangeLocation from './components/ChangeLocation'
import Nav from './components/Nav'
import FiveDay from './components/FiveDay'
import Icon from './components/Icon'
import Fahrenheit from './components/Fahrenheit'


const App = () =>{

  const[city, setCity] = useState('')
  const[temp, setTemp] = useState('')
  const[icon, setIcon] = useState('')
  const[description, setDescription] = useState('')
  const[hourly, setFiveDay] = useState([])

  const updateLocal = (location) =>{
    var str = location.city

    const fetchCity = async(e) => {
      try{
        const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q='+ str +'&appid=bbbcf0b66757cacaecb5670689170a6b')
        const data = await res.json()
        const city = data.name
        const kelvin = data.main.temp
        const icon = data.weather[0].icon
        const info = data.weather[0].description
        setCity(city)
        setTemp(kelvin)
        setIcon(icon)
        setDescription(info)
        } catch(e){
          alert('Please provide a valid city')
        }
    }
    

    const fetchFiveDay = async(e) => {
      try{
        const res = await fetch('https://api.openweathermap.org/data/2.5/forecast?q='+ str +'&appid=bbbcf0b66757cacaecb5670689170a6b')
        const data = await res.json()
        const hourly = data.list


        setFiveDay(hourly)
        } catch(e){
          console.log('could not get 5 Day')
          alert('There was a problem fetching the 5 day forcast for your state.')
        }
    }

    fetchCity(str)
    fetchFiveDay(str)

  }

  return (
    <Router>
      <div className="container">
        
        <Nav></Nav>
        <h1>Local Weather App</h1>

        <ChangeLocation onUpdate={updateLocal}></ChangeLocation>

        {city.length > 0 ? 
          <div className="todays-weather">
            <h2>{city}</h2>

            <Route path="/" exact render={(props)=>(
              <>
                <Fahrenheit data={temp}/>

                {icon.length > 0 ? 
                  <div className="flex-center">
                    <Icon data={icon}/> 
                    <p>{description}</p>
                  </div>
                : ''}
              </>
            )}/>
          </div>
        : ''}
        
        <Route path="/five-day">
          <FiveDay data={hourly}></FiveDay>
        </Route>
            
        

      </div>
    </Router>

  );
}

export default App;
