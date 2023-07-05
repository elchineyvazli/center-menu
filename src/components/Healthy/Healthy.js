import './Healthy.scss'
import { useRef, useState } from 'react'

const Healthy = () => {
    let weightTextRef = useRef()
    let heightTextRef = useRef()
    let calcButtonRef = useRef()

    let idealHealthy = 0
    let [clickButton, setClickButton] = useState(true)
    let [result, setResult] = useState(0)
    let [inputWeightValue, setInputWeightValue] = useState(0)
    let [inputHeightValue, setInputHeightValue] = useState(0)


    let [clearAll, setClearAll] = useState(false)


    function calcIdealWeightFunction() {
        setClickButton(true)
        setResult(() => Math.floor(inputWeightValue / (((inputHeightValue) / 100) ** 2)))
    }

    function clearAllFunction() {
        setClearAll(true)
        weightTextRef.current.value = ""
        heightTextRef.current.value = ""
    }
    return (
        <div className='healthy'>
            <label className='weightLabel' htmlFor="">Weight :
                <input onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                    }
                }} ref={weightTextRef} className='weightText' placeholder='Type weight' onChange={e => setInputWeightValue(e.target.value)} type="text" />
            </label>
            <label className='heightLabel' htmlFor="">Height (with cm) :
                <input onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                    }
                }} ref={heightTextRef} className='heightText' placeholder='Type height' onChange={e => setInputHeightValue(e.target.value)} type="text" />
            </label>
            <div className="radios">
                <label className='gender' htmlFor="">Men
                    <input className='radioInput' type="radio" name="gender" id="" />
                </label>
                <label className='gender' htmlFor="">Women
                    <input className='radioInput' type="radio" name="gender" id="" />
                </label>
            </div>
            <div className="buttonPartInBottom">
                <button ref={calcButtonRef} disabled={(!inputHeightValue)} onClick={() => calcIdealWeightFunction()} className='shareIdealWeightButton'>Calc</button>
                <button onClick={() => clearAllFunction()} className="clearAll">C</button>
            </div>

            <h1>
                Result :
                {<span
                    style={{
                        color: (result > 40 ? "rgb(95, 4, 4)" : (35 < result & result < 40) ? "rgb(168, 16, 16)"
                            : (30 < result & result < 35) ? "red"
                                : (25 < result & result < 30) ? "yellow"
                                    : (18.5 < result & result < 25) ? "green"
                                        : (result > 18.5) ? "skyblue"
                                            : "white")
                    }}
                >
                    {result}
                </span>}
            </h1>
        </div>
    )
}

export default Healthy