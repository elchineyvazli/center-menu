import './Kings.scss'
import king1 from '../../images/mehmetTheConqueror.jpeg'
import king2 from '../../images/sultanSulaiman.jpeg'
import king3 from '../../images/thunderboldTheBayezid.jpeg'
import king4 from '../../images/yavuzSoltanSalim.jpeg'
import KingCard from '../KingCard/KingCard';
const Kings = ({
    widthValue,
    heightValue
}) => {
    return (
        <div
            className='kings'
            style={{
                width: `${widthValue}px`,
                height: `${heightValue}px`,
            }}
        >
            <KingCard
                h1Value="Card1"
                imageValue={king1}
                kingNameValue="Mehmet the Conqueror"
            />
            <KingCard
                h1Value="Card1"
                imageValue={king2}
                kingNameValue="Uthman Gazi"
            />
            <KingCard
                h1Value="Card1"
                imageValue={king3}
                kingNameValue="Soltan Sulaiman"
            />
            <KingCard
                h1Value="Card1"
                imageValue={king4}
                kingNameValue="Yavuz Soltan Salim"
            />
            <KingCard
                h1Value="Card1"
                imageValue={king1}
                kingNameValue="Mehmet the Conqueror"
            />
            <KingCard
                h1Value="Card1"
                imageValue={king2}
                kingNameValue="Orhan Gazi"
            />
        </div>
    )
}

export default Kings