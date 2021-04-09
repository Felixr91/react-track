const Icon = (icon) => {
        console.log(icon)
    return (
        <div>
            <img className='icon' src={('https://openweathermap.org/img/w/' + icon.data + '.png')}></img>
            
        </div>
    )
}

export default Icon
