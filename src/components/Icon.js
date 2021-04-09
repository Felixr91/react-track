const Icon = (icon) => {
        
    return (
        <div>
            <img className='icon' alt='weather icon' src={('https://openweathermap.org/img/w/' + icon.data + '.png')}></img>
            
        </div>
    )
}

export default Icon
