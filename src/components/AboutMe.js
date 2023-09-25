import React from 'react';
import './AboutMe.css';  // Import the CSS if you have created AboutMe.css

const AboutMe = () => {
  return (
    <div className="about-me-container">
    <div className="about-me-content">  {/* New inner container */}
      <h1>About Me</h1>
      {/* Updated image tag */}
      <img src="/images/Tom.jpg" alt="Tom" />
      <p>Hi, I'm Tom. I'm a Junior full stack software engineer with a background in Bookselling and customer service. I'm passionate about creating applications that are intuitive and easy to use. I'm a team player who is always looking to learn and grow. I'm excited to bring my skills to a team that is looking to make a difference.</p>
    </div>
    ,</div>
  );
};

export default AboutMe;
