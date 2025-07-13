import React from "react";
import "./Home.scss";
import NBSignature1 from "../../assets/NoBGImage.png";

export function Home() {
  return (
    <>
      <main>
        <img
          title="NBSignature"
          alt="NBSignature"
          width="60%"
          height="60%"
          src={NBSignature1}
        />
      </main>
      <footer></footer>
    </>
  );
}
