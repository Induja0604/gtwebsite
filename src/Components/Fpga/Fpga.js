import React from "react";
import "./Fpga.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
import fpga from "../../Asserts/fpga.jpeg"
const Fpga = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant"
    });
  }; 
  return (
    <div className="container">
      <div className="left-section">
        <h1 className="Heading1">FPGA Design and Verification</h1>
        <p className="Heading2">4.0 (1623 Students)</p>
        <div className="rating" data-rating="4.5">
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
        </div>
        <div className="Details">
          <p>
          "Are you ready to land your dream job at a leading ECE-based company  ?".<br/>Our FPGA Design and Verification course is the perfect starting point.<br/> 
          It offers a comprehensive introduction to FPGA design and verification, helping you build a strong foundation in this advanced field.
          </p>
          <p>
          Our course makes learning FPGA design and verification engaging and enjoyable. <br/>
          Gain practical experience with real-world applications of FPGA design and verification concepts.
          </p>
          <p>
          Receive guidance from experienced instructors and personalized mentorship from industry professionals.<br/> 
          Learn to solve problems commonly posed by leading tech companies, ensuring you are job-ready.
          </p>
          <p className="points">
           <li>Trusted by Over 10,000 Students</li>
           <li>Crafted by Industry Experts</li>
           <li>Comprehensive Learning Materials: Video Lectures, Quizzes, Discussion Forums, and Coding Challenges</li>
          </p>
          <p>
          Our course covers the essential concepts of FPGA design and verification, the building blocks of numerous real-life applications. 
    </p>
          
          
          <div className="icons-section">
        <div className="icon-item ">
          <i className="fa fa-certificate"></i>
          <p>Certificate of Completion</p>
        </div>
        <div className="icon-item">
          <i className="fa fa-handshake"></i>
          <p>Placement Support</p>
        </div>
        <div className="icon-item">
          <i className="fa fa-calendar-alt"></i>
          <p>2024 Updated Courses</p>
        </div>
      </div>
        </div>
      </div>
      <div className="right-section">
        <div className="courseimage-fpga">
          <img src={fpga} alt="Course Image"  />
          <div className="buttons1">
          <Link to="/registrationpage"><button className="btn1" onClick={scrollToTop} style={{marginLeft:"40%"}}>Enroll Now</button></Link>
          </div>
        </div>
      </div>
      </div>

  );
};

export default Fpga;
