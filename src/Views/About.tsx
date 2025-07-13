import React from "react";
import NBSignature1 from "../../assets/NoBGImage.png";

export function About() {
  return (
    <>
      <main className="background-wrapper">
        <div className="title-container content-wrapper">
          <h1>About Page</h1>
          <img
            className="title-image"
            title="NBSignature"
            alt="NBSignature"
            width="40%"
            height="40%"
            src={NBSignature1}
          />
        </div>
      </main>
      <footer></footer>
    </>
  );
}
