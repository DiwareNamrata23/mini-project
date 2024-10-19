import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import SectionHeading from "../SectionHeading/SectionHeading.jsx";
import prediction from './Images/bull.jpg';
import './Finiance.css';

function Finiance() {
  const navigate = useNavigate(); // Initialize useNavigate

  const handlePredictionClick = () => {
    navigate('/prediction'); // Redirect to /prediction
  };

  return (
    <>
      <SectionHeading title="All latest financial updates" />
      <div className="home-sec5">
        <div className="image-wrapper">
          <img src={prediction} alt="Prediction Bull" />
        </div>
        <div className="offer-wrapper">
          <h1>Prediction for next day</h1>
          <ul>
            <li>Understanding Stock Prediction</li>
            <li>Why Predict Stock Prices?</li>
            <li>Accuracy & Reliability</li>
          </ul>
          <button className="book-btn" onClick={handlePredictionClick}>Predict Now</button> {/* Add onClick */}
        </div>
      </div>
    </>
  );
}

export default Finiance;
