import React, { useState } from 'react';
import './Pythoncurriculum.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


const info = [
    {
        "id": 1,
        "modulename": "Introduction to Python",
        "submodules": [
            {
                "id": 1.1,
                "submodulename": "Getting Started",
                "topics": [
                    "Introduction to Python",
                    "Installing Python",
                    "Setting Up Development Environment"
                ]
            },
            {
                "id": 1.2,
                "submodulename": "Basic Syntax",
                "topics": [
                    "Python Syntax and Indentation",
                    "Variables and Data Types",
                    "Basic Input and Output"
                ]
            }
        ]
    },
    {
        "id": 2,
        "modulename": "Control Structures",
        "submodules": [
            {
                "id": 2.1,
                "submodulename": "Conditional Statements",
                "topics": [
                    "if, else, and elif Statements",
                    "Nested Conditions"
                ]
            },
            {
                "id": 2.2,
                "submodulename": "Loops",
                "topics": [
                    "for Loops",
                    "while Loops",
                    "Nested Loops"
                ]
            },
            {
                "id": 2.3,
                "submodulename": "Comprehensions",
                "topics": [
                    "List Comprehensions",
                    "Dictionary Comprehensions",
                    "Set Comprehensions"
                ]
            }
        ]
    },
    {
        "id": 3,
        "modulename": "Functions",
        "submodules": [
            {
                "id": 3.1,
                "submodulename": "Defining Functions",
                "topics": [
                    "Function Syntax",
                    "Arguments and Parameters",
                    "Return Values"
                ]
            },
            {
                "id": 3.2,
                "submodulename": "Advanced Functions",
                "topics": [
                    "Lambda Functions",
                    "Decorators",
                    "Recursion"
                ]
            }
        ]
    },
    {
        "id": 4,
        "modulename": "Data Structures",
        "submodules": [
            {
                "id": 4.1,
                "submodulename": "Lists and Tuples",
                "topics": [
                    "Creating Lists and Tuples",
                    "List and Tuple Methods",
                    "List Comprehensions"
                ]
            },
            {
                "id": 4.2,
                "submodulename": "Dictionaries and Sets",
                "topics": [
                    "Creating Dictionaries and Sets",
                    "Dictionary and Set Methods",
                    "Dictionary Comprehensions"
                ]
            },
            {
                "id": 4.3,
                "submodulename": "Advanced Data Structures",
                "topics": [
                    "Collections Module",
                    "Named Tuples",
                    "Defaultdict and Counter"
                ]
            }
        ]
    },
    {
        "id": 5,
        "modulename": "Modules and Packages",
        "submodules": [
            {
                "id": 5.1,
                "submodulename": "Standard Library",
                "topics": [
                    "Importing Modules",
                    "Commonly Used Standard Library Modules"
                ]
            },
            {
                "id": 5.2,
                "submodulename": "Third-Party Packages",
                "topics": [
                    "Installing Packages with pip",
                    "Popular Third-Party Packages"
                ]
            },
            {
                "id": 5.3,
                "submodulename": "Creating Packages",
                "topics": [
                    "Structuring Your Code",
                    "Creating and Using Packages"
                ]
            }
        ]
    },
    {
        "id": 6,
        "modulename": "File Handling",
        "submodules": [
            {
                "id": 6.1,
                "submodulename": "Reading and Writing Files",
                "topics": [
                    "Opening and Closing Files",
                    "Reading from Files",
                    "Writing to Files"
                ]
            },
            {
                "id": 6.2,
                "submodulename": "Working with File Paths",
                "topics": [
                    "Using os and pathlib Modules",
                    "File and Directory Operations"
                ]
            },
            {
                "id": 6.3,
                "submodulename": "File Formats",
                "topics": [
                    "Working with CSV Files",
                    "Working with JSON Files"
                ]
            }
        ]
    },
    {
        "id": 7,
        "modulename": "Error and Exception Handling",
        "submodules": [
            {
                "id": 7.1,
                "submodulename": "Basic Exception Handling",
                "topics": [
                    "try, except, else, and finally",
                    "Raising Exceptions"
                ]
            },
            {
                "id": 7.2,
                "submodulename": "Advanced Exception Handling",
                "topics": [
                    "Creating Custom Exceptions",
                    "Logging Errors"
                ]
            }
        ]
    },
    {
        "id": 8,
        "modulename": "Object-Oriented Programming",
        "submodules": [
            {
                "id": 8.1,
                "submodulename": "Classes and Objects",
                "topics": [
                    "Defining Classes",
                    "Creating Objects",
                    "Instance and Class Variables"
                ]
            },
            {
                "id": 8.2,
                "submodulename": "Inheritance",
                "topics": [
                    "Basic Inheritance",
                    "Method Overriding",
                    "Multiple Inheritance"
                ]
            },
            {
                "id": 8.3,
                "submodulename": "Advanced OOP",
                "topics": [
                    "Magic Methods",
                    "Class and Static Methods",
                    "Property Decorators"
                ]
            }
        ]
    },
    {
        "id": 9,
        "modulename": "Web Development with Python",
        "submodules": [
            {
                "id": 9.1,
                "submodulename": "Flask",
                "topics": [
                    "Introduction to Flask",
                    "Routing",
                    "Templates"
                ]
            },
            {
                "id": 9.2,
                "submodulename": "Django",
                "topics": [
                    "Introduction to Django",
                    "Models and ORM",
                    "Views and Templates"
                ]
            },
            {
                "id": 9.3,
                "submodulename": "APIs with Flask and Django",
                "topics": [
                    "Building RESTful APIs",
                    "Authentication and Authorization"
                ]
            }
        ]
    },
    {
        "id": 10,
        "modulename": "Data Science with Python",
        "submodules": [
            {
                "id": 10.1,
                "submodulename": "NumPy",
                "topics": [
                    "Introduction to NumPy",
                    "Array Operations",
                    "Broadcasting and Vectorization"
                ]
            },
            {
                "id": 10.2,
                "submodulename": "Pandas",
                "topics": [
                    "Introduction to Pandas",
                    "DataFrames and Series",
                    "Data Cleaning and Manipulation"
                ]
            },
            {
                "id": 10.3,
                "submodulename": "Data Visualization",
                "topics": [
                    "Matplotlib Basics",
                    "Seaborn for Statistical Plots",
                    "Creating Interactive Visualizations with Plotly"
                ]
            }
        ]
    }
]

const Pythoncurriculum = () => {
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
                    <h1 className="curriculumh1"> Python <i><span className="highlight">Curriculum</span></i></h1>
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

export default Pythoncurriculum;
