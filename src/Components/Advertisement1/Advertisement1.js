import React, { useState, useEffect } from 'react';
import './Advertisement1.css';
import adv1 from "../../Asserts/adv3.png";

function Advertisement1() {
  const [blink, setBlink] = useState(true);
  const [blinkCount, setBlinkCount] = useState(0);
  const [showAd, setShowAd] = useState(true); // added state to control ad visibility

  const handleClose = () => {
    setShowAd(false);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBlink(!blink);
      setBlinkCount(blinkCount + 1);
      if (blinkCount >= 10) { // blink 10 times
        clearInterval(intervalId);
      }
    }, 500); // blink every 500ms
    return () => clearInterval(intervalId); // added cleanup function
  }, [blink, blinkCount]);

  return (
    <div
      className="advertisement-container"
      style={{ display: showAd ? 'block' : 'none' }} // added style to control ad visibility
    >
      <img
        src={adv1}
        alt="Advertisement"
        className={blink? "advertisement-image blink" : "advertisement-image"}
      />
      {showAd && (
        <span className="close-button1" onClick={handleClose}>×</span>
      )}
    </div>
  );
}

export default Advertisement1;