import './PopupForInfo.scss'
import { AiOutlineClose } from 'react-icons/ai'
import { useContext } from 'react'
import { AppContext } from '../../AppContext/AppContext'

const PopupForInfo = ({ displayValue,
    widthValueInside,
    heightValueInside,
    widthValuePopup,
    heightValuePopup,
    opacityValuePopup,
    opacityValueInside,
    translate1Value,
    translate2Value }) => {
    const {
        setShowPopupInfo,
        showPopupInfoFunction,
        noShowPopupInfoFunction
    } = useContext(AppContext)
    return (
        <div
            className='popupForInfo'
            style={{
                width: widthValuePopup,
                height: heightValuePopup,
                opacity: opacityValuePopup
            }}
        >
            <div
                className="insidePopupInfo"
                style={{
                    width: widthValueInside,
                    height: heightValueInside,
                    opacity: opacityValueInside,
                }}
            >
                <div className="insidePopupInfoTop">
                    <button onClick={() => noShowPopupInfoFunction()} className='closeButtonInfo'>
                        <AiOutlineClose color='#57A0D2' size={38} />
                    </button>
                </div>
                <div className="insidePopupInfoBottom">
                    <h1>LEVELS</h1>
                    <label className='levelBottom' htmlFor="">
                        <div className="levels greenLevel"></div>
                        <h1>18.5 - 25(Əla)</h1>
                    </label>
                    <label className='levelBottom' htmlFor="">
                        <div className="levels yellowLevel"></div>
                        <h1>25 - 30(Yaxşı)</h1>
                    </label>
                    <label className='levelBottom' htmlFor="">
                        <div className="levels redLevel"></div>
                        <h1>30 - 35(Orta)</h1>
                    </label>
                    <label className='levelBottom' htmlFor="">
                        <div className="levels bigRedLevel"></div>
                        <h1>35 - 40(Pis)</h1>
                    </label>
                    <label className='levelBottom' htmlFor="">
                        <div className="levels biggerRedLevel"></div>
                        <h1>40+(Çox pis)</h1>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default PopupForInfo