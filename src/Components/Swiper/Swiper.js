import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import swiper1 from '../../Asserts/swiper1.png';
import swiper2 from '../../Asserts/swiper2.png';
import swiper3 from '../../Asserts/swiper3.png';
import swiper4 from '../../Asserts/swiper4.png';

const Swiper = () => {
  return (<div>
    <h1 style={{textAlign:"center",fontSize:"38px"}}>Industry <i style={{ color: '#ebd913' }}>Partners</i></h1>
    <Carousel showThumbs={false}  showStatus={false} autoPlay infiniteLoop interval={3000}>
      
      <div>
        <img src={swiper1} alt="Slide 1" />
      </div>
      <div>
        <img src={swiper2} alt="Slide 2" />
      </div>
      <div>
        <img src={swiper3} alt="Slide 3" />
      </div>
      <div>
        <img src={swiper4} alt="Slide 4" />
      </div>
    </Carousel>

  </div>
     );
};

export default Swiper;
