import React from 'react'
import Fpga from '../Components/Fpga/Fpga'
import Fpga1 from '../Components/Fpga1/Fpga1'
import Fpgacurriculum from '../Components/Fpgacurriculum/Fpgacurriculum'
import Watermark from '../Components/Watermark/Watermark'
const Fpgapage = () => {
  return (
    <div>
      <Watermark/>
      <Fpga/>
      <Fpga1/>
      <Fpgacurriculum/>
    </div>
  )
}

export default Fpgapage
