import React from 'react';
import './Webpage1.css';

const Webpage1 = () => {
  return (
    <div>
      <div>
        <h1 className='webdev-h1'>What is Web Development?</h1>
      </div>
      {/* <div>
        <span className='webdev-span'>What is Web Development?</span>
      </div> */}
      <p className='webdev-p'>
        Web development refers to the creating, building, and maintaining of websites.<br />
        It includes aspects such as web design, web publishing, web programming, and database management. <br />
        It is the creation of an application that works over the internet i.e. websites.
      </p>
      <p className='webdev-p'>
        The word Web Development is made up of two words, that is:<br />
        WEB: It refers to websites, web pages or anything that works over the internet.<br />
        DEVELOPMENT: It refers to building the application from scratch.
      </p>
      <div className="webcontainer">
        <div className="webpage1-left">
          <h2 className="webdev-h2"  >Types of Web Development</h2>
          <ul className="webdev-list">
            <li>Front-end Development</li>
            <li>Back-end Development</li>
            <li>Full-stack Development</li>
            <li>Mobile Development</li>
            <li>Progressive Web Apps (PWAs)</li>
            <li>E-commerce Development</li>
            <li>Web Design</li>
            <li>Content Management Systems (CMS)</li>
            <li>Web Security</li>
          </ul>
        </div>
        <div className="webpage1-right">
        <h3 className="webdev-h3" style={{textAlign:"center"}}>Why Web development?</h3>
        <ul className="list1">
          <li>Focuses on client-side technologies</li>
          <li>Deals with server-side logic</li>
          <li>Works on both front-end and back-end</li>
          <li>Develops applications for mobile devices</li>
          <li>Web applications with native app-like experience</li>
          <li>Specializes in online shopping websites</li>
          <li>Emphasizes visual and user experience design</li>
          <li>Platforms for managing content</li>
          <li>Ensures web application security</li>
        </ul>
      </div>
      </div>
      <div className="big-container">
        <div className="centered-div ">
          <h3 className='right-div'>What will you learn in this course?</h3>
          <div className='right-list'>
           <li>Practical training in Web development</li>
           <li>Strengthen the web concepts from basics to advanced level</li>
           <li>How to solve competitive-level programming questions?</li>
           <li>Practice  coding questions to strengthen the concepts</li>
           <li>Solutions to the problems asked by interviewed companies</li>
          </div>
        </div>
        <div className="centered-div ">
        <h3 className='right-div'>Key Features</h3>
          <div className='right-list'>
           <li>500 hours of quality training</li>
           <li>50 hours of live mentoring & doubt clarification sessions</li>
           <li>350+ coding questions & discussion forum</li>
           <li>Offline courses</li>
           <li>Proper Guideness</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Webpage1;