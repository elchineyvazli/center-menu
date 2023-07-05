import './Activity.scss'
import { BsArrowsMove, BsCurrencyBitcoin } from 'react-icons/bs'
import { BiWorld } from 'react-icons/bi'
import { AiOutlineHome } from 'react-icons/ai'
import { RiRestartLine } from 'react-icons/ri'
import { useState } from 'react'

const Activity = () => {
    const [hover1, setHover1] = useState(false)
    const [hover2, setHover2] = useState(false)
    const [hover3, setHover3] = useState(false)
    const [hover4, setHover4] = useState(false)
    const [hover5, setHover5] = useState(false)

    function hover1Function() {
        setHover1(!hover1)
    }
    function hover2Function() {
        setHover2(!hover2)
    }
    function hover3Function() {
        setHover3(!hover3)
    }
    function hover4Function() {
        setHover4(!hover4)
    }
    function hover5Function() {
        setHover5(!hover5)
    }

    return (
            <div className='activity'>
                <button className='activityButton' onMouseEnter={() => setHover1(true)} onMouseLeave={() => setHover1(false)}>
                    <BsArrowsMove size={40} color={hover1 ? "white" : "#666669"} />
                </button>
                <button className='activityButton' onMouseEnter={() => setHover2(true)} onMouseLeave={() => setHover2(false)}>
                    <BsCurrencyBitcoin size={40} color={hover2 ? "white" : "#666669"} />
                </button>
                <button className='activityButton' onMouseEnter={() => setHover3(true)} onMouseLeave={() => setHover3(false)}>
                    <BiWorld size={40} color={hover3 ? "white" : "#666669"} />
                </button>
                <button className='activityButton' onMouseEnter={() => setHover4(true)} onMouseLeave={() => setHover4(false)}>
                    <AiOutlineHome size={40} color={hover4 ? "white" : "#666669"} />
                </button>
                <button className='activityButton' onMouseEnter={() => setHover5(true)} onMouseLeave={() => setHover5(false)}>
                    <RiRestartLine size={40} color={hover5 ? "white" : "#666669"} />
                </button>
            </div>
    )
}

export default Activity