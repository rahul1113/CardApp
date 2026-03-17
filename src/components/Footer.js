import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faFacebookF,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div id="name-social-container">
        <div>
          <ul className="horizontal-list text-center social-icons">
            <li>
              <a
                href="https://www.linkedin.com/in/rahul-burnwal-13304aa5/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/rburnwal2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/rahul1113"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
