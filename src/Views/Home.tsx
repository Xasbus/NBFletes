import React from "react";
import { Navbar } from "./NavBar";
import "./Home.scss";

export function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <h1>Test h1</h1>
        <h2>test h2</h2>
      </main>
      <footer></footer>
    </>
  );
}
