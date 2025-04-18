import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-expand-md navbar-dark bg-primary">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link to="/profile">
              <div className={"nav-link"} href="#">
                Profile
              </div>
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/counters">
              <div className={"nav-link"} href="#">
                Counters
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/form">
              <div className={"nav-link"} href="#">
                Form
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/yupValidatedForm">
              <div className={"nav-link"} href="#">
                Yup Validated Form
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/zodValidatedForm">
              <div className={"nav-link"} href="#">
                Zod Validated Form
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/user">
              <div className={"nav-link"} href="#">
                User Table
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
