import React from 'react';
import './Tooltip.css';
import { VscDebugBreakpointLog } from "react-icons/vsc";
import {Link} from "react-router-dom"
const Tooltip = ({ children, text }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant"
    });
  }; 
  return (
    
    <div className="tooltipcontainer">
      {children}
      <div className="tooltiptext">
        <ul>
          {text.map((item, index) => (
            <li style={{listStyle:"none"}} key={index}><VscDebugBreakpointLog />{item}</li>
          ))}
        </ul>
        <Link to="/registrationpage"><button className='tooltipbutton' onClick={scrollToTop}>Register</button></Link>
      </div>
    </div>
  );
};

export default Tooltip;
