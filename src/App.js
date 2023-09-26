// App.js

import React from 'react';
import StickyMenu from './components/StickyMenu';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Parallax from './components/Parallax';


function App() {
  return (
    <div className="App">
    <StickyMenu />
      <Header />
      <AboutMe />
      <Parallax />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
