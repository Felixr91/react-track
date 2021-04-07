import { useState } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ChangeLocation from './components/ChangeLocation'
import Nav from './components/Nav'
import FiveDay from './components/FiveDay'


const App = () =>{

  const[city, setCity] = useState('')
  const[temp, setTemp] = useState('')
  const[icon, setIcon] = useState('')

  const updateLocal = (location) =>{
    var str = location.city
    const fetchCity = async(e) => {
      try{
        const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q='+ str +'&appid=b6f8522feb77a9950aa13a429319e29b')
        const data = await res.json()
        const city = data.name
        const kelvin = data.main.temp
        const fahren = (Math.floor(1.8 * (kelvin - 273) + 32))

        setCity(city)
        setTemp(fahren+'°')
        } catch(e){
          alert('Please provide a valid city')
        }
      }
    fetchCity(str)
  }

  return (
    <Router>
      <div className="container">
        
        <Nav></Nav>
        <h1>Find your local weather!</h1>

        <Route path="/" exact render={(props)=>(
          <>
            <h2>{city}</h2>
            <h2>{temp}</h2>
          </>
        )}/>
        
        <ChangeLocation onUpdate={updateLocal}></ChangeLocation>

        <Route path="/five-day" component={FiveDay}/>

      </div>
    </Router>

  );
}

export default App;
