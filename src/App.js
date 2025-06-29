import React, { useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Prakash Rajwar | Portfolio';
  }, []);

  return (
    <div className="app-layout">
      <Header />
      <main>
        <About />
        <Experience />
        <Skills />
        <Certifications />
      </main>
      <Footer />
    </div>
  );
}

export default App;
