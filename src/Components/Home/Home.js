import React from "react";
import hero from "../../Asserts/hero.mp4"
import "./Home.css"
import {Link} from "react-router-dom"
import HomeSwiper from "../HomeSwiper/HomeSwiper";
const Home = () =>{
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant"
    });
  };
    return(
        <div>
          <div className="hero">
            <div className="hero-left">
             <h2>Transform Learning, Accelerate Your Career</h2>
             <div>
               <p>GANGAARAM TECHNOLOGIES is the ultimate hub for 
                  enhancing your coding skills or acquiring new ones.
                   Trusted by over 20,000+ students across India, 
                   we are committed to helping you succeed.</p>
             </div>
             <div className="hero-latest-btn">
              <Link to="/registrationpage" onClick={scrollToTop} style={{textDecoration:"none",color:"black"}}><div>Attend Free Demo class</div></Link>
             </div>
            </div>
            <div className="hero-right">
            {/* <video src={hero} muted autoPlay loop type="vido/mp4" ></video> */}
            <HomeSwiper/>
            </div>
          </div>
        </div>
    )
}

export default Home;