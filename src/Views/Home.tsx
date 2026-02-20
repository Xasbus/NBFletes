import React from "react";
import "./Home.scss";
import NBSignature1 from "../../assets/NoBGImage.png";

export function Home() {
  return (
    <>
      <main>
        <div className="hero-signature">
          <img
            className="signature-image"
            src={NBSignature1}
            alt="NBF Signature"
          />
        </div>

        <div className="content-wrapper">
          <h1>Home Page</h1>
        </div>
      </main>
      <footer></footer>
    </>
  );
}
