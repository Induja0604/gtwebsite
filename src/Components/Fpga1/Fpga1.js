import React from 'react';
import './Fpga1.css';

const Fpga1 = () => {
  return (
    <div>
      <div>
        <h1 className='webdev-h1'>WHY FPGA?</h1>
      </div>
      <div>
        <span className='webdev-span'>What is an FPGA?</span>
      </div>
      <p className='webdev-p'>
      An FPGA is essentially a collection of logic blocks and interconnects that can be configured to perform various digital functions.<br />
      Unlike traditional fixed-function integrated circuits (ICs), FPGAs are "field-programmable," <br />
      meaning they can be reprogrammed by the user after being deployed in the field. This reprogrammability is a key feature that sets FPGAs apart from other types of ICs.
      </p>
      <p className='webdev-p'>
      Field Programmable Gate Arrays (FPGAs) are a type of integrated circuit that can be programmed and reprogrammed by the user after manufacturing.<br />
      They offer a unique combination of hardware flexibility and high performance, making them valuable for a wide range of applications
      </p>
      <div className="container">
        <div className="webpage1-left">
          <h2 className="webdev-h2">How FPGAs Work</h2>
          <ul className="webdev-list">
            <li>Design Entry</li>
            <li>Synthesis</li>
            <li>Place and Route</li>
            <li>Bitstream Generation</li>
            <li>Programming</li>
          </ul>
        </div>
        <div className="webpage1-right">
        <h3 className="webdev-h3">Design Verification Training</h3>
        <ul className="list1">
          <li>Digital Electronics</li>
          <li>Verilog</li>
          <li> SystemVerilog(SV)</li>
          <li> Universal Verification Methodology(UVM)</li>
          <li>Computer Skills (Linux,Windows)</li>
          <li>Industrial Tools Knowledge ( ModelSim,Xilinx ISE,VCS)</li>
        </ul>
      </div>
      </div>
      <div className="big-container">
        <div className="centered-div ">
          <h3 className='right-div'>Eligibility</h3>
          <div className='right-list'>
           <li> B.E/B.Tech in ECE/EEE.</li>
           <li>M.E/M.Tech/M.S in VLSI System Design/Embedded Systems/Digital Electronics.</li>
           <li>Must be familiar with Digital Electronics</li>
          </div>
        </div>
        <div className="centered-div ">
        <h3 className='right-div'>Course Features and Highlights</h3>
          <div className='right-list'>
           <li>Classes conducted by working professionals from industry.</li>
           <li>Emphasized on concepts , Industry requirements</li>
           <li>Assignments with Verification flow.</li>
           <li>Projects on Industry accepted protocols.</li>
           <li>Lab Support with classroom practice handouts.</li>
           <li>Course material</li>
           <li>Soft skills development, job oriented trainings.</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fpga1;