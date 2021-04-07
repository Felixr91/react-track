import PropTypes from 'prop-types'

const Button = ({color, text}) => {
    return (
        <div className="center">
            <div>
                <input></input>
                <button style={{backgroundColor: color}} className="btn">{text}</button>
            </div>
        </div>
    )
}

Button.defaultProps = {
    color: 'gray',
    text: 'Go'
}

Button.propTypes={
    color: PropTypes.string,
    text: PropTypes.string
}

export default Button
