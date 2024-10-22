// Spinner.js
import React from 'react';
import './Spinner.css'; // Import spinner styles

const Spinner = () => {
    return (
        <div className="spinner">
            {/* You can customize this with an actual spinner graphic or use CSS animations */}
            <div className="loading">Loading...</div>
        </div>
    );
};

export default Spinner;
