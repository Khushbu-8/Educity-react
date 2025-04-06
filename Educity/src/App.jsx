import React, { useState } from "react";
import Navebar from "./component/Navbar/NAvebar";
import Hero from "./component/Hero/Hero";
import Programs from "./component/Programs/Programs";
import Title from "./component/Title/Title";
import About from "./component/About/About";
import Campus from "./component/Campus/Campus";
import Testimonial from "./component/Testimonial/Testimonial";
import Contectus from "./component/ContactUs/Contectus";
import Footer from "./component/Footer/Footer";
import VideoPlayer from "./component/Videoplay/VideoPlayer";

const App = () => {
  const [play, setPlay] = useState(false)

  return (
    <>
      <Navebar />
      <Hero />
      <div className="container">
        <Title SubTitle="OUR PROGRAM" title="What We Offer" />
        <Programs />
        <About setPlay={setPlay}  />
        <Title SubTitle="Gallery" title="Campus Photos" />
        <Campus />
        <Title SubTitle="TESTIMONIALS" title="What Student Says" />
        <Testimonial />
        <Title SubTitle="Contact Us" title="Get in Touch" />
        <Contectus />
        <Footer/>

      </div>
      <VideoPlayer setPlay={setPlay} play={play}/>
    </>
  );
};

export default App;
