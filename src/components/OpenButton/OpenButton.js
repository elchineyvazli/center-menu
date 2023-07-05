import './OpenButton.scss'
import { BsFillEyeSlashFill } from 'react-icons/bs'

const OpenButton = ({ onClickFunction, appearationValue, displayValue }) => {
    return (
        <button
            onClick={onClickFunction}
            className='openButton'
            style={{
                display: `${displayValue}`
            }}
        >
            {appearationValue && <BsFillEyeSlashFill
                size={38}
                color="white"
            />}
        </button>
    )
}

export default OpenButton