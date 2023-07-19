import { useState } from 'react'
import './KingsSlider.scss'

//! IMAGES
import king1 from '../../images/abdulhamid2.png'
import king2 from '../../images/mehmetTheConqueror.jpeg'
import king3 from '../../images/murad4.png'
import king4 from '../../images/sultanSulaiman.jpeg'
import king5 from '../../images/thunderboldTheBayezid.jpeg'
import king6 from '../../images/yavuzSoltanSalim.jpeg'

//! ICONS

import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'

const KingsSlider = () => {
    const [arr, setArr] = useState([
        {
            name: "Sultan1",
            text: "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm",
            url: king1,
            opacity: 1
        },
        {
            name: "Sultan2",
            text: "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm",
            url: king2,
            opacity: 0
        },
        {
            name: "Sultan3",
            text: "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm",
            url: king3,
            opacity: 0
        },
        {
            name: "Sultan4",
            text: "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm",
            url: king4,
            opacity: 0
        },
        {
            name: "Sultan5",
            text: "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm",
            url: king5,
            opacity: 0
        },
        {
            name: "Sultan6",
            text: "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm",
            url: king6,
            opacity: 0
        },
    ])

    let [opValue, setOpValue] = useState(false)
    let [close, setClose] = useState(false)

    function closeFunction() {
        setClose(true)
    }

    function nextFunction() {
    }

    return (
        <div
            className='kingsSlider'
            style={{
                display: close ? "none" : "flex"
            }}>
            <div className="kingsSliderInside">
                <button
                    className='kingCloseButton'
                    onClick={() => closeFunction()}
                >X</button>
                <button
                    onClick={() => nextFunction()}
                    className='kingButton kingBackButton'
                >
                    <IoIosArrowBack size={60} color="white" />
                </button>
                {arr.map((item, index) => (
                    <div
                        className="kingItem"
                        style={{
                            opacity: item.opacity
                        }}
                    >
                        <div className="kingItemTop">
                            <div
                                className="kingItemImage"
                                style={{
                                    backgroundImage: `url(${item.url})`
                                }}>
                            </div>
                        </div>
                        <div className="kingItemBottom">
                            <h1>{item.name}</h1>
                            {item.text}
                        </div>
                    </div>
                ))}
                <button
                    className='kingButton kingUndoButton'
                    onClick={() => nextFunction()}
                >
                    <IoIosArrowForward size="60px" color="white" />
                </button>
            </div>
        </div >
    )
}

export default KingsSlider