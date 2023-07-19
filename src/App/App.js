import './App.scss'
import Menu from '../Menu/Menu';
import OpenButton from '../components/OpenButton/OpenButton';
import { useContext, useState } from 'react';
import PopupForProVersion from '../components/PopupForProVersion/PopupForProVersion';
import { AppContext } from '../AppContext/AppContext';
import PopupForInfo from '../components/PopupForInfo/PopupForInfo';
import KingsSlider from './../components/KingsSlider/KingsSlider';

function App() {
  let [isShow, setIsShow] = useState(false)

  function showFunction() {
    setIsShow(!isShow)
  }

  const {
    clickCancelFunction,
    clickYesFunction,
    clickCancel,
    proButton,
    showPopupInfo,
    noShowPopupInfo,
    showPopupInfoFunction,
    noShowPopupInfoFunction
  } = useContext(AppContext)

  return (
    <div className='all'>
      <PopupForInfo
        displayValue={showPopupInfo ? "flex" : "none"}
        widthValueInside={showPopupInfo ? "350px" : "0"}
        heightValueInside={showPopupInfo ? "300px" : "0"}
        opacityValueInside={showPopupInfo ? 1 : 0}
        widthValuePopup={showPopupInfo ? "100%" : "0"}
        heightValuePopup={showPopupInfo ? "100vh" : "0"}
        opacityValuePopup={showPopupInfo ? 1 : 0}
      />
      <PopupForProVersion
        popupDisplayValue={proButton & clickCancel ? "flex" : "none"}
        insideDisplayValue={proButton & clickCancel ? "flex" : "none"}
        yesButtonFunction={() => clickYesFunction()}
        cancelButtonFunction={() => clickCancelFunction()}
      />
      <OpenButton
        onClickFunction={() => showFunction()}
        appearationValue={isShow ? true : false}
        displayValue={isShow ? "flex" : "none"}
      />
      <Menu
        opacityValue={isShow ? 0 : 1}
        functionValueForClosing={() => showFunction()}
        infoButtonFunctionValue={() => showPopupInfoFunction()}
      />
      <KingsSlider />
    </div>
  );
}

export default App;
