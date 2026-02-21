import React from "react";
import "./Home.scss";
import NBSignature1 from "../../assets/NoBGImage.png";
import testNicPic from "../../assets/testNicPic.jpg";

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
          <h3>Stories that bloom from imagination</h3>
        </div>
        <br />
        <section className="about-section">
          <h2 className="about-title">About Nicole</h2>

          <div className="about-container">
            <div className="about-image-wrapper">
              <img
                src={testNicPic}
                alt="Nicole B. Fletes portrait"
                className="about-image"
              />
            </div>

            <div className="about-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
                nisi arcu. Aliquam tincidunt nisl non sapien sagittis, et
                vestibulum justo vestibulum. Nunc pretium dapibus malesuada.
                Fusce ac justo vulputate, vehicula orci laoreet, aliquam risus.
                Maecenas eu ligula sed justo semper faucibus at a mi. Praesent
                ante nisl, feugiat sit amet lobortis non, rhoncus ac nunc.
                Quisque tincidunt, orci nec pellentesque rutrum, velit magna
                luctus magna, id posuere magna nulla sit amet mauris. Ut
                placerat ex ac metus luctus placerat.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  );
}
