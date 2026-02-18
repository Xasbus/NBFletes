import React from "react";
import { CollapsibleNavbar } from "./CollapsibleNavBar";

export function Header() {
  return (
    <header className="header-wrapper">
      <div className="header-inner">
        <CollapsibleNavbar />
      </div>
    </header>
  );
}
