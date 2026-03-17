import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header id="body-header">
      <nav>
        <div className="dropdown-menu text-right">
          <div className="bars">
            <FontAwesomeIcon icon={faBars} />
          </div>
          <div className="dropdown-list nav-menu">
            <ul className="no-list-style">
              <li>
                <a href="#"> Home </a>
              </li>
              <li>
                <a href="#about"> About </a>
              </li>
              <li>
                <a href="#skills"> Skills </a>
              </li>
              <li>
                <a href="#experience"> Experience </a>
              </li>
              <li>
                <a href="#education"> Education </a>
              </li>
              <li>
                <a href="#contact"> Contact </a>
              </li>
            </ul>
          </div>
        </div>
        <ul className="horizontal-list text-center nav-menu header-fix">
          <li>
            <a href="#"> Home </a>
          </li>
          <li>
            <a href="#about"> About </a>
          </li>
          <li>
            <a href="#skills"> Skills </a>
          </li>
          <li>
            <a href="#experience"> Experience </a>
          </li>
          <li>
            <a href="#education"> Education </a>
          </li>
          <li>
            <a href="#contact"> Contact </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
