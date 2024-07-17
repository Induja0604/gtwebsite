import React from "react";
import "./Choose.css"
import { MdOutlineReportProblem } from "react-icons/md";
import { AiOutlineSolution } from "react-icons/ai";
const Choose = () =>{
    return (
        <div>
           <div className="choose">
            <div>
                <h1 className="chooseh1">Why to <i><span style={{color:"#ebd913"}}>Choose Us ?</span></i></h1>
                <p className="choosep">"Choose GANGAARAM TECHNOLOGIES to transform technical graduates into 
                    skilled software professionals, bridging the gap between education and industry success."</p>
            </div>
            <div className="chooseflex">
               <div className="chooseflexbox">
               <h2><MdOutlineReportProblem />The Problem</h2>
                <ul>
                    <li>New college graduates have overwhelmingly inadequate practical know-how of the subject.</li>
                    <li>Professional training offered after college is not enough for these graduates to secure a job.</li>
                    <li>Many graduates end up in the wrong job for 3-5 years at the start of their careers.</li>
                    <li>Why isn’t there a solution for this problem?</li>
                </ul>
               </div>
               <div className="chooseflexbox">
               <h2><AiOutlineSolution />The Solution: Gangaaram Tech</h2>
               <ul>
                    <li>Instituted primarily to equip new college recruits with basic skill sets and 
                        well-rounded professionalism sought after by the VLSI and Embedded Systems industry.</li>
                    <li>Founded by VLSI/Software industry veterans with decades of entrepreneurial experience, who 
                        understand the pain of a slow engineering hiring process.</li>
                    <li>Aims to bridge the gap between industry growth prospects and the talent pool supply.</li>
                    <li>Helps students secure their dream job right out of college.</li>
                </ul>
               </div>
            </div>
           </div>
        </div>
    )
}
export default  Choose;