import './PopupForProVersion.scss'

const PopupForProVersion = ({
    popupDisplayValue,
    insideDisplayValue,
    cancelButtonFunction,
    yesButtonFunction
}) => {
    return (
        <div
            className='popupForProVersion'
            style={{
                display: `${popupDisplayValue}`
            }}
        >
            <div
                className="inside"
                style={{
                    display: `${insideDisplayValue}`
                }}
            >
                <h1>Are you sure?</h1>
                <div className="popupChoise">
                    <button onClick={cancelButtonFunction} className="cancelButton">Cancel</button>
                    <button onClick={yesButtonFunction} className="yesButton">Yes</button>
                </div>
            </div>
        </div>
    )
}

export default PopupForProVersion