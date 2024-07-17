import React,{useState} from 'react';
import './Registration.css'; // Make sure to import your CSS file
import axios from "axios"
import Watermark from '../Watermark/Watermark';
const Registration = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    gender: '',
    email: '',
    phone: '',
    internship: '',
    graduation: '',
    college: '',
    branch: '',
    percentage: '',
    year: '',
    about: '',
    message: '',
    resume: null,
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };
 async function handleSubmit(e){
    e.preventDefault();
    console.log(formData)
    try{
      await axios.post('http://localhost:3030/registration', formData);
    }
    catch (error) {
      console.error('Error submitting form:', error);
     
    }
  }
  return (
    <div className="reg-con">
      <Watermark />
      <h1 className="reg-h1">Registration Form</h1>
      <p className="reg-p">Contact us by filling out the form below.</p>
      <form onSubmit={handleSubmit} method="post" encType="multipart/form-data">
        <div className="form-group">
          <label htmlFor="fullname">Full Name <span className="required">*</span></label>
          <input type="text" id="fullname" name="fullname" required onChange={handleInputChange} />
        </div>

        <div className="form-group">
          <label className="reg-gender">Gender <span className="required">*</span></label>
          <div className="radio-group">
            <label>
              <input type="radio" value="Male" name="gender" required onChange={handleInputChange} /> Male
            </label>
            <label>
              <input type="radio" value="Female" name="gender" onChange={handleInputChange} /> Female
            </label>
            <label>
              <input type="radio" value="Other" name="gender"onChange={handleInputChange}/> Other
            </label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email <span className="required">*</span></label>
          <input type="email" id="email" name="email" required onChange={handleInputChange} />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone No. <span className="required">*</span></label>
          <input type="tel" id="phone" name="phone" required  onChange={handleInputChange} />
        </div>

        <div className="form-group">
          <label htmlFor="internship">Applying for Internship/Training (Post Graduation Fields are Mandatory for "Internship") <span className="required">*</span></label>
          <select id="internship" name="internship" required onChange={handleInputChange}>
            <option value="">Select an option</option>
            <option value="Testing">Testing</option>
            <option value="FPGA Design">FPGA Design</option>
            <option value="VLSI">VLSI</option>
            <option value="Web">Web development</option>
            <option value="Python">Python</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="graduation">Graduation <span className="required">*</span></label>
          <input type="text" id="graduation" name="graduation" placeholder="e.g., B.Tech / BE" required  onChange={handleInputChange}/>
        </div>

        <div className="form-group">
          <label htmlFor="college">College/University <span className="required">*</span></label>
          <input type="text" id="college" name="college" required  onChange={handleInputChange}/>
        </div>

        <div className="form-group">
          <label htmlFor="branch">Branch <span className="required">*</span></label>
          <input type="text" id="branch" name="branch" required  onChange={handleInputChange}/>
        </div>

        <div className="form-group">
          <label htmlFor="percentage">Percentage/CGPA <span className="required">*</span></label>
          <input type="text" id="percentage" name="percentage" required  onChange={handleInputChange}/>
        </div>

        <div className="form-group">
          <label htmlFor="year">Year of Passing <span className="required">*</span></label>
          <input type="text" id="year" name="year" required  onChange={handleInputChange}/>
        </div>

        <div className="form-group">
          <label htmlFor="about">Brief Summary about yourself <span className="required">*</span></label>
          <textarea id="about" name="about" required onChange={handleInputChange}></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" onChange={handleInputChange}></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="resume">Upload Resume <span className="required">*</span></label>
          <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx" required onChange={handleFileChange} />
        </div>

        <div className="button-container">
          <button type="submit" className="btn-send">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
