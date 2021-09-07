import { useState } from "react";
import './Weather.css'
function Weather() {
    const [zip, setZip] = useState('')
    const [unit, setUnit] = useState('')
    const [data, setData] = useState(null)
    const UNIT_IDS = ['Metric', 'Imperial', 'Standard']
    const UNIT_LABELS = ['Celsius', 'Fahrenheit', 'Kelvin']
    
    // Functions relating to the unitRadio components
    // ----------------------------------------------
    const UnitRadio = (props) => {
        const {name, label} = props
        return (
            <label>
                <input
                    type="radio"
                    name={name}
                    checked={unit === label}
                    onChange={() => setUnit(label)}
                />
            {label}</label>
        )}

    const renderUnitRadio = (name, label) => (
        <UnitRadio
            name={name}
            label={label}
        />
    )

    const UnitRadios = UNIT_IDS.map((_, index) => {
        const name="unit"
        const label = `${UNIT_IDS[index]}`
        return renderUnitRadio(name, label)
    });

    // Functions relating to the unitSelect option components
    // ------------------------------------------------------

    const UnitSelect = (props) => {
        const {name, label} = props
        return (
            <option value={name}>{label}</option>
    )}

    const renderUnitSelect = (name, label) => (
        <UnitSelect
            name={name}
            label={label}
        />
    )

    const UnitSelections = UNIT_LABELS.map((_, index) => {
        const name= `${UNIT_IDS[index]}`
        const label = `${UNIT_LABELS[index]}`
        return renderUnitSelect(name, label)
    });

    // Fetches the weather upon submitting the form
    // --------------------------------------------
    const fetchWeather = async () => {
        // fetch weather
        const apiKey = '8dc260bebb36d0633ea80322c7425314'
        const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${unit}`
        const res = await fetch(path)
        const json = await res.json()

        console.log(json)
        // setData(newData)
        const temp = json.main.temp
        return temp
    }

    return (
        <div className="Weather">
            {data && <h1>{data.main.temp}</h1>}
            <form onSubmit={e => {
                e.preventDefault()
                fetchWeather()
            }}>
                <div>
                    <input 
                        placeholder="Enter zip code here..."
                        value={zip}
                        onChange={e => setZip(e.target.value)}
                    />
                    <button type="submit">Submit</button>
                </div>

                <select
                    value={unit} 
                    onChange={e => setUnit(e.target.value)}
                >
                    {UnitSelections}
                </select>
                
                <div>{UnitRadios}</div>
                
            </form>
        </div>
    )
}

export default Weather