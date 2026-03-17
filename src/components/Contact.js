import React from "react";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import {
  faAddressCard,
  faEnvelope,
  faMapMarkerAlt,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <>
      <section id="contact">
        <h1 className="section-heading mb50px">
          <span>
            <FontAwesomeIcon icon={faAddressCard} />
          </span>
          <span> Contact </span>
        </h1>
        <div id="contact-container">
          <div id="contact-form-container">
            <form id="contact-form">
              <input
                id="input-name"
                name="name"
                type="text"
                placeholder="Your Name"
              />
              <input
                id="input-email"
                name="input-email"
                type="text"
                required
                placeholder="Your Email"
              />
              <textarea
                id="input-message"
                name="input-message"
                rows="2"
                cols="40"
                placeholder="Message"
              ></textarea>
              <button className="sub-btn" type="submit">
                SEND MESSAGE
              </button>
            </form>
          </div>
          <div id="my-details-container">
            <h3>Get In touch</h3>
            <p>
              Please feel free to contact me if you need any further information
            </p>
            <h3>My Address</h3>
            <div className="my-details-info-container">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span>Asansol, India</span>
            </div>
            <div className="my-details-info-container">
              <FontAwesomeIcon icon={faMobileAlt} />
              <span>+918016399881</span>
            </div>
            <div className="my-details-info-container">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>rahulb631@gmail.com</span>
            </div>
          </div>
        </div>

        <div class="text-center social-icons">
          <ul class="horizontal-list-contact">
            <li>
              <a
                href="https://www.linkedin.com/in/rahul-burnwal-13304aa5/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
              </a>
            </li>

            {/* <!-- <li>
              <a
                href="https://stackoverflow.com/users/5608414/manisha?tab=profile"
                target="_blank"
              >
                <i class="fab fa-stack-overflow"></i>
              </a>
            </li> -->

            <!-- <li>
              <a
                href="https://plus.google.com/u/0/103030702784925512939"
                target="_blank"
              >
                <i class="fab fa-google-plus-g"></i>
              </a>
            </li> --> */}

            {/* <li>
              <a href="https://www.facebook.com/rburnwal2" target="_blank">
                <i class="fab fa-facebook-f"></i>
              </a>
            </li> */}

            <li>
              <a href="https://github.com/rahul1113" target="_blank">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Contact;
