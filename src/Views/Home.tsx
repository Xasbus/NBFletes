import React from "react";
import "./Home.scss";
import NBSignature1 from "../../assets/NoBGImage.png";

export function Home() {
  return (
    <>
      <main className="background-wrapper">
        <div className="title-container content-wrapper">
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
