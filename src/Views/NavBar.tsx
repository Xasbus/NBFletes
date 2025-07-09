import React from "react";
import { NavLink } from "react-router";

export function Navbar() {
  const domain = window.location.hostname;
  let rootPath = "";
  if (domain === "xasbus.github.io") rootPath = "/repository name goes here";
  console.log(`The domain is ${domain}`);
  return (
    <>
      <nav className="nav nav-pills">
        <NavLink className="nav-link" to={`${rootPath}/`}>
          HOME
        </NavLink>
      </nav>
    </>
  );
}
