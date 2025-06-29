import React from 'react';
import '../styles/_skills.scss';

function Skills() {
  const skills = [
    { category: 'Documentation', items: ['User Guides', 'Release Notes', 'API Docs'] },
    { category: 'Tools & Tech', items: ['Markdown', 'DITA XML', 'Git', 'Oxygen XML'] },
    { category: 'Processes', items: ['SDLC', 'CDLC', 'CMS'] }
  ];

  return (
    <section id="skills" className="skills" aria-labelledby="skills-heading">
      <div className="container">
        <h2 id="skills-heading" className="section-title">Skills</h2>
        <div className="skills-grid">
          {skills.map((group, idx) => (
            <div key={idx} className="skill-group">
              <h4 className="skill-category">{group.category}</h4>
              <ul className="skill-list">
                {group.items.map((item, i) => (
                  <li key={i} className="skill-item">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
