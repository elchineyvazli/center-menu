import './KingCard.scss'

const KingCard = ({ h1Value, imageValue, kingNameValue }) => {
    return (
        <div className='kingCard'>
            <div className="insideKingCard">
                <h1 className='kingCardH1'>{h1Value}</h1>
                <div className="middleKingCard">
                    <div className="kingCardFilledBar"></div>
                </div>
                <div className="forImageInKingCard">
                    <img className='kingImage' src={imageValue} alt="sekil yoxdur" />
                </div>
                <button className='kingCardButton'>{kingNameValue}</button>
            </div>
        </div>
    )
}

export default KingCard