import React from 'react';

const About = () => {
  return (
    <section id="about">
      <div id="my-image">
        <img src={require('../assets/images/Profilepic.jpg')} alt="Profile" />
      </div>
      <div className="text-center">
        <h1 id="my-name">Rahul Burnwal</h1>
      </div>
      <div className="dividerLight"></div>
      <div>
        <h1 className="heading-1">Front-end Developer</h1>
      </div>
      <div id="about-para">
        <p>
          Hi..! I am a Passionate <span className="text-highlight">front-end web developer</span> with 1.5 years of experience using JavaScript, HTML5, 
          and CSS3 to build all aspects of the user experience and user interface for client-facing landing pages. 
          Specializes in using <span className="text-highlight">Javascript and ReactJS</span> to build e-commerce sites.
        </p>
      </div>
    </section>
  );
};

export default About;