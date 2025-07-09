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
        <a className="navbar-brand" to="#">
          <i className="bi bi-playstation" style={{ fontSize: "2vw" }}></i>
        </a>
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
          <div className="navbar-nav">
            <NavLink
              className="nav-link navTextColor"
              aria-current="page"
              to={`${rootPath}/`}
              end
            >
              Home
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
