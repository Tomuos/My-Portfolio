import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import StickyMenu from './components/StickyMenu'; // Don't forget to import your new StickyMenu component

function App() {
  return (
    <div className="App">
      <Header />
      <StickyMenu /> {/* Add your new StickyMenu component */}
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
