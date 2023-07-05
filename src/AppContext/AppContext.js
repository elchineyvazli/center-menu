import { createContext, useState } from "react";

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const [clickYes, setClickYes] = useState(false)
    const [clickCancel, setClickCancel] = useState(false)
    const [proButton, setProButton] = useState(false)

    const [showPopupInfo, setShowPopupInfo] = useState(false)
    const [noshowPopupInfo, setNoShowPopupInfo] = useState(true)

    function showPopupInfoFunction() {
        setShowPopupInfo(!showPopupInfo)
        setNoShowPopupInfo(!noshowPopupInfo)
    }

    function noShowPopupInfoFunction() {
        setNoShowPopupInfo(!noshowPopupInfo)
        setShowPopupInfo(!showPopupInfo)
    }

    function proButtonFunction() {
        setProButton(!proButton)
        setClickCancel(!clickCancel)
    }

    function clickYesFunction() {
        setClickYes(true)
        setProButton(false)
        setClickCancel(false)
    }

    function clickCancelFunction() {
        setProButton(!proButton)
        setClickCancel(!clickCancel)
    }

    return (
        <AppContext.Provider value={{
            clickYesFunction,
            clickCancelFunction,
            clickCancel,
            clickYes,
            proButton,
            proButtonFunction,
            showPopupInfo,
            showPopupInfoFunction,
            noShowPopupInfoFunction
        }}>
            {children}
        </AppContext.Provider>
    )
}