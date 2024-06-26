import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div className="bg-dark">
      <nav className="navbar navbar-expand-lg font-monospace">
        <div className="container">
          <a className="navbar-brand text-info" href="#">
            Get Jacked
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link text-light" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/help">
                  Help
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/contacts">
                  Contacts
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
    </>
  );
};

export default Navigation;
