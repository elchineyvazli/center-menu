import './Menu.scss'
import { useContext, useEffect, useRef, useState } from 'react'
import { HiOutlineLogout } from 'react-icons/hi'
import { AiFillHeart, AiOutlineFileText, AiOutlineLineChart } from 'react-icons/ai'
import { SiKingstontechnology } from 'react-icons/si'
import { TbActivity, TbInfoHexagon } from 'react-icons/tb'
import { FiMessageCircle, FiSettings } from 'react-icons/fi'


import myImage from '../images/meWithBro.jpg'
import { AppContext } from '../AppContext/AppContext'

//! Kings' image

import king1 from '../images/mehmetTheConqueror.jpeg'
import king2 from '../images/sultanSulaiman.jpeg'
import king3 from '../images/murad4.png'
import king4 from '../images/yavuzSoltanSalim.jpeg'
import king5 from '../images/abdulhamid2.png'
import king6 from '../images/orhanGazi.png'

import Activity from '../components/Activity/Activity'
import Messages from './../components/Messages/Messages';
import Statistics from './../components/Statistics/Statistics';
import Info from '../components/Info/Info'
import Kings from './../components/Kings/Kings';
import Healthy from './../components/Healthy/Healthy';
import KingCard from './../components/KingCard/KingCard';

const Menu = ({ displayValue, opacityValue, functionValueForClosing, infoButtonFunctionValue }) => {


    // console.log(refButtonsArr);

    const [redButton, setRedButton] = useState(false)
    const [forKings, setForKings] = useState(false)
    const [imageClicked, setImageClicked] = useState(false)
    const [menuHeight, setMenuHeight] = useState(650)

    function redButtonFunction() {
        setRedButton(!redButton)

        setButton1(false)
        setButton2(false)
        setButton3(false)
        setButton4(false)
        setButton5(false)
        setButton6(false)
        setButton7(false)
        if (redButton) {
            setMenuHeight(prev => prev + 450)
        } else {
            setMenuHeight(prev => prev - 450)
        }
    }

    const [button1, setButton1] = useState(false)
    const [button2, setButton2] = useState(false)
    const [button3, setButton3] = useState(false)
    const [button4, setButton4] = useState(false)
    const [button5, setButton5] = useState(false)
    const [button6, setButton6] = useState(false)
    const [button7, setButton7] = useState(false)

    const [hover1, setHover1] = useState(false)
    const [hover2, setHover2] = useState(false)
    const [hover3, setHover3] = useState(false)
    const [hover4, setHover4] = useState(false)
    const [hover5, setHover5] = useState(false)
    const [hover6, setHover6] = useState(false)
    const [hover7, setHover7] = useState(false)
    const [hover8, setHover8] = useState(false)


    const [arr, setArr] = useState([
        {
            id: 1,
            h1: "Healthy",
            p: "Haqqımda",
            color: "#57A0D2"
        },
        {
            id: 2,
            h1: "Dashboard",
            p: "Haqqımda",
            color: "#ff4c4c"
        },
        {
            id: 3,
            h1: "Appointment",
            p: "Haqqımda",
            color: "#99ff99"
        },
        {
            id: 4,
            h1: "Activity",
            p: "Haqqımda",
            color: "#FFB52E"
        },
        {
            id: 5,
            h1: "Messages",
            p: "Haqqımda",
            color: "#800080"
        },
        {
            id: 6,
            h1: "Statistic",
            p: "Haqqımda",
            color: "#741d1d"
        },
        {
            id: 7,
            h1: "Settings",
            p: "Haqqımda",
            color: "#1d741d"
        },
    ])

    let newArr = []

    let [menuWidth, setMenuWidth] = useState(20)

    let buttonArr = [
        button1,
        button2,
        button3,
        button4,
        button5,
        button6,
        button7,
    ]

    function open1() {
        setButton1(!button1)
        setButton2(false)
        setButton3(false)
        setButton4(false)
        setButton5(false)
        setButton6(false)
        setButton7(false)

    }

    function open2() {
        setButton1(false)
        setButton2(!button2)
        setButton3(false)
        setButton4(false)
        setButton5(false)
        setButton6(false)
        setButton7(false)
    }

    function open3() {
        setButton1(false)
        setButton2(false)
        setButton3(!button3)
        setButton4(false)
        setButton5(false)
        setButton6(false)
        setButton7(false)
    }

    function open4() {
        setButton1(false)
        setButton2(false)
        setButton3(false)
        setButton4(!button4)
        setButton5(false)
        setButton6(false)
        setButton7(false)
    }

    function open5() {
        setButton1(false)
        setButton2(false)
        setButton3(false)
        setButton4(false)
        setButton5(!button5)
        setButton6(false)
        setButton7(false)
    }

    function open6() {
        setButton1(false)
        setButton2(false)
        setButton3(false)
        setButton4(false)
        setButton5(false)
        setButton6(!button6)
        setButton7(false)
    }

    function open7() {
        setButton1(false)
        setButton2(false)
        setButton3(false)
        setButton4(false)
        setButton5(false)
        setButton6(false)
        setButton7(!button7)
    }

    const [hoverProVersion, setHoverProVersion] = useState(false)

    const { clickYes, proButton, proButtonFunction } = useContext(AppContext)

    function forKingsFunc() {
        setForKings(!forKings)
    }

    const [kingCardClick1, setKingCardClick1] = useState(false)
    const [kingCardClick2, setKingCardClick2] = useState(false)
    const [kingCardClick3, setKingCardClick3] = useState(false)
    const [kingCardClick4, setKingCardClick4] = useState(false)
    const [kingCardClick5, setKingCardClick5] = useState(false)
    const [kingCardClick6, setKingCardClick6] = useState(false)

    const [kingCardHover1, setKingCardHover1] = useState(false)
    const [kingCardHover2, setKingCardHover2] = useState(false)
    const [kingCardHover3, setKingCardHover3] = useState(false)
    const [kingCardHover4, setKingCardHover4] = useState(false)
    const [kingCardHover5, setKingCardHover5] = useState(false)
    const [kingCardHover6, setKingCardHover6] = useState(false)


    return (
        <div
            className='total'
            style={{
                display: `${displayValue}`,
                opacity: `${opacityValue}`,
                height: `${menuHeight}px`,
                left:
                    button1
                        || button2
                        || button3
                        || button4
                        || button5
                        || button6
                        || button7 ? "-200px" : "0",

            }}>
            <div
                className='menu'
                style={{
                    height: `${menuHeight}px`,
                    borderRadius: redButton ? "20px" : "20px 0 0 20px",
                    background: clickYes && "linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)"
                }}
            >
                {!redButton ? (
                    <div
                        className="container"
                        style={{
                            height: redButton ? "200px" : "580px",
                        }}>

                        <button onClick={() => open1()} onMouseEnter={() => setHover1(true)} onMouseLeave={() => setHover1(false)} className='linkButton healthyButton'>
                            <AiFillHeart style={{ transition: '.6s' }} size={20} color={hover1 ? 'white' : '#57A0D2'} />
                            <h1 style={{
                                color: hover1 ? 'white' : '#616f77',
                                transition: '.6s'
                            }}>Healthy</h1>
                        </button>

                        <button onClick={() => open2()} onMouseEnter={() => setHover2(true)} onMouseLeave={() => setHover2(false)} className='linkButton dashboardButton'>
                            <SiKingstontechnology style={{ transition: '.6s' }} size={20} color={hover2 ? 'white' : '#ff4c4c'} />
                            <h1 style={{
                                color: hover2 ? 'white' : '#616f77',
                                transition: '.6s'
                            }}>Kings</h1>
                        </button>

                        <button onClick={() => open3()} onMouseEnter={() => setHover3(true)} onMouseLeave={() => setHover3(false)} className='linkButton appointmentsButton'>
                            <AiOutlineFileText style={{ transition: '.6s' }} size={20} color={hover3 ? 'white' : '#99ff99'} />
                            <h1 style={{
                                color: hover3 ? 'white' : '#616f77',
                                transition: '.6s'
                            }}>Appointments</h1>
                        </button>

                        <button onClick={() => open4()} onMouseEnter={() => setHover4(true)} onMouseLeave={() => setHover4(false)} className='linkButton activityButton'>
                            <TbActivity style={{ transition: '.6s' }} size={20} color={hover4 ? 'white' : '#FFB52E'} />
                            <h1 style={{
                                color: hover4 ? 'white' : '#616f77',
                                transition: '.6s'
                            }}>Activity</h1>
                        </button>

                        <button onClick={() => open5()} onMouseEnter={() => setHover5(true)} onMouseLeave={() => setHover5(false)} className='linkButton messagesButton'>
                            <FiMessageCircle style={{ transition: '.6s' }} size={20} color={hover5 ? 'white' : '#800080'} />
                            <h1 style={{
                                color: hover5 ? 'white' : '#616f77',
                                transition: '.6s'
                            }}>Messages</h1>
                        </button>

                        <button onClick={() => open6()} onMouseEnter={() => setHover6(true)} onMouseLeave={() => setHover6(false)} className='linkButton statisticButton'>
                            <AiOutlineLineChart style={{ transition: '.6s' }} size={20} color={hover6 ? 'white' : '#741d1d'} />
                            <h1 style={{
                                color: hover6 ? 'white' : '#616f77',
                                transition: '.6s'
                            }}>Statistic</h1>
                        </button>

                        <button onClick={() => open7()} onMouseEnter={() => setHover7(true)} onMouseLeave={() => setHover7(false)} className='linkButton settingsButton'>
                            <FiSettings style={{ transition: '.6s' }} size={20} color={hover7 ? 'white' : '#1d741d'} />
                            <h1 style={{
                                color: hover7 ? 'white' : '#616f77',
                                transition: '.6s'
                            }}>Settings</h1>
                        </button>

                        <div className="proVersion">
                            <div
                                className="proVersionContainer"
                                style={{
                                    borderRadius: "5px",
                                    color: hoverProVersion ? "gold" : "white"
                                }}
                            >
                                Switch to pro version
                            </div>
                            {
                                !proButton
                                    ? (<button
                                        className="discoverProButton"
                                        style={{
                                            backgroundColor: hoverProVersion ? "gold" : "white",
                                            color: hoverProVersion ? "black" : "gray"
                                        }}
                                        onMouseEnter={() => setHoverProVersion(true)}
                                        onMouseLeave={() => setHoverProVersion(false)}
                                        onClick={() => proButtonFunction()}
                                    >
                                        Pro Version
                                    </button>)
                                    : (
                                        <div className="infoProVersion">
                                            Now You are premium customer!
                                        </div>
                                    )
                            }
                        </div>

                        <button onClick={functionValueForClosing} onMouseEnter={() => setHover8(true)} onMouseLeave={() => setHover8(false)} className='logOutButton'>
                            <HiOutlineLogout style={{ transition: '.6s' }} size={20} color={hover8 ? 'white' : '#ffa0a0'} />
                            <h1 style={{
                                color: hover8 ? 'white' : '#616f77',
                                transition: '.6s'
                            }}>Log Out</h1>
                        </button>
                    </div>) :
                    <div
                        className="container forImage"
                        style={{
                            height: redButton ? "200px" : "580px"
                        }}>
                        <img
                            style={{
                                opacity: ((!redButton & menuHeight === 200) ? 0 : 1),
                            }}
                            className='myImage'
                            src={myImage}
                            alt="sekil yoxdur"
                            onClick={() => setImageClicked(!imageClicked)}
                        />
                        <h1>The Maker</h1>
                    </div>
                }
                <button onClick={() => redButtonFunction()} className='topButtons red'></button>
                <button className='topButtons yellow'></button>
                <button className='topButtons green'></button>
            </div>

            {
                <div className='containerRightPart'>
                    <div
                        style={{
                            opacity: !button1 && 1,
                            height: `${menuHeight}px`,
                            width: !button1 && ((menuHeight === 200) ? "0" : "20px"),
                            backgroundColor: clickYes && "#edc967"
                        }}
                        className={button1 ? "rightPart active" : "rightPart"}

                    >
                        <div className="rightTop">
                            <div
                                className="filledPanel filledPanel1"
                                style={{
                                    width: button1 ? "100%" : "0",
                                }}>

                            </div>
                        </div>
                        <div
                            className="rightBottom"
                        >
                            {button1 &&
                                (
                                    arr.filter(item => item.id === 1).map(item => (
                                        <div className='openingItemContainer healthyContainer'>
                                            <Info
                                                colorValue={item.color}
                                                h1Value={item.h1}
                                                pValue={item.p}
                                            />

                                            <Healthy />

                                        </div>
                                    ))
                                )
                            }
                        </div>
                    </div>

                    <div
                        style={{
                            opacity: button2 ? 1 : 0,
                            height: `${menuHeight}px`,
                            width: !button2 && ((menuHeight === 200) ? "0" : "20px"),
                            backgroundColor: clickYes && "#edc967"
                        }}
                        className={button2 ? "kingsContainer rightPart active" : "kingsContainer rightPart"}>
                        <div className="rightTop">
                            <div
                                className="filledPanel filledPanel2"
                                style={{
                                    width: button2 ? "100%" : "0",
                                }}>

                            </div>
                        </div>
                        <div
                            className="kingsContainerBottom rightBottom"
                            style={{
                                gap: "10px",
                            }}>
                            {button2 &&
                                arr.filter(item => item.id === 2).map(item => (
                                    <div className='openingItemContainer kingsContainer'>
                                        <Info
                                            colorValue={item.color}
                                            h1Value={item.h1}
                                            pValue={item.p}
                                            heightValue={100}
                                        />
                                        <div className='kingsInside'>
                                            <button className='kingsButton' onClick={() => forKingsFunc()}>
                                                <div
                                                    className="kingLine kingLine1"
                                                    style={{
                                                        transform: `rotate(${forKings ? "45" : "0"}deg)`
                                                    }}
                                                ></div>
                                                <div
                                                    className="kingLine kingLine2"
                                                    style={{
                                                        transform: `rotate(${forKings ? "-45" : "0"}deg)`
                                                    }}
                                                ></div>
                                            </button>
                                            {
                                                <>
                                                    <KingCard
                                                        aboutValue="Card1"
                                                        imageValue={king1}
                                                        kingNameValue="Mehmet the Conqueror"
                                                        classNameValue="kingCard1"
                                                        topValue={forKings ? "30" : "150"}
                                                        hoverValue={kingCardHover1}
                                                        mouseEnterValue={() => setKingCardHover1(true)}
                                                        mouseLeaveValue={() => setKingCardHover1(false)}
                                                        clickValue={kingCardClick1 ? true : false}
                                                        hoverWidthValue={kingCardHover1 ? "fit-content" : "0"}
                                                        hoverHeightValue={kingCardHover1 ? "fit-content" : "0"}
                                                    />
                                                    <KingCard
                                                        aboutValue="Card1"
                                                        imageValue={king2}
                                                        kingNameValue="Uthman Gazi"
                                                        classNameValue="kingCard2"
                                                        topValue={forKings ? "90" : "150"}
                                                        rightValue={forKings ? "60" : "190"}
                                                        hoverValue={kingCardHover2}
                                                        mouseEnterValue={() => setKingCardHover2(true)}
                                                        mouseLeaveValue={() => setKingCardHover2(false)}
                                                        clickValue={kingCardClick2 ? true : false}
                                                        hoverWidthValue={kingCardHover2 ? "fit-content" : "0"}
                                                        hoverHeightValue={kingCardHover2 ? "fit-content" : "0"}
                                                    />
                                                    <KingCard
                                                        aboutValue="Card1"
                                                        imageValue={king3}
                                                        kingNameValue="Murad IV"
                                                        classNameValue="kingCard3"
                                                        bottomValue={forKings ? "90" : "150"}
                                                        rightValue={forKings ? "60" : "190"}
                                                        hoverValue={kingCardHover3}
                                                        mouseEnterValue={() => setKingCardHover3(true)}
                                                        mouseLeaveValue={() => setKingCardHover3(false)}
                                                        clickValue={kingCardClick3 ? true : false}
                                                        hoverWidthValue={kingCardHover3 ? "fit-content" : "0"}
                                                        hoverHeightValue={kingCardHover3 ? "fit-content" : "0"}
                                                    />
                                                    <KingCard
                                                        aboutValue="Card1"
                                                        imageValue={king4}
                                                        kingNameValue="Yavuz Soltan Salim"
                                                        classNameValue="kingCard4"
                                                        bottomValue={forKings ? "30" : "150"}
                                                        hoverValue={kingCardHover4}
                                                        mouseEnterValue={() => setKingCardHover4(true)}
                                                        mouseLeaveValue={() => setKingCardHover4(false)}
                                                        clickValue={kingCardClick4 ? true : false}
                                                        hoverWidthValue={kingCardHover4 ? "fit-content" : "0"}
                                                        hoverHeightValue={kingCardHover4 ? "fit-content" : "0"}
                                                    />
                                                    <KingCard
                                                        aboutValue="Card1"
                                                        imageValue={king5}
                                                        kingNameValue="Mehmed III"
                                                        classNameValue="kingCard5"
                                                        bottomValue={forKings ? "90" : "150"}
                                                        leftValue={forKings ? "60" : "190"}
                                                        hoverValue={kingCardHover5}
                                                        mouseEnterValue={() => setKingCardHover5(true)}
                                                        mouseLeaveValue={() => setKingCardHover5(false)}
                                                        clickValue={kingCardClick5 ? true : false}
                                                        hoverWidthValue={kingCardHover5 ? "fit-content" : "0"}
                                                        hoverHeightValue={kingCardHover5 ? "fit-content" : "0"}
                                                    />
                                                    <KingCard
                                                        aboutValue="Card1"
                                                        imageValue={king6}
                                                        kingNameValue="Soltan Abdulaziz"
                                                        classNameValue="kingCard6"
                                                        topValue={forKings ? "90" : "150"}
                                                        leftValue={forKings ? "60" : "190"}
                                                        hoverValue={kingCardHover6}
                                                        mouseEnterValue={() => setKingCardHover6(true)}
                                                        mouseLeaveValue={() => setKingCardHover6(false)}
                                                        clickValue={kingCardClick6 ? true : false}
                                                        hoverWidthValue={kingCardHover6 ? "fit-content" : "0"}
                                                        hoverHeightValue={kingCardHover6 ? "fit-content" : "0"}
                                                    />
                                                </>
                                            }
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div
                        style={{
                            opacity: button3 ? 1 : 0,
                            height: `${menuHeight}px`,
                            width: !button3 && ((menuHeight === 200) ? "0" : "20px"),
                            backgroundColor: clickYes && "#edc967"
                        }}
                        className={button3 ? "rightPart active" : "rightPart"}>
                        <div className="rightTop">
                            <div
                                className="filledPanel filledPanel3"
                                style={{
                                    width: button3 ? "100%" : "0"
                                }}>

                            </div>
                        </div>
                        <div className="rightBottom">{button3 &&
                            arr.filter(item => item.id === 3).map(item => (
                                <div className='openingItemContainer appointmentsContainer'>
                                    <Info
                                        colorValue={item.color}
                                        h1Value={item.h1}
                                        pValue={item.p}
                                    />
                                </div>
                            ))
                        }</div>
                    </div>

                    <div
                        style={{
                            opacity: button4 ? 1 : 0,
                            height: `${menuHeight}px`,
                            width: !button4 && ((menuHeight === 200) ? "0" : "20px"),
                            backgroundColor: clickYes && "#edc967"

                        }}
                        className={button4 ? "rightPart active" : "rightPart"}>
                        <div className="rightTop">
                            <div
                                className="filledPanel filledPanel4"
                                style={{
                                    width: button4 ? "100%" : "0"
                                }}>

                            </div>
                        </div>
                        <div className="rightBottom">{button4 &&
                            arr.filter(item => item.id === 4).map(item => (
                                <div className='openingItemContainer activityContainer'>
                                    <Info
                                        colorValue={item.color}
                                        h1Value={item.h1}
                                        pValue={item.p}
                                    />
                                    <Activity />
                                </div>
                            ))
                        }</div>
                    </div>

                    <div
                        style={{
                            opacity: button5 ? 1 : 0,
                            height: `${menuHeight}px`,
                            width: !button5 && ((menuHeight === 200) ? "0" : "20px"),
                            backgroundColor: clickYes && "#edc967"
                        }}
                        className={button5 ? "rightPart active" : "rightPart"}>
                        <div className="rightTop">
                            <div
                                className="filledPanel filledPanel5"
                                style={{
                                    width: button5 ? "100%" : "0"
                                }}>

                            </div>
                        </div>
                        <div className="rightBottom">{button5 &&
                            arr.filter(item => item.id === 5).map((item, index) => (
                                <div
                                    key={index}
                                    className="openingItemContainer messagesContainer">
                                    <Info
                                        colorValue={item.color}
                                        h1Value={item.h1}
                                        pValue={item.p}
                                    />
                                    <Messages />
                                </div>
                            ))
                        }</div>
                    </div>

                    <div
                        style={{
                            opacity: button6 ? 1 : 0,
                            height: `${menuHeight}px`,
                            width: !button6 && ((menuHeight === 200) ? "0" : "20px"),
                            backgroundColor: clickYes && "#edc967"
                        }}
                        className={button6 ? "rightPart active" : "rightPart"}>
                        <div className="rightTop">
                            <div
                                className="filledPanel filledPanel6"
                                style={{
                                    width: button6 ? "100%" : "0"
                                }}>

                            </div>
                        </div>
                        <div className="rightBottom">{button6 &&
                            arr.filter(item => item.id === 6).map(item => (
                                <div className='openingItemContainer statisticsContainer'>
                                    <Info
                                        colorValue={item.color}
                                        h1Value={item.h1}
                                        pValue={item.p}
                                    />
                                    <Statistics />
                                </div>
                            ))
                        }</div>
                    </div>

                    <div
                        style={{
                            opacity: button7 ? 1 : 0,
                            height: `${menuHeight}px`,
                            width: !button7 && ((menuHeight === 200) ? "0" : "20px"),
                            backgroundColor: clickYes && "#edc967"
                        }}
                        className={button7 ? "rightPart active" : "rightPart"}>
                        <div className="rightTop">
                            <div
                                className="filledPanel filledPanel7"
                                style={{
                                    width: button7 ? "100%" : "0"
                                }}>

                            </div>
                        </div>
                        <div className="rightBottom">{button7 &&
                            arr.filter(item => item.id === 7).map(item => (
                                <div className='openingItemContainer settingsContainer'>
                                    <Info
                                        colorValue={item.color}
                                        h1Value={item.h1}
                                        pValue={item.p}
                                    />
                                </div>
                            ))
                        }</div>
                    </div>

                </div>
            }

        </div >
    )
}

export default Menu