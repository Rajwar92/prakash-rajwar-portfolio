import React from 'react';
import '../styles/_certifications.scss';

function Certifications() {
  const certs = [
    {
      title: 'EF SET C2 Proficiency',
      source: 'EF Standard English Test',
      date: 'Dec 2023',
      link: 'https://www.efset.org/cert/haj1Yw'
    },
    {
      title: 'API Documentation',
      source: 'LinkedIn Learning',
      date: 'June 2023',
      link: 'https://www.linkedin.com/learning/certificates/785ca95...'
    }
  ];

  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <h2>Certifications</h2>
        <ul>
          {certs.map((cert, idx) => (
            <li key={idx}>
              <a href={cert.link} target="_blank" rel="noreferrer">
                <strong>{cert.title}</strong> – {cert.source} <em>({cert.date})</em>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Certifications;