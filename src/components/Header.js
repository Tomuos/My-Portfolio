import React from 'react';
import Galaxy from './Galaxy';
import '../components/Header.css'

const Header = () => {
  return (
    <header className="header-container">
      <Galaxy />
      <div className="header-text">
        Hi I'm Tom, Welcome to My Portfolio 👋
      </div>
    </header>
  );
};

export default Header;
