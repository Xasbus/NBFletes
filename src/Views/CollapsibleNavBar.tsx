import React from "react";
import { NavLink } from "react-router";

export function CollapsibleNavbar() {
  const domain = window.location.hostname;
  let rootPath = "";
  if (domain === "xasbus.github.io") rootPath = "/NBFletes";
  console.log(`The domain is ${domain}`);
  return (
    <nav className="nav-pills navbar navbar-expand-md bg-body-tertiary colNavBarColor">
      <div className="container-fluid navColor">
        <button
          className="navbar-toggler colNavBarColor"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon "></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to={`${rootPath}/`} end>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={`${rootPath}/latestupdates`}>
                Latest Updates
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={`${rootPath}/newsletter`}>
                Newsletter Signup
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
