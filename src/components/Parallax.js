import React, { useEffect } from 'react';
import './Parallax.css';  // make sure to import the CSS

const Parallax = () => {

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    
    // Change the '10', '20', etc. to control speed (smaller is slower)
    document.querySelector('.layer2').style.transform = `translateY(${scrollY / 10}px)`;
    document.querySelector('.layer3').style.transform = `translateY(${scrollY / 20}px)`;
    document.querySelector('.layer4').style.transform = `translateY(${scrollY / 30}px)`;
    document.querySelector('.layer5').style.transform = `translateY(${scrollY / 40}px)`;
    document.querySelector('.layer6').style.transform = `translateY(${scrollY / 50}px)`;
    document.querySelector('.layer7').style.transform = `translateY(${scrollY / 60}px)`;
    document.querySelector('.layer8').style.transform = `translateY(${scrollY / 70}px)`;
  };


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className="parallax-container">
      <div className="layer layer1"></div>
      <div className="layer layer2"></div>
      <div className="layer layer3"></div>
      <div className="layer layer4"></div>
      <div className="layer layer5"></div>
      <div className="layer layer6"></div>
      <div className="layer layer7"></div>
      <div className="layer layer8"></div>
      {/* You can put your content here */}
      <div className="content">
        <h1>Your Text Here</h1>
      </div>
    </div>
  );
};

export default Parallax;
