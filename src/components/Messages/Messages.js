import { useRef, useState } from 'react'
import './Messages.scss'
import { TbArrowDown } from 'react-icons/tb'

const Messages = () => {
    const inputRef = useRef()
    let [click, setClick] = useState(true);
    let [arr, setArr] = useState([]);

    function clickFunction() {
        let value = inputRef.current.value;
        (!arr.includes(value) & value !== "") && setArr([...arr, value])
        inputRef.current.value = ""
    }

    return (
        <div className='messages'>
            <div className="messagesinputContainer">
                <input className='messagesInput' ref={inputRef} type="text" placeholder='Type message..' />
                <button className='messagesButton' onClick={clickFunction}><TbArrowDown color='white' size={30} /></button>
            </div>
            <div className="comments">
                {
                    arr.map((message, index) => (
                        <div key={index} className='yourMessagePart'>
                            <span>You : </span>
                            <div className="message">{message}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Messages