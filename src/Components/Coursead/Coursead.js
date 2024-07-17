import React, { useState, useEffect } from 'react';
import "./Coursead.css";
import {Link} from "react-router-dom";
import { FaHandPointRight } from "react-icons/fa";

const Coursead = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }; 
  const [showAd, setShowAd] = useState(false);

  useEffect(() => {
    const hasSeenAd = localStorage.getItem('hasSeenAd');
    if (!hasSeenAd) {
      setShowAd(true);
      localStorage.setItem('hasSeenAd', 'true');

    }
      const removeAdTimeout = setTimeout(() => {
        localStorage.removeItem('hasSeenAd');
      }, 5*60*1000); 
      return () => clearTimeout(removeAdTimeout);

    
  }, []);

  const handleCloseAd = () => {
    setShowAd(false);
  };

  return (
    <>
      {showAd && (
        <div className="course-ad-overlay">
          <div className="course-ad">
            <button className="close-btn" onClick={handleCloseAd}>
              &times;
            </button>
            <h3>Check out our latest course!</h3>
            <p><FaHandPointRight />  Going to be start from <span style={{color:"tomato"}}>July 1st</span></p>
            <div className="coursead">
               <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/is_web_development_good_career.jpg" alt=""/>
               <h2>Web Development Training</h2>
               <p>Unlock the world of web development with our comprehensive course. 
                Learn the fundamentals of HTML, CSS, and JavaScript, and gain hands-on 
                experience with modern frameworks to build responsive and dynamic websites from scratch.</p>
                <Link to="/registrationpage"><button className="courseadbutton" onClick={scrollToTop}>Enroll now</button></Link>
               </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Coursead;
