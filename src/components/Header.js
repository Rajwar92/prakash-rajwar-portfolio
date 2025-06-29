import React, { useState, useEffect } from 'react';
import '../styles/_header.scss';

function Header() {
  const [darkMode, setDarkMode] = useState(() =>
    localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <header className="header">
      <div className="container">
        <div className="logo">Prakash Rajwar</div>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </nav>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {darkMode ? '🌞' : '🌙'}
        </button>
      </div>
      <div className="intro-text">
  <h1>Prakash Rajwar</h1>
  <p className="tagline">Crafting clarity through content.</p>
  <a href="#about" className="cta-button">Learn More</a>
</div>
    </header>
  );
}

export default Header;
// This code defines a Header component for a portfolio website.