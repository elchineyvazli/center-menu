import { useEffect } from 'react';
import './Statistics.scss'
import { RxInfoCircled } from 'react-icons/rx'

const Statistics = () => {
    let ram = navigator.deviceMemory
    let platform = navigator.platform
    let topValue = 0
    let leftValue = 70
    let degreeValue1 = 10
    let degreeValue2 = 30
    let degreeValue3 = 60
    let colors = ["#1D731D", "red", "blue"]

    const call = () => {
        console.log(ram);
        console.log(platform);
    }
    useEffect(call, [])
    return (
        <div className='statistics'>
            <div className="circle" style={{
                background: `conic-gradient(${colors[0]} ${degreeValue1}%, #ededed 0deg)`
            }}>
                <p className="valueContainer">{degreeValue1}%</p>
                <RxInfoCircled className='infoCircle' size={28} color='white' />
            </div>

            <div className="circle" style={{
                background: `conic-gradient(${colors[1]} ${degreeValue2}%, #ededed 0deg)`
            }}>
                <p className="valueContainer">{degreeValue2}%</p>
                <RxInfoCircled className='infoCircle' size={28} color='white' />
            </div>

            <div className="circle" style={{
                background: `conic-gradient(${colors[2]} ${degreeValue3}%, #ededed 0deg)`
            }}>
                <p className="valueContainer">{degreeValue3}%</p>
                <RxInfoCircled className='infoCircle' size={28} color='white' />
            </div>

        </div >
    )
}

export default Statistics