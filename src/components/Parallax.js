import React, { useEffect } from 'react';
import './Parallax.css'; // make sure to import the CSS

const Parallax = () => {
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollY = window.scrollY;

    window.requestAnimationFrame(() => {
      document.querySelector('.layer2').style.transform = `translateY(${scrollY / 5}px)`;
      document.querySelector('.layer3').style.transform = `translateY(${scrollY / 10}px)`;
      document.querySelector('.layer4').style.transform = `translateY(${scrollY / 15}px)`;
      document.querySelector('.layer5').style.transform = `translateY(${scrollY / 20}px)`;
      document.querySelector('.layer6').style.transform = `translateY(${scrollY / 25}px)`;
      document.querySelector('.layer7').style.transform = `translateY(${scrollY / 30}px)`;
      document.querySelector('.layer8').style.transform = `translateY(${scrollY / 35}px)`;
    });
  };

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
      <div className="content">
        <h1>Hi My name is Tom </h1>
        <img src=''></img>
      </div>
      <div className="empty-space"></div>  {/* Here's the new empty space */}
    </div>
  );

  }
export default Parallax;
