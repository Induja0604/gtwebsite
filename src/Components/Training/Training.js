import React from 'react'
import "./Training.css"
import fpga from "../../Asserts/fpga.jpeg";
import testing from "../../Asserts/testing.jpg";
import { MdOutlineTouchApp } from "react-icons/md";
import {Link} from "react-router-dom"
const Training = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant"
    });
  }; 
  return (
    <div>
      <div className='training'>
        <h1>Training <i><span style={{ color: '#ebd913' }}>Programs</span></i></h1>
        <p style={{textAlign:"center"}}><MdOutlineTouchApp /> Gangaaram Tech challenges the student to be a strong independent thinker and develop
        foundations for a strong Engineering Career</p>
      </div>
      <div className='traininggrid'>
        <div className='traininggridbox'>
       <img src={fpga} alt=""/>
       <h2>FPGA Design and Verification</h2>
       <Link to="/fpgapage" onClick={scrollToTop} style={{textDecoration:"none",color:"black"}} className='trainingbutton'>Explore Now</Link>
        </div>
        
        <div className='traininggridbox'>
        <img src={testing} alt=""/>
       <h2>Manual-Automation-Api Testing</h2>
       <Link to="/testingpage" onClick={scrollToTop}  className='trainingbutton' style={{textDecoration:"none",color:"black"}}>Explore Now</Link>
        </div>
        <div className='traininggridbox'>
        <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/is_web_development_good_career.jpg"alt=""/>
       <h2>Web Development</h2>
       <Link to="/webpage" onClick={scrollToTop}  className='trainingbutton' style={{textDecoration:"none",color:"black"}}>Explore Now</Link>
        </div>
        <div className='traininggridbox'>
        <img src="https://www.cetpainfotech.com/wp-content/uploads/2023/12/How-To-Become-Python-Full-Stack-Developer-in-2024.jpg"alt=""/>
       <h2>Python Full Stack Development</h2>
       <Link to="/pythonpage"  onClick={scrollToTop} className='trainingbutton'style={{textDecoration:"none",color:"black"}}>Explore Now</Link>
        </div>
      </div>
      <br/>
      <br/>
      <hr/>
    </div>
  )
}

export default Training;
