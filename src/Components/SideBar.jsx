import React, { useEffect } from "react";

export const SideBar = ({ onclick, hamburgerActive }) => {
  useEffect(() => {
    console.log("Hamburger Menu", hamburgerActive);
  }, [hamburgerActive]);
  return (
    <nav className={`sidebar ${!hamburgerActive ? "show-sidebar" : ""}`}>
      <div
        className={`hamburger-menu ${hamburgerActive ? "active" : ""}`}
        onClick={onclick}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <h1 className="company-logo">
        job-<span>portal</span>
      </h1>

      <ul className="nav-items">
        <li className="nav-item">
          <a href="#section-one" className="link">
            section one
          </a>
        </li>
        <li className="nav-item">
          <a href="#section-two" className="link">
            section two
          </a>
        </li>
        <li className="nav-item">
          <a href="#section-three" className="link">
            section three
          </a>
        </li>
        <li className="nav-item">
          <a href="#section-four" className="link">
            section four
          </a>
        </li>
        <li className="nav-item">
          <a href="#section-five" className="link">
            section five
          </a>
        </li>
      </ul>
    </nav>
  );
};
