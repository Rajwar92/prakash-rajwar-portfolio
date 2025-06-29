import React from 'react';
import '../styles/_certifications.scss';

function Certifications() {
  const certs = [
    {
      title: 'EF SET C2 Proficiency',
      source: 'EF Standard English Test',
      date: 'Dec 2023',
      link: 'https://www.efset.org/cert/haj1Yw',
    },
    {
      title: 'API Documentation',
      source: 'LinkedIn Learning',
      date: 'June 2023',
      link: 'https://www.linkedin.com/learning/certificates/785ca95a3f5e9eaae9b0e76c564f4578cbf2889911b8f2c5459b69e5c04d7ba2',
    },
    {
      title: 'Technical Writing',
      source: 'Coursera',
      date: 'Feb 2022',
      link: 'https://www.coursera.org/account/accomplishments/certificate/54KZXDFNG4ZB',
    },
    {
      title: 'Supply Chain Principles',
      source: 'Coursera',
      date: 'Dec 2021',
      link: 'https://www.coursera.org/account/accomplishments/certificate/YZZJGSTXCRF8',
    },
    {
      title: 'Lean Six Sigma White Belt',
      source: 'Aveta Business Institute',
      date: 'Apr 2021',
      link: '#',
    }
  ];

  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <div className="cert-list">
          {certs.map((cert, idx) => (
            <article className="cert-card" key={idx}>
              <a href={cert.link} target="_blank" rel="noreferrer">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-meta">
                  <span className="cert-source">{cert.source}</span> • <time>{cert.date}</time>
                </p>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
