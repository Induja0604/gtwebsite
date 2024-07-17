import React from "react";
import Webpage from "../Components/Webpage/Webpage";
import Webpage1 from "../Components/Webpage1/Webpage1";
import Webcurriculum from "../Components/Webcurriculum/Webcurriculum";
import Watermark from "../Components/Watermark/Watermark";
const App = () =>{
    return(
        <div>
            <Watermark/>
            <Webpage />
            <Webpage1/>
            <Webcurriculum/>
        </div>
    )
}
export default App;