import React, { Suspense, lazy } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/main.scss';

const About = lazy(() => import('./components/About'));
const Experience = lazy(() => import('./components/Experience'));
const Skills = lazy(() => import('./components/Skills'));
const Certifications = lazy(() => import('./components/Certifications'));

function App() {
  return (
    <div className="app-layout">
      <Header />
      <main>
        <Suspense fallback={<div className="loading">Loading...</div>}>
          <About />
          <Experience />
          <Skills />
          <Certifications />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;