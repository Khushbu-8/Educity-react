import React from 'react'
import './campus.css'
import gallery_1 from '../../../public/gallery-1.png'
import gallery_2 from '../../../public/gallery-2.png'
import gallery_3 from '../../../public/gallery-3.png'
import gallery_4 from '../../../public/gallery-4.png'
import Arrow_white from '../../../public/Arrow-white.png'

const Campus = () => {
  return (
    <div className='campus'>
        <div className="gallery">
            <img src={gallery_1} alt="" />
            <img src={gallery_2} alt="" />
            <img src={gallery_3} alt="" />
            <img src={gallery_4} alt="" />
        </div>
        <button className='btn dark-btn'>See more here <img src={ Arrow_white} alt="" /></button>
    </div>
  )
}

export default Campus