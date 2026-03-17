import React from 'react';

const Skills = () => {
  return (
    <section id="skills">
      <h1 className="section-heading mb75px">
        <span>
          <i className="fas fa-chalkboard-teacher"></i>
        </span>
        <span> SKILLS </span>
      </h1>

      <div className="skills-display">
        <div className="skill-progress">
          <div className="eighty-five-percent mb-orange">
            <div className="skill-name">
              <span> HTML </span>
            </div>
          </div>
        </div>
        <div className="skill-progress">
          <div className="eighty-percent mb-light-purple">
            <div className="skill-name">
              <span> CSS </span>
            </div>
          </div>
        </div>
        <div className="skill-progress">
          <div className="eighty-percent mb-teal">
            <div className="skill-name">
              <span> Javascript </span>
            </div>
          </div>
        </div>
        <div className="skill-progress">
          <div className="eighty-percent mb-blue">
            <div className="skill-name">
              <span> React Js </span>
            </div>
          </div>
        </div>
        <div className="skill-progress">
          <div className="eighty-percent mb-light-purple">
            <div className="skill-name">
              <span> Redux </span>
            </div>
          </div>
        </div>
        <div className="skill-progress">
          <div className="fifty-percent mb-blue">
            <div className="skill-name">
              <span> Java </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;