import React from "react";
import "./Testimonials.css";

const info = [
  {
    id: 1,
    name: "B.Sushmitha",
    job: " Software Developer",
    text: "Gangaaram Technologies transformed my career. The hands-on training and expert guidance helped me secure a dream job right out of college"
  },
  {
    id: 2,
    name: "N.Induja",
    job: "Embedded Systems Engineer",
    text: "Gangaaram Technologies bridges the gap between academic knowledge and industry requirements. Thanks to their training, I was able to start my career in Embedded Systems with a strong foundation"
  },
  {
    id: 3,
    name: "Pradeepika",
    job: "FPGA Design Specialist",
    text: "The mentors at Gangaaram Technologies are industry veterans who truly understand the needs of employers. Their insights and support were invaluable in my job search"
  },
  {
    id: 4,
    name: "Nandhini",
    job: "VLSI Engineer",
    text: "The comprehensive curriculum and real-world projects at Gangaaram Technologies provided me with the skills and confidence to excel in the VLSI industry"
  },
  {
    id: 5,
    name: "Ramya",
    job: "Full Stack Developer",
    text: "Gangaaram Technologies not only provided me with technical skills but also taught me professionalism and teamwork. I highly recommend their programs to anyone looking to kick-start their career in tech"
  },
  {
    id: 6,
    name: "Sharath",
    job: "Software Engineer",
    text: "Choosing Gangaaram Technologies was the best decision I made for my career. Their focused training and industry connections helped me land multiple job offers in the competitive software market."
  }
  
];

const Testimonials = () => {
  return (
    <div>
      <div className="testimonial">
        <div>
          <h1 className="testimonialh1">Students <i><span style={{color:"#ebd913"}}>Testimonials</span></i></h1>
          <p className="testimonialp">Our offline training/internship has made students learn to code, enhance their coding skills & got placed in various Companies.</p>
          <p className="testimonialp">Here are our few students placed at various companies:</p>
        </div>
        <div className="testimonialflex">
          {info.map((item) => (
            <div key={item.id} className="testimonialflexbox">
              <h3>{item.name}</h3>
              <p>{item.job}</p>
              <p><i>&quot;{item.text}&quot;</i></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
