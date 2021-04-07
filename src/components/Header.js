import PropTypes from 'prop-types'


const Header = ({title}) => {
    return (
        <header className="header-comp center">
            <h1 className="header-title">Enter Your Location</h1>
            <input></input>
            <button className="btn">Go</button>
        </header>
    )
}


export default Header
