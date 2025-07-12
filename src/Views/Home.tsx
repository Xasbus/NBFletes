import React from "react";
import { Navbar } from "./NavBar";
import "./Home.scss";
import NBSignature2 from "../../assets/NBSignaturePicture.jpg";

export function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <h1>Nicole B. Fletes</h1>
        <h2>test h2</h2>
        <img
          title="NBSignature"
          alt="NBSignature"
          width="20vw"
          height="20vw"
          src={NBSignature2}
        />
      </main>
      <footer></footer>
    </>
  );
}
