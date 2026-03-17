import React from 'react';

const Experience = () => {
  return (
    <section id="experience">
      <h1 className="section-heading mb75px">
        <span>
          <i className="fas fa-briefcase"></i>
        </span>
        <span> Experience</span>
      </h1>
      <div className="timeline">
        <div className="timeline-box">
          <div className="timeline-container">
            <h3 className="experience-designation m0 m-blue"> Front-End Developer </h3>
            <h4 className="experience-company-name"> MVA App </h4>
            <h5 className="experience-duration m0"> Jul 2020 - Present </h5>
            <p className="experience-description text-align-justify">
              <ul className="experience-description text-align-end" style={{ listStyleType: 'none' }}>
                <li>Worked on Verizon MVA application using React js.</li>
                <li>Worked on fixing the Production defect.</li>
                <li>Working on the unit test case using jest.</li>
              </ul>
            </p>
          </div>
        </div>

        <div className="timeline-box right text-align-end">
          <div className="timeline-container">
            <h3 className="experience-designation m0 m-blue"> Front-End Developer </h3>
            <h4 className="experience-company-name"> News Flash </h4>
            <h5 className="experience-duration m0"> Mar 2019 - Jun 2020 </h5>
            <p className="experience-description text-align-justify">
              <ul className="experience-description text-align-end" style={{ listStyleType: 'none' }}>
                <li>Design, develop and test HTML5, CSS3, Bootstrap, JavaScript and React JS that meets accessibility and web browser standards for website.</li>
                <li>Designed CSS templates for use in all pages on the website working with CSS Background, positioning, text, border, margin, padding, and table.</li>
                <li>Developed user interface by using the React JS, Flux for SPA development.</li>
                <li>Used React-Router to turn application into Single Page Application.</li>
              </ul>
            </p>
          </div>
        </div>

        <div className="timeline-box left text-align-end">
          <div className="timeline-container">
            <h3 className="experience-designation m0 m-blue"> Devops-Engineer </h3>
            <h4 className="experience-company-name"> Scan and Go App </h4>
            <h5 className="experience-duration m0"> Sep 2017 - Jan 2019 </h5>
            <p className="experience-description text-align-justify">
              <ul className="experience-description text-align-end" style={{ listStyleType: 'none' }}>
                <li>Created and maintained the CI-CD pipeline using Jenkins.</li>
                <li>Designed CSS templates for use in all pages on the website working with CSS Background, positioning, text, border, margin, padding, and table.</li>
                <li>Fixed the production defect issue and created new API using Node js.</li>
                <li>Created the swagger API Documentation for Node JS API.</li>
              </ul>
            </p>
          </div>
        </div>

        <div id="timeline-divider">
          <div className="timeline-traveller">
            <div>
              <i className="fas fa-plane"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;