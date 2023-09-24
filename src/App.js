import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
// import Galaxy from './components/Galaxy';

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <Galaxy />
//       <h1>Welcome to My Page</h1> {/* This is your new title */}
//       <AboutMe />
//       <Projects />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }

// export default App;

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Projects />
    </div>
  );
}


export default App;
