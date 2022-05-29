import React from "react";
import { FaFacebookSquare, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div
      className="footer back-grad-color"
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-around",
        padding: "50px",
        color: "white",
        height: "auto",
      }}
    >
      <div>
        <h5>COINCAP.IO</h5>
        <p style={{ margin: "2px", fontSize: "small" }} className="p-color">
          Methodology
        </p>
        <p style={{ margin: "2px", fontSize: "small" }} className="p-color">
          Support
        </p>
        <p style={{ margin: "2px", fontSize: "small" }} className="p-color">
          Our API
        </p>
        <p style={{ margin: "2px", fontSize: "small" }} className="p-color">
          Rate Comparison
        </p>
        <p style={{ margin: "2px", fontSize: "small" }} className="p-color">
          Careers
        </p>
      </div>
      <div>
        <h5>LEGALS</h5>
        <p style={{ margin: "2px", fontSize: "small" }} className="p-color">
          Terms of Service
        </p>
        <p style={{ margin: "2px", fontSize: "small" }} className="p-color">
          Privacy Policy
        </p>
        <h5>DISCLAIMER</h5>
        <p style={{ margin: "2px", fontSize: "small" }} className="p-color">
          Neither ShapeShift AG nor CoinCap are in <br /> any way associated
          with CoinMarketCap, <br />
          LLC or any of its goods and services.
        </p>
      </div>
      <div>
        <h5>FOLLOW US</h5>
        <FaTwitter style={{ margin: "10px" }} />
        <FaFacebookSquare />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h5>COINCAP APP AVAILABLE ON</h5>
        <img
          width={150}
          src="https://coincap.io/static/images/stores/google_play.svg"
        />
        <img
          width={150}
          src="https://coincap.io/static/images/stores/apple_store.svg"
        />
      </div>
    </div>
  );
}

export default Footer;
