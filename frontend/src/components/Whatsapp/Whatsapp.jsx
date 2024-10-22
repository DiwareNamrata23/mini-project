import React from 'react';
import './Whatsapp.css'; // Import the CSS for the positioning
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

const Whatsapp = () => {
  return (
    <a
      href="https://chat.whatsapp.com/IUkn9se7POz2OyHL5CJBWu" // Replace with your WhatsApp group link
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-sticky"
    >
      <i className="fab fa-whatsapp whatsapp-icon"></i> {/* WhatsApp Icon */}
    </a>
  );
};

export default Whatsapp;
