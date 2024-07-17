import React from "react";
import "./Webpage.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {Link} from "react-router-dom"
const Webpage = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant"
    });
  }; 
  return (
    <div className="webcontainer">
      <div className="left-section">
        <h1 className="Heading1">WEB DEVELOPMENT</h1>
        <p className="Heading2">4.0 (1354 Students)</p>
        <div className="rating" data-rating="4.5">
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
        </div>
        <div className="Details">
          <p>Are you ready to land your dream job at a top IT company? Our Web Development course is the ideal starting point. 
           <br/> It offers a comprehensive introduction to web development, helping you build a robust foundation in this dynamic field.
          </p>
          <p>
          Our course makes learning web development engaging and fun. <br/>
          Gain practical experience with real-world applications of web development concepts
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
          Our course covers the essential concepts of web development, the building blocks of numerous real-life applications.
           Embark on your journey to a successful IT career with us today!
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
        <div className="course-imageweb">
          <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/is_web_development_good_career.jpg" alt="Course Image" />
          <div className="buttons1">
          <Link to="/registrationpage"><button className="btn1" onClick={scrollToTop} style={{marginLeft:"40%"}}>Enroll Now</button></Link>
           
          </div>
        </div>
      </div>
      </div>

  );
};

export default Webpage;
