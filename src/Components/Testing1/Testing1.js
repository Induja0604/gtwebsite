import React from 'react';
import './Testing1.css';

const Testing1 = () => {
  return (
    <div>
      <div>
        <h1 className='webdev-h1'>What is Testing?</h1>
      </div>
      {/* <div>
        <span className='webdev-span'>What is Testing?</span>
      </div> */}
      <p className='webdev-p'>
      Testing, in the context of software and hardware development, refers to the process of evaluating and verifying<br/>
       that a product, system, or component functions as intended and meets the specified requirements. 
      </p>
      <p className='webdev-p'>
      Testing aims to identify defects, errors, or issues before the product is released to users or deployed in a production environment.
      </p>
      <div className="webcontainer">
        <div className="webpage1-left">
          <h2 className="webdev-h2">Types of Testing</h2>
          <ul className="webdev-list">
            <li>Manual Testing</li>
            <li>Automatic Testing</li>
            <li>Functional Testing</li>
            <li>Non-Functional Testing</li>
            <li>Specialized Testing</li>
            <li>White-Box Testing</li>
            <li>Black-Box Testing</li>
          </ul>
        </div>
        <div className="webpage1-right">
        <h3 className="webdev-h3">Why Testing?</h3>
        <ul className="list1">
          <li> Quality Assurance</li>
          <li>Reliability and Stability</li>
          <li>User Satisfaction</li>
          <li>Cost Efficiency</li>
          <li>Security</li>
          <li>Compliance</li>
          <li>Performance</li>
          <li>Integration</li>
          <li> Risk Reduction</li>
        </ul>
      </div>
      </div>
      <div className="big-container">
        <div className="centered-div ">
          <h3 className='right-div'>Requirements</h3>
          <div className='right-list'>
           <li>No Technical Background</li>
           <li>Suitable for all Graduates</li>
           <li>Work on Real time Projects</li>
           <li>Placements in top it firms</li>
           <li>Online & Offline Batches</li>
          </div>
        </div>
        <div className="centered-div ">
        <h3 className='right-div'>Benefits</h3>
          <div className='right-list'>
           <li>Get certification from GT</li>
           <li>High salary Package in QA</li>
           <li>2 mock interview calls</li>
           <li>Resume Builder & Help to Find Job in Testing</li>
           <li>100% Job Assistant</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testing1;