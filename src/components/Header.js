import React from 'react';
import Galaxy from './Galaxy';

const Header = () => {
  return (
    <header className="relative">
      <Galaxy />
      <div className="absolute top-0 left-0 text-4xl text-white p-4">
        My Portfolio
      </div>
    </header>
  );
};

export default Header;
