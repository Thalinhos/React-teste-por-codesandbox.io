import { useState, useEffect } from "react";

export default function App() {
  const [effect, setEffect] = useState(true);
  const [showPix, setshowPix] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ left: 0, top: 0 });
  const [statePosition, setStatePosition] = useState("absolute");
  const [stateDisplay, setStateDisplay] = useState("block");

  function controlEffect() {
    setEffect(!effect);
  }

  function showDiv() {
    controlEffect();
    setshowPix(!showPix);
    relativeOverAbsolute();
  }

  function hideDiv() {
    controlEffect();
    setshowPix(!showPix);
    absoluteOverRelative();
  }

  function relativeOverAbsolute() {
    setStatePosition("relative");
    setStateDisplay("none");
  }

  function absoluteOverRelative() {
    setStatePosition("absolute");
    setStateDisplay("block");
  }

  useEffect(() => {
    function moveButtonRandomly() {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const buttonWidth = 100;
      const buttonHeight = 40;

      const randomX = Math.random() * (screenWidth - buttonWidth);
      const randomY = Math.random() * (screenHeight - buttonHeight);

      setButtonPosition({ left: randomX, top: randomY });

      setTimeout(moveButtonRandomly, 800);
    }

    if (effect) moveButtonRandomly();
  }, []);

  return (
    <div className="App">
      <button
        id="button"
        onClick={showDiv}
        style={{
          position: statePosition,
          display: stateDisplay,
          padding: "10px 30px",
          left: buttonPosition.left,
          top: buttonPosition.top
        }}
      >
        Clique e RECEBA
      </button>
      <div id="popup">
        {showPix && (
          <div id="popup-content">
            <span id="close-button" onClick={hideDiv}>
              X
            </span>
            <p>E o pix? Cad�?</p>
          </div>
        )}
      </div>
    </div>
  );
}
