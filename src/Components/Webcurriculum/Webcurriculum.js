import React, { useState } from 'react';
import './Webcurriculum.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


const info = [
    {
        "id": 1,
        "modulename": "Introduction to HTML Basics",
        "topics": ["Intoduction to Web Development","Overview of Web technologies Clinet-side vs. Server-side","HTML Basics","Structure of an HTML document Common HTML tags (headings,paragraphs,links,Images,lists)","Advanced HTML","Forms and Input elements","Tables","Semantic HTML"]
    },
    {
        "id": 2,
        "modulename": "CSS Fundamentals",
        "topics": ["Introduction to Css","CSS Syntax","Selectors and Properties","Colors,backgrounds and borders","Advanced CSS",
            "Box Model","Positioning(static,realtive,absolute,fixed)","Flexbox and Grid layouts"
        ]
    },
    {
        "id": 3,
        "modulename": "JavaScript Basics",
        "topics":["Introduction to JavaScript","Syntax and basic Operators","variables and data types","Functions","JavaScript in the Browser",
                  "DOM Manipulation","Event Handling","Basic form Validation" ]
    },
    {
        "id": 4,
        "modulename": "Advanced JavaScript and Frameworks",
        "topics":["Advanced JavaScript","Objects and arrays","Loops and Conditionals","ES6 Features(let,const,arrow functions,template literals)",
            "Introduction to Fron-End Frameworks","Overview of Frameworks(React,Angular,Vue)","Setting up a React project","Components and Props"
        ]
                  
    },
    {
        "id": 5,
        "modulename": "Responsive Design and APIs",
       "topics":["Responsive Web Design","Media Queries","Responsive Layouts","Mobile-First Design" ,
        "Working with APIs","Introduction to RESTful APIs","Fetching data using fetch APIs/Axios","Handling asynchronous code (promises,async,await)"
        ]
    },
    {
        "id": 6,
        "modulename": "Server-Side programming",
       "topics":["Introduction to Back-End development","Overview of Server-Side  technologies","Setting up Node.js Environment","Introduction to Express.js",
        "Working with databases","Introduction to databases(SQL and NoSQL)","Setting up a MongoDB database","CRUD operations with MongoDB"]
    },
    {
        "id": 7,
        "modulename": "Full-Stack Application Development",
        "topics":["Building a Full-Stack Application","Integrating Front-End and Back-End","User authentication(JWT,Sessions)","Deploying the application"]
    }
]


const Webcurriculum = () => {
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
                    <h1 className="curriculumh1">WEB <i><span className="highlight">Curriculum</span></i></h1>
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

export default Webcurriculum;
