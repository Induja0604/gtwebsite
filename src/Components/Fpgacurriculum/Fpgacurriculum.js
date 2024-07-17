import React, { useState } from 'react';
import './Fpgacurriculum.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


const info = [
    {
        id: 1,
        modulename: "ASIC Functional Verification",
        topics: [
            "Basics of Digital Design using Verilog",
            "SystemVerilog and UVM",
            "Final Project"
        ]
    },
    {
        id: 2,
        modulename: "FPGA Design",
        topics: [
            "Basics of Digital Design using Verilog",
            "Xilinx FPGA Design Flow",
            "Final Project"
        ]
    },
    {
        id: 3,
        modulename: "Embedded Software",
        topics: [
            "Advance C and Data Structures",
            "Embedded CPU (ARM) application development using SDK",
            "Final Project"
        ]
    }
];

const Fpgacurriculum = () => {
    const [visibleSection, setVisibleSection] = useState(null);
    const [visibleSubSection, setVisibleSubSection] = useState(null);

    const toggleCurriculumVisibility = (section) => {
        setVisibleSection(visibleSection === section ? null : section);
        setVisibleSubSection(null); 
    };

    const toggleSubmoduleVisibility = (subsection) => {
        setVisibleSubSection(visibleSubSection === subsection ? null : subsection);
    };
    return (
        <div className="big-container2"> 
            <div className="webright">
                <div>
                    <h1 className="curriculumh1"> Fpga <i><span className="highlight">Curriculum</span></i></h1>
                </div>
                <div>
                {info.map((item) => (
                        <div key={item.id}>
                            <div className="curriculum-header1" onClick={() => toggleCurriculumVisibility(item.id)}>
                                <h3 className='curr-font'>{item.modulename}</h3>
                                <FontAwesomeIcon icon={faPlus} className={`plus-icon ${visibleSection === item.id ? 'rotate' : ''}`} />
                            </div>
                            <div>
                                {item.submodules ? (
                                    <div className={`curriculum-content ${visibleSection === item.id ? 'show' : ''}`}>
                                        {item.submodules.map((sub) => (
                                            <div key={sub.id}>
                                                <div className="submodule-header" onClick={() => toggleSubmoduleVisibility(sub.id)}>
                                                    <h4>{sub.submodulename}</h4>
                                                    <FontAwesomeIcon icon={faPlus} className={`plus-icon ${visibleSubSection === sub.id ? 'rotate' : ''}`} />
                                                </div>
                                                <div className={`submodule-content ${visibleSubSection === sub.id ? 'show' : ''}`}>
                                                    <ul type='square'>
                                                        {sub.topics.map((topic, k) => (
                                                            <li key={k}>{topic}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className={`submodule-content ${visibleSection === item.id ? 'show' : ''}`}>
                                        <ul type='square'>
                                            {item.topics.map((topic, k) => (
                                                <li key={k}>{topic}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Fpgacurriculum;
