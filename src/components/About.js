import React from 'react';
import profilePic from '../assets/images/profilepic.jpg';
import '../styles/_about.scss';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <img src={profilePic} alt="Prakash Rajwar" className="profile-pic" />
        <div className="bio">
          <h2>About Me</h2>
          <p>
            I'm a Technical Writer with 10+ years of experience across software, automotive, and aviation sectors.
            Skilled in API documentation, user manuals, and content strategy. Passionate about clarity, structure, and scalable docs.
          </p>
          <a href="../assets/documents/Resume_Prakash_Rajwar.pdf" className="btn" target="_blank" rel="noreferrer">Download Resume</a>
        </div>
      </div>
    </section>
  );
}

export default About;