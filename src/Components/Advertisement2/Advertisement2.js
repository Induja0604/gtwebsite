import React, { useState, useEffect } from 'react';
import './Advertisement2.css';
import adv2 from "../../Asserts/adv2.jpg"

const Advertisement2 = () => {
  const [showAd, setShowAd] = useState(true);

  const handleClose = () => {
    setShowAd(false);
  };

  useEffect(() => {
    let timer;
    if (showAd) {
      timer = setTimeout(() => {
        setShowAd(false);
      }, 3000);
    }
  
    return () => {
      clearTimeout(timer);
    };
  }, [showAd]);

  useEffect(() => {
    let timer;
    if (!showAd) {
      timer = setTimeout(() => {
        setShowAd(true);
      }, 2000); 
    }
    return () => {
      clearTimeout(timer);
    };
  }, [showAd]);

  return (
    <div className="advertisement-container2">
      {showAd && (
        <div className="advertisement-content2">
          <img
            src={adv2}
            alt="Advertisement"
            className="advertisement-image2"
          />
          <span className="close-button2" onClick={handleClose}></span>
        </div>
      )}
    </div>
  );
};

export default Advertisement2;