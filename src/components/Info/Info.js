import './Info.scss'

const Info = ({
    colorValue,
    h1Value,
    pValue,
    heightValue
}) => {
    return (
        <div
            className='info'
            style={{
                height: `${heightValue}px`
            }}
        >
            <h1 style={{
                color: `${colorValue}`
            }}>{h1Value}</h1>
            <p>{pValue}</p>
        </div >
    )
}

export default Info