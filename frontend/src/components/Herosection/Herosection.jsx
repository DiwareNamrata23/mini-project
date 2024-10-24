import React from "react";
import "./Herosection.css";
import { useNavigate } from "react-router-dom";  // Import useNavigate

function Herosection() {
  const navigate = useNavigate();

  const handleJoinCommunity = () => {
    // WhatsApp community link
    window.open("https://chat.whatsapp.com/JoU90dBQWc52r50N4HrtJL", "_blank");
  };

  return (
    <div className="hero-section">
      <div className="flex1">
        <div className="hero-sec1">
          <h1 className="highlighted-heading">
            <span className="white-text1">INDIA’S FIRST</span>
            <br />
            <span className="white-text">SMART </span>
            <span className="highlighted-text">Market Maverick</span>
          </h1>
          <p className="hero-description">“Where Intelligence Meets Finance”</p>
          <button className="hero-button" onClick={handleJoinCommunity}>
            Join Our Community Now
          </button>
        </div>
        <div className="hero-sec2"></div>
      </div>
    </div>
  );
}

export default Herosection;
