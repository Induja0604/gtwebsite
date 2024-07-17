import React from 'react';
import './Navbar.css';
import gtlogo from '../../Asserts/gtlogo.jpg'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="navbar">
      <div className="navbar-logo">
        <img src={gtlogo} alt="Logo" />
      </div>
      <div className={`navbarlinks ${isOpen ? 'show' : ''}`}>
        <Link to="/" className="nav-item" >Home</Link>
       
        <Link to="/registrationpage" className="nav-registration">Registration</Link>
       
        <div className="dropdown">
          <div className="dropbtn">Courses</div>
          <div className="dropdown-content">
            <Link to="/webpage" className="dropdown-item">Web Development</Link>
            <Link to="/pythonpage" className="dropdown-item">Python</Link>
            <Link to="/fpgapage" className="dropdown-item">FPGA</Link>
            <Link  to="/testingpage" className="dropdown-item">Testing</Link>
          </div>
        </div>
        <Link to="/coding" className="nav-code">Coding Challenge</Link>
        <Link to="/about" className="nav-item">About Us</Link>
        <Link to="/contact" className="nav-item">Contact</Link>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
    </nav>
    </div>
  );
};

export default Navbar;
