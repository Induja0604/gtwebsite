import React,{useState,useEffect} from 'react'
import Home from '../Components/Home/Home'
import Training from '../Components/Training/Training'
import Internship from '../Components/Internship/Internship'
import Choose from "../Components/Choose/Choose"
import Testimonials from "../Components/Testimonials/Testimonials"
import Coursead from "../Components/Coursead/Coursead"
// import Aihelpdesk from "../Components/Aihelp/Aihelpdesk"
import Swiper from '../Components/Swiper/Swiper'
import Watermark from '../Components/Watermark/Watermark'
const Homepage = () => {
  const [showHelpDesk, setShowHelpDesk] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHelpDesk(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      <Watermark/>
      <Home/>
      <Training/>
      <Internship/>
      <Choose/>
      <Testimonials/>
      <Coursead/>
      <Swiper/> 
      {/* {showHelpDesk && <Aihelpdesk />} */}
    </div>
  )
}

export default Homepage
