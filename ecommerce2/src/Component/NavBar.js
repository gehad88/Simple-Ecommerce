import React from "react";
import { useColorChange } from "./Style/ColorChanger"; // Import the custom hook
import "./Style/NavStyle.css";
import { Link } from "react-router-dom";
import storeImage from "../Images/store2.png";

function NavBar() {
  const buttonColor = useColorChange("blue"); // Initial color

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/">
          <img src={storeImage} alt="" width="40px" className="navbar-brand" />
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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link pulse-animation"
                href="/"
                style={{ color: buttonColor }}
                to="/Categories"
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
