import React from 'react';
import './AboutMe.css';  // Import the CSS if you have created AboutMe.css

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <div className="about-me-content">  {/* New inner container */}
        <h1>About Me</h1>
        <img src="/images/Tom.jpg" alt="Tom" />
        <p>Hi, I'm Tom. I'm a Junior full stack software engineer ...</p>
      </div>
    </div>
  );
};

export default AboutMe;

