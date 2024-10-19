import React from "react";
import "./Herosection.css";
// import heroimg from '../../assets/hero-img.png';

function Herosection() {
  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className="hero-section">
      <div className="flex1">
        <div className="hero-sec1">
          <h1 className="highlighted-heading">
            <span className="white-text1">INDIA’S FIRST</span>
            <br />
            <span className="white-text">SMART </span>
            <span className="highlighted-text">Market Maveric</span>
          </h1>
          <p className="hero-description">“Where Intelligence Meets Finance”</p>
          <button className="hero-button">WWW.MARKETMAVERIC.IN</button>
          {/* <img className="heroimg" src={heroimg} alt="" /> */}
        </div>
        <div className="hero-sec2"></div>
        {/* <div className="scroll-down cursor-pointer" onClick={scrollDown}>
        <p>Scroll down for more</p>
        <div className="arrow"></div>
      </div> */}
      </div>

      {/* Move scroll-down outside of the flex container */}
     
    </div>
  );
}

export default Herosection;
