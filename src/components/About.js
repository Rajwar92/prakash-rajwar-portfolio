import React from 'react';
import profilePic from '../assets/images/profilepic.jpg';
import resumePdf from '../assets/documents/Resume_Prakash_Rajwar.pdf';
import '../styles/_about.scss';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-header">
        <h2>About Me</h2>
      </div>

      <div className="about-container">
        <div className="about-image">
          <img src={profilePic} alt="Prakash Rajwar" className="profile-image" />
        </div>

        <div className="about-content">
          <p>
            I'm a Technical Writer with 10+ years of experience across software, automotive, and aviation sectors.
            Skilled in API documentation, user manuals, and content strategy. Passionate about clarity, structure, and scalable docs.
          </p>

          <div className="about-highlights">
            <div className="highlight-item">
              <i className="fas fa-code highlight-icon"></i>
              <span>API Documentation Expert</span>
            </div>
            <div className="highlight-item">
              <i className="fas fa-book highlight-icon"></i>
              <span>Structured Content Design</span>
            </div>
            <div className="highlight-item">
              <i className="fas fa-pencil-ruler highlight-icon"></i>
              <span>Content Strategy & Planning</span>
            </div>
          </div>

          <a href={resumePdf} className="btn" target="_blank" rel="noreferrer">Download Resume</a>
        </div>
      </div>
    </section>
  );
}

export default About;
