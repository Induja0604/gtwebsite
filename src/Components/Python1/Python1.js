import React from 'react';
import './Python1.css';

const Python1 = () => {
  return (
    <div>
      <div>
        <h1 className='webdev-h1'>What is Python?</h1>
      </div>
      {/* <div>
        <span className='webdev-span'>What is Python?</span>
      </div> */}
      <p className='webdev-p'>
      Python is a high-level, interpreted programming language known for its simplicity and readability.<br/>
       It is widely used in various fields, including data analysis, artificial intelligence, scientific computing, automation, and more.
      </p>
      <p className='webdev-p'>
    <b>  Data Analysis and Visualization:</b> Libraries such as pandas, NumPy, Matplotlib, and Seaborn are widely used for data manipulation, analysis, and visualization.<br/>
     <b>Machine Learning and Artificial Intelligence:</b> Tools like TensorFlow, Keras, scikit-learn, and PyTorch are popular in the AI and ML communities.<br/>
    <b>Scientific Computing:</b> Libraries such as SciPy and SymPy support scientific research and engineering applications.
      </p>
      <div className="container">
        <div className="webpage1-left">
          <h2 className="webdev-h2">Key Features of Python</h2>
          <ul className="webdev-list">
            <li>Readability</li>
            <li>Interpreted Language</li>
            <li>Dynamically Typed</li>
            <li>Extensive Standard Library</li>
            <li>Cross-Platform</li>
            <li>Open Source</li>
          </ul>
        </div>
        <div className="webpage1-right">
        <h3 className="webdev-h3">Why Python?</h3>
        <ul className="list1">
          <li>Ease of Learning</li>
          <li>Versatility</li>
          <li>Career Opportunities</li>
        </ul>
      </div>
      </div>
      <div className="big-container">
        <div className="centered-div ">
          <h3 className='right-div'>What will you learn in this course?</h3>
          <div className='right-list'>
           <li>Practical training in  Python course</li>
           <li>Strengthen the concepts from basics to advanced level</li>
           <li>How to solve competitive-level programming questions?</li>
           <li>Practice  coding questions to strengthen the concepts</li>
           <li>Solutions to the problems asked by interviewed companies</li>
          </div>
        </div>
        <div className="centered-div ">
        <h3 className='right-div'>Key Features</h3>
          <div className='right-list'>
           <li>500 hours of quality training</li>
           <li>50 hours of live mentoring & doubt clarification sessions</li>
           <li>350+ coding questions & discussion forum</li>
           <li>Offline courses</li>
           <li>Proper Guideness</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Python1;