import React from 'react';
import '../styles/_experience.scss';

function Experience() {
  const jobs = [
    {
      company: 'Blume Global',
      title: 'Sr Specialist – Technical & Product Documentation',
      location: 'Bangalore, KA',
      period: '2021 - 2024',
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
      period: '2020 - 2021',
      details: [
        'Worked with IBM JAZZ, DOORS for project documentation and version control.',
        'Facilitated user-friendly deliverables with accurate technical content.'
      ]
    }
    // Add more entries here as needed
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2>Experience</h2>
        {jobs.map((job, index) => (
          <div className="job" key={index}>
            <h3>{job.company}</h3>
            <p className="title">{job.title} <span>• {job.location}</span></p>
            <p className="period">{job.period}</p>
            <ul>
              {job.details.map((d, i) => <li key={i}>{d}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;