import React from 'react';
import './Internship.css';
import vsli from '../../Asserts/vsli.jpeg';
import fpga from '../../Asserts/fpga.jpeg';
import { MdLocationOn } from 'react-icons/md';
import { AiFillCalendar } from 'react-icons/ai';
import { HiOutlineBanknotes } from 'react-icons/hi2';
import Tooltip from '../Tooltip/Tooltip';
import { HiAcademicCap } from "react-icons/hi";

const Internship = () => {
  const vlsiQualifications = [
    'Eligibility: M.Tech/B.Tech  in Electronics and Communication Engineering.',
    'VLSI Background.',
    'Proficiency in C or Python or Verilog.',
  ];

  const fpgaQualifications = [
    'Eligibility: M.E/M.Tech  in Electronics and Communication Engineering',
    'VLSI System Design/Embedded System/Digital Electronics',
    'Must be familiar with Digital Electronics',
  ];

  const webDevelopmentQualifications = [
    'Eligibility:  B.E/B.Tech in Computer Science/Computer Engineering.',
    'Experience in web development technologies.',
    'Knowledge of HTML, CSS, and JavaScript.',
    'Familiarity with frameworks like React or Angular.',
  ];

  const pythonFullStackQualifications = [
    'Eligibility: B.E/B.Tech  in Computer Science/Computer Engineering.',
    'Experience in Python development.',
    'Knowledge of full stack development.',
    'Familiarity with frameworks like Django or Flask.',
  ];

  return (
    <div className="internship">
      <h1>
        Intern<i><span style={{ color: '#ebd913' }}>ship</span></i>
      </h1>
      <p className='internshipp' style={{textAlign:"center"}}><HiAcademicCap />Unlock Your Potential with Gangaaram Tech: Pioneering Internships for Future Innovators!</p>
      <div className="internshipflex">
        <div className="internshipflexbox">
          <h3>Hardware and Digital Design</h3>
          <div className="hardwareflex">
            <div className="hardwareflexbox">
            <Tooltip text={vlsiQualifications}>
              <img src={vsli} alt="vsli" />
              <p><b>VLSI internship</b></p>
              <p><MdLocationOn />OnSite</p>
              <p><AiFillCalendar />6 Months</p>
              <p><HiOutlineBanknotes /> &#8377;5000/month</p>
              </Tooltip>
            </div>
            <div className="hardwareflexbox">
            <Tooltip text={fpgaQualifications}>
              <img src={fpga} alt="fpga" />
              <p><b>FPGA Design and Verification</b></p>
              <p><MdLocationOn />OnSite</p>
              <p><AiFillCalendar />6 Months</p>
              <p><HiOutlineBanknotes /> &#8377;5000/month</p>
            </Tooltip>
            </div>
          </div>
        </div>
        <div className="internshipflexbox">
          <h3>Software Development and Programming</h3>
          <div className="hardwareflex">
            <div className="hardwareflexbox">
            <Tooltip text={webDevelopmentQualifications}>
              <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/is_web_development_good_career.jpg" alt="web" />
               <p><b>Web Development</b></p>
              <p><MdLocationOn />OnSite</p>
              <p><AiFillCalendar />6 Months</p>
              <p><HiOutlineBanknotes /> &#8377;5000/month</p>
              </Tooltip>
            </div>
            <div className="hardwareflexbox">
            <Tooltip text={pythonFullStackQualifications}>
              <img src="https://www.cetpainfotech.com/wp-content/uploads/2023/12/How-To-Become-Python-Full-Stack-Developer-in-2024.jpg" alt="python" />
              <p><b>Python Full Stack Development</b></p>
              <p><MdLocationOn />OnSite</p>
              <p><AiFillCalendar />6 Months</p>
              <p><HiOutlineBanknotes /> &#8377;5000/month</p>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Internship;
