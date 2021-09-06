import { useState } from "react";
import './Weather.css'
function Weather() {
    const [zip, setZip] = useState('90242')
    const [unit, setUnit] = useState('')
    const UNIT_IDS = ['Metric', 'Imperial', 'Standard']
    const UNIT_LABELS = ['Celsius', 'Fahrenheit', 'Kelvin']
    
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

    return (
        <div className="Weather">
            <h1>{zip} {unit}</h1>
            <form>
                <div>
                    <input 
                        placeholder="Enter zip code here..."
                        value={zip}
                        onChange={e => setZip(e.target.value)}
                    />
                    <button>Submit</button>
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