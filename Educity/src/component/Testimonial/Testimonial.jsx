import React, { useRef } from "react";
import "./Testimonial.css";
import right_errow from "../../../public/right-errow.png";
import left_errow from "../../../public/left-errow.png";
import user_1 from "../../../public/user-1.png";
import user_2 from "../../../public/user-2.png";
import user_3 from "../../../public/user-3.png";
import user_4 from "../../../public/user-4.png";

const Testimonial = () => {
 
    const slider = useRef();
    let trx = 0
  const slidenext = () =>{
   
    if(trx > -50){
      trx -= 25;
    }
    slider.current.style.transform = `translateX(${trx}%)`
  }
  const slideback = () =>{
 
    if(trx < 0){
      trx += 25;
    }
    slider.current.style.transform = `translateX(${trx}%)`
  }
  return (
    <div className="testimonial">
      <img src={right_errow} alt="" 
      onClick={slidenext}
      className="next-btn" />
      <img src={left_errow} alt="" 
      onClick={slideback} className="back-btn" />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Emily Williams</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Emily Williams</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Emily Williams</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Emily Williams</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonial;
