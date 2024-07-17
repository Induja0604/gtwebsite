import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import homeSwiper1 from "../../Asserts/homeSwiper1.jpg"
import homeSwiper2 from "../../Asserts/homeSwiper2.jpg"
import homeSwiper3 from "../../Asserts/homeSwiper3.jpg"
import homeSwiper4 from "../../Asserts/homeSwiper4.jpg"
const HomeSwiper = () => {
  return (
  <div>
    <Carousel showThumbs={false}  showStatus={false} autoPlay infiniteLoop interval={3000}>
      
      <div >
        <img  style={{borderRadius:"10px"}}   src={homeSwiper1} alt="Slide 1" />
      </div>
      <div >
        <img  style={{borderRadius:"10px"}}   src={homeSwiper2} alt="Slide 2" />
      </div>
      <div>
        <img  style={{borderRadius:"10px"}}  src={homeSwiper3} alt="Slide 3" />
      </div>
      <div>
        <img  style={{borderRadius:"10px"}}   src={homeSwiper4} alt="Slide 4" />
      </div>
    </Carousel>

  </div>
     );
};

export default HomeSwiper;
