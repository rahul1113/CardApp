import { faCarSide } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Education = () => {
  return (
    <section id="education">
      <h1 className="section-heading mb75px">
        <span>
          <i className="fas fa-graduation-cap"></i>
        </span>
        <span> Education </span>
      </h1>
      <div className="timeline">
        <div className="timeline-box abc">
          <div className="timeline-container">
            <div className="timeline-logo">
              <img
                src="https://img.collegepravesh.com/2017/02/KGEC-Kalyani-Logo.png"
                alt="KGEC Logo"
              />
            </div>
            <h3 className="experience-designation m0 m-blue"> B.Tech </h3>
            <h4 className="experience-degree m0 m-blue">MAKAUT</h4>
            <h4 className="experience-company-name">
              {" "}
              Kalyani Government Engineering College{" "}
            </h4>
            <h5 className="experience-duration m0"> Aug 2013 - June 2017 </h5>
          </div>
        </div>
        <div className="timeline-box abc">
          <div className="timeline-container">
            <div className="timeline-logo">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b7/West_Bengal_Council_of_Higher_Secondary_Education_Logo.png/220px-West_Bengal_Council_of_Higher_Secondary_Education_Logo.png"
                alt="WBCHSE Logo"
              />
            </div>
            <h3 className="experience-designation m0 m-blue"> 12th </h3>
            <h4 className="experience-degree m0 m-blue">WBCHSE</h4>
            <h4 className="experience-company-name">
              {" "}
              Jaharmul Jalan High School{" "}
            </h4>
            <h5 className="experience-duration m0"> 2010 - 2012 </h5>
          </div>
        </div>
        <div className="timeline-box abc">
          <div className="timeline-container">
            <div className="timeline-logo">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/d/d9/West_Bengal_Board_of_Secondary_Education_Logo.png"
                alt="WBBSE Logo"
              />
            </div>
            <h3 className="experience-designation m0 m-blue"> 10th </h3>
            <h4 className="experience-degree m0 m-blue">WBBSE</h4>
            <h4 className="experience-company-name">
              {" "}
              Ukhra Adarsha Hindi High School (H.S){" "}
            </h4>
            <h5 className="experience-duration m0"> 2010 </h5>
          </div>
        </div>
        <div id="timeline-divider">
          <div className="timeline-traveller">
            <div>
              <FontAwesomeIcon
                icon={faCarSide}
                className="car-icon"
                color="blue"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
