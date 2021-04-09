import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <div className="navigation">

            <Link className="links" to="/">Today's Forcast</Link>
            <Link className="links" to="/five-day">5 Day Hourly Forcast</Link>
            
        </div>
    )
}

export default Nav
