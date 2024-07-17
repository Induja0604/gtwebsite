import React from 'react'
import "./About.css"
import Watermark from '../Watermark/Watermark'
import { TbTargetArrow } from "react-icons/tb";
import { GrAchievement } from "react-icons/gr";
import { FaRegEye } from "react-icons/fa";
const About = () => {
  return (
    <div>
      <Watermark/>
      <div className='aboutheader'>
      <h1>About Us</h1>
      <h4>Transform Learning, Accelerate Your Career</h4>
      </div>
      <div className='aboutsection'>
            <img src="https://media.licdn.com/dms/image/C4D16AQFHXSba8Nf89g/profile-displaybackgroundimage-shrink_200_800/0/1655103837481?e=2147483647&v=beta&t=6Jo4c8zN93e6xPmmkdIA6o8spzNTBoRCWjOWYe_tqi8" alt="Logo" />
            
            <div class="aboutcontent">
                <p>Gangaaram Tech was instituted prirmarily to enable new college recruits with basic skillsets and all rounded professionalism sought after by the VLSI and Embedded Systems industry.
                Gangaaram Tech professional development is started by VLSI industry veterans with decades of entrepreneurial background, who feel the pain of slow engineering hire process.
                 The growth prospects are far outpacing the talent pool supply.Gangaaram Tech is established to bridge this gap for the industry and help students to secure dream job right out of college.
                </p>
                
            </div>
      </div>
      <div className='aboutflexbox'>
      <div className='aboutflex'>
      <h2><i><TbTargetArrow />Mission</i></h2><br/>
        <p style={{opacity:"0.8"}}>
         <ul type="square">
         <li>Deliver top-notch educational resources in technology.</li>
          <li> Provide practical, hands-on training to ensure real-world readiness.</li>
          <li>Encourage continuous learning and professional growth.</li>
          <li> Align our programs with the latest industry trends and needs</li>
          <li>Foster a supportive and collaborative learning community.</li>
         </ul>
        </p>
      </div>
      <div className='aboutflex'>
     <h2><i><FaRegEye />Vision</i></h2><br/>
        <p style={{opacity:"0.8"}}>
         <ul type="square">
         <li>To be a leading global provider of technology solutions and educational programs.</li>
          <li>Drive innovation and excellence in the tech industry.</li>
          <li> Empower individuals and businesses through advanced tech education.</li>
          <li>Make high-quality tech education accessible to everyone.</li>
          <li>Build a vibrant community of skilled tech professionals.</li>
         </ul>
        </p>
      </div>
      <div className='aboutflex'>
        <h2><i><GrAchievement /> Achievements</i></h2><br/>
        <p style={{opacity:"0.8"}}>
         <ul type="square">
         <li> Successfully trained over 10,000 students in various tech disciplines.</li>
          <li> Earned recognition from leading tech companies and industry experts.</li>
          <li>Achieved a high job placement rate for our graduates.</li>
          <li> Developed and delivered programs led by industry experts.</li>
          <li> Established partnerships to provide customized corporate training solutions.</li>
         </ul>
        </p>
      </div>
      </div>
    </div>
  )
}

export default About;
