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
      <h1 className="highlighted-heading">
        <span className="white-text1">INDIA’S FIRST</span>
        <br />
        <span className="white-text">SMART </span>
        <span className="highlighted-text">Market Maverik</span>
      </h1>

      <p className="hero-description">“Where Intelligence Meets Finance”</p>
      <button className="hero-button">WWW.FinNews.IN</button>
      {/* <img className="heroimg" src={heroimg} alt="" /> */}
      <div className="scroll-down cursor-pointer" onClick={scrollDown}>
        <p>Scroll down for more</p>
        <div className="arrow"></div>
      </div>

    </div>
  );
}

export default Herosection;
