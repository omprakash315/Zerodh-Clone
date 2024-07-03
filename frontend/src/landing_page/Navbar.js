import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-xl bg-body-tertiary fixed-top">
      <div className="container-fluid mx-5">
        <Link className="navbar-brand mx-5" aria-current="page" to="/">
          <img src="image/Home/logo.svg" alt="logo" height={"20px"} width={"130px"} />
        </Link>
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
        <div className="collapse navbar-collapse nav justify-content-end mx-5" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item px-3">
              <Link className="nav-link" aria-current="page" to="/signup">
                SignUp
              </Link>
            </li>
            <li className="nav-item px-3">
              <Link className="nav-link" aria-current="page" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item px-3">
              <Link className="nav-link" aria-current="page" to="/product">
                Product
              </Link>
            </li>
            <li className="nav-item px-3">
              <Link className="nav-link" aria-current="page" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item px-3">
              <Link className="nav-link" aria-current="page" to="/support">
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
