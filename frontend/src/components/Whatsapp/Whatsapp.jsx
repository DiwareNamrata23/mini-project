import React from 'react';
import './Whatsapp.css'; // Import the CSS for the positioning
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

const Whatsapp = () => {
  return (
    <a
      href="https://chat.whatsapp.com/JoU90dBQWc52r50N4HrtJL" // Replace with your WhatsApp group link
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-sticky"
    >
      <i className="fab fa-whatsapp whatsapp-icon"></i> {/* WhatsApp Icon */}
    </a>
  );
};

export default Whatsapp;
