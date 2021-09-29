import React from "react";

function Nav() {
  return (
    <nav className="nav">
      <ul className="nav__container">
        <li className="nav__links">
          <a href="#" className="nav__link">
            HOME
          </a>
        </li>
        <li className="nav__links">
          <a href="#about" className="nav__link">
            ABOUT
          </a>
        </li>
        <li className="nav__links">
          <a href="#projects" className="nav__link">
            PORTFOLIO
          </a>
        </li>
        <li className="nav__links">
          <a href="#contact" className="nav__link">
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
