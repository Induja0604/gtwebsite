import React, { useState } from 'react';
import './Testingcurriculum.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const info = [
    {
        id: 1, modulename: "Manual Testing", submodules: [
            {
                id: 1.1, submodulename: "Fundamentals of Testing", topics: [" Fundamentals of testing","Project & team members","What is testing?"," Testing throughout the software life cycle",
                    "Testing principles","Software development models (overview of all models) - SDLC "
                ]
            },
            {
                id: 1.2, submodulename: "Fundamental Test Process", topics: ["Fundamental test process Overview of understanding requirements and creating test scenarios, test design, test planning, test execution, test report",
                     "What is software?","Waterfall model","Types of software applications (desktop, web, & mobile)","Agile model, V Shape,Spiral model (advantages & disadvantages), roles ceremonies & artifats","Types of organizations",
                     "Sprint, Scrum, test management tool (JIRA, ZEPHYR)","Type of domain"
                  ]
            },
            {
                id: 1.3, submodulename: "Test Types & Test Levels", topics: ["White-box testing","Usability testing","Black-box testing","UI UX testing","Functional testing","L10N, I18N, G11N testing","Smoke & sanity testing","Compatibility testing",
                    "Regression and retesting","Performance testing","User acceptance testing -alpha & beta programs","Security testing","Non-functional testing "
                ]
            },
            {
                id: 1.4, submodulename: "Test Design Techniques", topics: ["Structure-based or whitebox techniques (overview)","Traceability matrix & test coverage","Specification-based or black-box techniques","Defect life cycle, priority & severity of defects","Experience-based techniques",
                    "Real-time defect reporting and practicals"
                 ]
            },
            {
                id: 1.5, submodulename: "Test Management", topics: ["Test organization","Test progress monitoring and control","Test plans, estimates, and strategies","Entry & exit criteria" ]
            },
            {
                id: 1.6, submodulename: "Lab Sessions", topics: ["Creating defects in Jira. Practical on Jira Tool for assignments and project work","Creating test cases from requirement. Practicals on creating defects in Jira" ]
            }
        ]
    },
    {
        id: 2, modulename: "Automation Testing", submodules: [
            {
                id: 2.1, submodulename: "Static Website Design", topics: [" Software Development Fundamentals","CSS Basics","HTML Basics","Bootstrap Components"]
            },
            {
                id: 2.2, submodulename: "Responsive Website Design", topics: ["Block Vs Inline elements","Bootstrap Grid System","Buttons, utilities, colors"]
            },
            {
                id: 2.3, submodulename: "Programming Foundations with Python", topics: ["Operators, Datatypes and variables, strings & numbers.","Conditional Statements","Intro to Databases"]
            },
        ]
    },
    {
        id: 3, modulename: "API Testing", submodules: [
            {
                id: 3.1, submodulename: "Intro to REST API", topics: ["Web services","REST resources"]
            },
            {
                id: 3.2, submodulename: "API Automation", topics: ["Framework","Maven","Log4j","Testings"]
            },
        ]
    },
    {
        id: 4, modulename: "Selenium", submodules: [
            {
                id: 4.1, submodulename: "Module-1", topics: ["What is Automation Testing?","Waits in Selenium","What is Selenium?","Identifying and interacting with HTML elements using WebDriver",
                    "What is WebDriver?","Dynamic CSS and XPath selector creation","Features, Architecture of Selenium","Following sibling","Download Selenium Jars","Preceding sibling","Locators in Selenium (id,name, class name)",
                    "Ancestor","Invoking for Web browsers (Chrome, Firefox, Edge),","Parent","Navigation commands,WebDriver commands,FindElements command"
                ]
            },
            {
                id: 4.2, submodulename: "Module-2", topics: ["Check Box & Radiobuttons, Drop Down,Multiple Selects","How to upload & downloadfiles, take screenshot","WebTable Handling,Alerts, Handling iFrames,Window Handles",
                    "Excel handling using Apache POI, reading & writing from Excel sheet","Action class: Mouse events,click, doubleClick","Introduction to Maven repository & commands,POM.XML"
                ]
            },
            {
                id: 4.3, submodulename: "Module-3", topics: ["JavaScriptExecutor, how to handle hid","TestNG Annotations - Hands-on to explain how it's used in the projects","DataProvider","dependsOnMethods & dependsOnGroup",
                    "TestNG Listeners, Log 4j ","den elements, how to handle broken links","BDD Cucumber (Overview of all frameworks)","Page Object Model","Cucumber framework creation with POM","Keyword Driven","Cucumber framework creation with POM & Executing Automation scripts using BDD",
                     "Priority", "Run from TestNG and tags in TestNG.XML file","Groups","Hybrid Driven"," Data-Driven" ]
            }
        ]
    },
    {
        id: 5, modulename: "Java", submodules: [
            {
                id: 5.1, submodulename: "Introduction to Java", topics: ["History and Evolution","Installing JDK","Features of Java","Configuring IDE","Java Virtual Machine(JVM)"]
            },
            {
                id: 5.2, submodulename: " Java Basics", topics: ["Structure of a Java Program","Variables and Data types","Operators and Expressions"]
            },
            {
                id: 5.3, submodulename: " Control Flow Statements", topics: ["Conditional Statements","Looping Statements"]
            },
            {
                id: 5.4, submodulename: "OOPS concepts", topics: ["Objects and classes","Inheritance, Polymorphism, Encapsulation, Abstraction","Default and parameterized constructors","Garbage Collection"]
            },
            {
                id: 5.5, submodulename: "Exception Handling", topics: ["Types of Exceptions","Exception Hierarchy","Handling exceptions","Throwing exceptions"]
            },
            {
                id: 5.6, submodulename: "File Handling", topics: ["File I/0","Working with FileReader and FileWriter"]
            },
            {
                id: 5.7, submodulename: "Collections Framework  ", topics: ["List, Set, Map","ArrayList, LinkedList, HashSet, HashMap","Traversing Collections","Understanding iterators"]
            },
            {
                id: 5.8, submodulename: "Multithreading", topics: ["Creating and running threads","Thread synchronization","Thread safety and Deadlock"]
            },
            {
                id: 5.9, submodulename: "Introduction to Java API", topics: ["Working with Java Standard Libraries"]
            },
            {
                id: 5.10, submodulename: "Basic Design Patterns", topics: ["Understanding Common Design Patterns","Singleton, Factory, Observer"]
            },
            {
                id: 5.11, submodulename: "Unit Testing with JUnit", topics: ["Writing and executing test cases"]
            },
            {
                id: 5.12, submodulename: "Basic GUI Programming", topics: ["Introduction to AWT and Swing"]
            },
            {
                id: 5.13, submodulename: "Introduction to JDBC", topics: ["Connecting to Databases"]
            },
        ]
    },
    {
        id: 6, modulename: "JUnit", submodules: [
            {
                id: 6.1, submodulename: "Module-1", topics: ["History and Evolution","JUnit","JUint Working"]
            },
            {
                id: 6.2, submodulename: "Module-2", topics: ["JUnit Architecture","JUnit Platform","Junit Jupiter","Junit Vintage"]
            },
            {
                id: 6.3, submodulename: "Module-3", topics: ["Benefits of JUnit","Features of JUnit"]
            },
            {
                id: 6.4, submodulename: "Module-4", topics: [" Exception Handling","Improved Test Display Names","Group Assertions for Comprehensive Testing",
                    "Dependency Injection","Iterative Testing","Conditional Tests"
                ]
            },
        ]
    },
    {
        id: 7, modulename: "TestNG", submodules: [
            {
                id: 7.1, submodulename: "Introduction to TestNG ", topics: ["Introduction to TestNG"]
            },
            {
                id: 7.2, submodulename: " Setting up the Software", topics: ["Setting up Software","JDK Installation"]
            },
            {
                id: 7.3, submodulename: " Apache Maven Local Setup", topics: ["Maven Setup"]
            },
            {
                id: 7.4, submodulename: "Eclipse IDE Download & Installation", topics: ["Installing Eclipse IDE"]
            },
            {
                id: 7.5, submodulename: "TestNG Setup", topics: ["Setting up TestNG","TestNG Jar Setup","First TestNG Program"]
            },
            {
                id: 7.6, submodulename: "Annotations", topics: ["Overview","Factory Annotations","Attributes"]
            },
            {
                id: 7.7, submodulename: "DataProviders in TestNG ", topics: ["Overview","Partial and Parallel Execution","Return Types"]
            },
        ]
    },
    {
        id: 8, modulename: "Maven", submodules: [
            {
                id: 8.1, submodulename: "Introduction to Maven", topics: ["Maven","Features of Maven","Downloading Process","Use of Maven"]
            },
            {
                id: 8.2, submodulename: "Documentation", topics: ["Maven Plugins","Maven Extentions","Plugins","Archetypes","Repositories"]
            },
            {
                id: 8.3, submodulename: "Community", topics: ["Project Roles","Maven Source"]
            },
            {
                id: 8.4, submodulename: " Project  Documentation", topics: ["Project Information"]
            },
            {
                id: 8.5, submodulename: "Maven Projects", topics: ["Project"]
            },
            {
                id: 8.6, submodulename: "ASF", topics: ["Apache works","Foundation","Data Privacy"]
            },
        ]
    },
    {
        id: 9, modulename: "Log4j", submodules: [
            {
                id: 9.1, submodulename: "Log4j", topics: [" Introduction to Log4j","Log4j 2","Architecture"]
            },
            {
                id: 9.2, submodulename: "Migrating from Log4j 1.x", topics: ["Using the Log4j Bridge","Converting to the Log4j API","Configuring Log4j"]
            },
            {
                id: 9.3, submodulename: " API", topics: ["Flow Tracing","Markers","Event Logging","Thread Context"]
            },
            {
                id: 9.4, submodulename: "Configuration", topics: ["Automatic Configuration","Chainsaw Support","Configuration Syntax","Configuring",
                    "Property Substitution","Lookup Variables","Composite Configurations","Status Messages","Unit Testing in Maven","System Properties"
                ]
            },
            {
                id: 9.5, submodulename: "Web Applications and JSPs", topics: ["Servlet","Context Parameters","Configuration Lookups","JavaServer Pages Logging",
                    "Asynchronous Requests"
                ]
            },
            {
                id: 9.6, submodulename: "Module-6", topics: ["Lookups","Async Loggers","Garbage free Logging","JMX","Logging Seperation","Extending Log4j","Plugins"]
            },
        ]
    },
    {
        id: 10, modulename: "Sikuli", submodules: [
            {
                id: 10.1, submodulename: "Module-1", topics: ["Overview, capabilities","Installation and setup","Images, reggions, patterns"]
            },
            {
                id: 10.2, submodulename: " GUI Automation", topics: ["Interaction","Mouse and Keyboard control","UI Components"]
            },
            {
                id: 10.3, submodulename: "Acripting Techniques", topics: ["Scripting concepts","Error Handling","Script Optimization"]
            },
            {
                id: 10.4, submodulename: "Text Recognition", topics: ["OCR","Dynamic GUI","Text manipulation and validation"]
            },
        ]
    },
    {
        id: 11, modulename: "MySQL", submodules: [
            {
                id: 11.1, submodulename: "Theory,Terminology and concepts", topics: ["Client/ Server Concepts","Database and Database objects"]
            },
            {
                id: 11.2, submodulename: " Data Definition using SQL", topics: ["Databases","Data types","Tables","Constraints and Indexes","Views"]
            },
            {
                id: 11.3, submodulename: "Basic Data Manipulation using SQL", topics: ["Recurring SQL Constructs","Adding data","Modifying data",
                    "Removing data","Searching data"]
            },
            {
                id: 11.4, submodulename: "Advanced Data Manipulation using SQL", topics: ["Expressions","Grouping and Aggregate Functions","Joining Tables"]
            },
            {
                id: 11.5, submodulename: "Import/Export", topics: ["Tools for Import/Export","SQL for Import/Export"]
            },
            {
                id: 11.6, submodulename: "MySQL Admin", topics: ["Install and configure MySQL Server and client programs.","Recognize the key components of the MySQL architecture.",
                    "Secure your server","Troubleshoot server slowdowns and other issues.","Improve query performance.","Configure and administer a variety of replication topologies.",
                "Understand the benefits of MySQL Cloud."]
            },
        ]
    },
    {
        id: 12, modulename: "GitHub", submodules: [
            {
                id: 12.1, submodulename: "Introduction to GitHub", topics: ["Installation"]
            },
            {
                id: 12.2, submodulename: "Features and Functionality", topics: ["Builds","Testing","Introduction","Power of GitHub"]
            },
            {
                id: 12.3, submodulename: "GitHub & Markdown", topics: ["GitHub & Markdown"]
            },
            {
                id: 12.4, submodulename: "GitHub Repositories", topics: ["GitHub Repositories"]
            },
            {
                id: 12.5, submodulename: "GitHub Community", topics: ["GitHub Community"]
            },
            {
                id: 12.6, submodulename: "GitHub Features", topics: ["Issues","CLI","Actions"]
            },
            {
                id: 12.7, submodulename: "GitHub Copilot", topics: ["GitHub Copilot"]
            },
            
        ]
    },
    {
        id: 13, modulename: "Jenkins", submodules: [
            {
                id: 13.1, submodulename: " Core Concepts", topics: ["Jenkins and Continuous Integration","Source code management","Plugins","Rest API","Security","Artifacts and Fingerprints",
                    "Notifications and Alerts"
                ]
            },
            {
                id: 13.2, submodulename: "Building CD Pipelines", topics: ["Pipeline","Upstream, Downstream and Triggers","Parameters","Global Libraries"]
            },
            {
                id: 13.3, submodulename: "Code", topics: ["Architecture","Agents, Protocols","Cloud Agents","High Availability"]
            },
        ]
    },
    {
        id: 14, modulename: "Cucumber", submodules: [
            {
                id: 14.1, submodulename: "Introduction", topics: ["Test Driven Development","Cucumber & Behaviour Driven Deployment","Gherkin- Bsiness Driven Deployment"]
            },
            {
                id: 14.2, submodulename: "Getting Started", topics: ["Install Jira","Creating Projects","Adding users"]
            },
            {
                id: 14.3, submodulename: ": Set Up Cucumber with Selenium in Eclipse", topics: ["Install Java, Eclipse","Install Cucumber Eclipse Plugin",
                    "Download Webdriver Java Client"
                ]
            },
            {
                id: 14.4, submodulename: "Cucumber Basics", topics: ["Cucumber Selenium Java Test","Feature file","Gherkin Keywords","Cucumber Options"]
            },
            {
                id: 14.5, submodulename: " Data Driven Testing", topics: ["Parameterization ","Data driven Testing","Data Tables","Maps"]
            },
            
        ]
    },
    {
        id: 15, modulename: "JIRA", submodules: [
            {
                id: 15.1, submodulename: "Introduction", topics: ["Jira","Uses of Jira","Key Terms","Scheme","Projects","Issues"
                ]
            },
            {
                id: 15.2, submodulename: "Test Management", topics: ["Test cases","Cloning Test cases","Exporting Test cases","Creating and executing Test Cases"]
            },
            {
                id: 15.3, submodulename: "Defect Management", topics: ["Defect Template","Logging defects & Search defects","Creating favourite filtters","Attaching files"]
            },
            {
                id: 15.4, submodulename: "JQL", topics: ["Intro to JQL","JQL(JIRA Query Language)","Subscriptions in JIRA","Holistic Team Practices and Ecosystem"]
            },
            {
                id: 15.5, submodulename: "Project", topics: ["Implementing a project using JIRA"]
            },
           
        ]
    },
    {
        id: 16, modulename: "Agile Methodology", submodules: [
            {
                id: 16.1, submodulename: "Introduction", topics: ["Core Agile values and principles","Challenges and Solutions","Implementation Strategies"]
            },
            {
                id: 16.2, submodulename: "Agile Principles", topics: ["Agile Principles and Values","Project Delivery and Execution","Collaboration and Team Dynamics","Integration of Agile Practices"]
            },
            {
                id: 16.3, submodulename: "SCRUM", topics: ["Scrum Principles and Values","Sprint Execution and Iterative Development","Planning and Collective Commitment","Reinforcement of Scrum Values"]
            },
            {
                id: 16.4, submodulename: "XP", topics: ["XP Practices and Values","Change with XP Principles","Simplicity and Incremental Design"]
            },
        ]
    },

];

const Testingcurriculum = () => {
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
                    <h1 className="curriculumh1">Testing <i><span className="highlight">Curriculum</span></i></h1>
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

export default Testingcurriculum;
