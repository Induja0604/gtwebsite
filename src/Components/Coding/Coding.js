import React from 'react'
import "./Coding.css"
import { BsJournalCode } from "react-icons/bs";
import Watermark from "../Watermark/Watermark.js";
import Advertisement1 from '../Advertisement1/Advertisement1';
import Advertisement2 from '../Advertisement2/Advertisement2';
const Coding = () => {
  return (
    <div>
      <Watermark/>
      <div className='coding'>
        <h1 className='codingh1'>CODE <i style={{color: '#ebd913' }}>MASTERS</i></h1>
        <p className='codingp'><BsJournalCode /> Join us at Code Masters, and let your coding journey reach new heights! Happy Coding!</p>
      </div>
      <div className="code-masters">
      <h1 className="codemastersh1"> Join Code Masters – The Ultimate Coding Competition by Gangaaram Technologies!</h1>
      <p className="codemastersp">
        Are you ready to showcase your coding skills and emerge as a coding master? Gangaaram Technologies provides you with a suitable platform and invites you to showcase your skills in Code Masters, an exhilarating coding competition tailored for Python and Java along with other 15 computer language enthusiasts.
      </p>
      <Advertisement1/>
      <Advertisement2 />
      <ul>
        <li><strong>Prize Money:</strong> Win a chance to grab the prestigious title of Code Master and seize a remarkable prize of <i style={{color: 'tomato' }}>5,000 INR!</i></li>
        <li><strong>Skill Enhancement:</strong> Hone your coding skills, refine your problem-solving abilities, and gain valuable experience.</li>
        <li><strong>Python & Java Challenge:</strong> Compete in your preferred language – Python or Java along with other 15 computer languages, prove your proficiency.</li>
        <li><strong>Special Certificates:</strong> Every participant will receive an E-Certificate to acknowledge their participation and effort.</li>
        <li><strong>Showcase Your Talent:</strong> Stand a chance to showcase your talent on a grand platform and gain recognition in the tech community.</li>
        <li><strong>Career Opportunities:</strong> Impress potential employers with your coding prowess and open doors to exciting career opportunities.</li>
      </ul>
      <p className="codemastersp">
        Don’t miss out on this incredible opportunity to challenge yourself, learn, and be rewarded for your coding brilliance!
      </p>
      <p className="codemastersp">
        For more information, mail us at <a href="mailto:info@gangaaram-tech.com">info@gangaaram-tech.com</a>
      </p>
    </div>
    <h1 style={{textAlign:"center"}}>Here are some <i style={{color: '#ebd913' }}>Challenges</i></h1>
  <div className='codingflex'>
    
   <div className='codingflexbox'>
    <img src="https://www.gangaaram-tech.com/wp-content/uploads/2023/11/image-1.png" alt=""/>
   </div>
   <div className='codingflexbox'>
   <img src="https://www.gangaaram-tech.com/wp-content/uploads/2023/09/coding-poster-1.png" alt=""/>
   </div>
   <div className='codingflexbox'>
   <img src="https://www.gangaaram-tech.com/wp-content/uploads/2023/09/coding-poster2-1.png" alt=""/>
   </div>
  </div>
    </div>
  )
}

export default Coding
