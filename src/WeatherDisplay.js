function WeatherDisplay(props) {
    const { name, temp, desc, feelsLike } = props
    return (
        <div>
            <h1>{name}</h1>
            <h1>{temp}</h1>
            <h2>Feels like {feelsLike}</h2>
            <p>{desc}</p>
        </div>
    )
}

export default WeatherDisplay