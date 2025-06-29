import React, { useState } from 'react';
import '../styles/_header.scss';

function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => {
    document.body.classList.toggle('dark');
    setDarkMode(!darkMode);
  };

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
        <button className="theme-toggle" onClick={toggleTheme}>
          {darkMode ? '🌞' : '🌙'}
        </button>
      </div>
    </header>
  );
}

export default Header;