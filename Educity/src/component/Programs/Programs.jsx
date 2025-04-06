import React from 'react'
import './Programs.css'
import Program_1 from '../../../public/program-1.png'
import Program_2 from '../../../public/program-2.png'
import Program_3 from '../../../public/program-3.png'
import Program_icon_1 from '../../../public/program-icon-1.png'
import Program_icon_2 from '../../../public/program-icon-2.png'
import Program_icon_3 from '../../../public/program-icon-3.png'
const Programs = () => {
  return (
    <div className='programs '>
        <div className="program">
            <img src={Program_1} alt="" />
            <div className="caption">
              <img src={Program_icon_1} alt="" />
              <p>Graduation Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={Program_2} alt="" />
            <div className="caption">
              <img src={Program_icon_2} alt="" />
              <p>Masters Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={Program_3} alt="" />
            <div className="caption">
              <img src={Program_icon_3} alt="" />
              <p>Masters Degree</p>
            </div>
        </div>
      
    </div>
  )
}

export default Programs
