import React from 'react';
import '../styles/_experience.scss';

function Experience() {
  const jobs = [
    {
      company: 'Blume Global',
      title: 'Sr Specialist – Technical & Product Documentation',
      location: 'Bangalore, KA',
      period: '2021 – 2024',
      details: [
        'Developed user guides, API docs, and release notes for SaaS products.',
        'Produced instructional videos and managed doc outputs (web/PDF).',
        'Reviewed Jira tickets to align documentation with releases.'
      ]
    },
    {
      company: 'Nexteer Automotive',
      title: 'Senior Technical Writer',
      location: 'Bangalore, KA',
      period: '2020 – 2021',
      details: [
        'Worked with IBM JAZZ, DOORS for project documentation and version control.',
        'Facilitated user-friendly deliverables with accurate technical content.'
      ]
    },
    // More jobs can be added here
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <div className="experience-list">
          {jobs.map((job, index) => (
            <article className="experience-card" key={index}>
              <h3 className="company">{job.company}</h3>
              <p className="role">
                {job.title}
                <span className="location"> • {job.location}</span>
              </p>
              <p className="period">
                <time>{job.period}</time>
              </p>
              <ul className="details">
                {job.details.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
