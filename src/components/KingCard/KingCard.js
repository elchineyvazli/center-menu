import { useEffect } from 'react'
import './KingCard.scss'

const KingCard = ({
    aboutValue,
    imageValue,
    kingNameValue,
    classNameValue,
    topValue,
    bottomValue,
    leftValue,
    rightValue,
    widthValue,
    heightValue,
    borderRadiusValue,
    clickFuncValue,
    clickValue,
    mouseLeaveValue,
    mouseEnterValue,
    hoverValue,
    hoverWidthValue,
    hoverHeightValue,
    backgroundColorValue
}) => {
    useEffect(() => {
        console.log(clickValue);
    }, [])
    return (
        <div
            className={`kingCard ${classNameValue}`}
            onClick={clickFuncValue}
            style={{
                width: `${widthValue}px`,
                height: `${heightValue}px`,
                top: `${topValue}px`,
                bottom: `${bottomValue}px`,
                left: `${leftValue}px`,
                right: `${rightValue}px`,
                borderRadius: `${borderRadiusValue}px`
            }}
            onMouseEnter={mouseEnterValue}
            onMouseLeave={mouseLeaveValue}
        >
            <div
                className="kingCardInside"
            >
                {
                    hoverValue &&
                    <>
                        <div
                            className="blackBg"
                            style={{
                                backgroundColor: `rgba(${backgroundColorValue})`
                            }}>
                        </div>
                        <div
                            className='kingCardHover'
                            style={{
                                width: `${hoverWidthValue}`,
                                height: `${hoverHeightValue}`,
                            }}
                        >{kingNameValue}</div>
                    </>
                }
                {
                    clickValue ?
                        <>
                            <p className='kingCardAbout'>{aboutValue}</p>
                        </>
                        :
                        <div className="forImageInKingCard">
                            <div
                                className='kingImage'
                                style={{
                                    backgroundImage: `url(${imageValue})`
                                }}>
                            </div>
                        </div>
                }

            </div>
        </div >
    )
}

export default KingCard