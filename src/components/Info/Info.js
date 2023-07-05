import './Info.scss'

const Info = ({ colorValue, h1Value, pValue }) => {
    return (
        <div className='info'>
            <h1 style={{
                color: `${colorValue}`
            }}>{h1Value}</h1>
            <p>{pValue}</p>
        </div>
    )
}

export default Info