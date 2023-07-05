import './Kings.scss'
import king1 from '../../images/mehmetTheConqueror.jpeg'
import king2 from '../../images/sultanSulaiman.jpeg'
import king3 from '../../images/thunderboldTheBayezid.jpeg'
import king4 from '../../images/yavuzSoltanSalim.jpeg'
import KingCard from '../KingCard/KingCard';
const Kings = () => {
    return (
        <div className='kings'>
            <KingCard
                h1Value="Card1"
                imageValue={king1}
                kingNameValue="Mehmet the Conqueror"
            />
            <KingCard
                h1Value="Card1"
                imageValue={king2}
                kingNameValue=""
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
                kingNameValue=""
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
                kingNameValue=""
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
        </div>
    )
}

export default Kings