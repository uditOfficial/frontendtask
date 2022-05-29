import React from "react";
import { Container } from "react-bootstrap";

function MarketData() {
  return (
    <div className="back-grad-color">
      <Container className="market-container">
        <div className="market-items">
          <div className="white">MARKET CAP</div>
          <div className="white">$1.70T</div>
        </div>
        <div className="market-items">
          <div className="white">EXCHANGE VOL</div>
          <div className="white">$33.67B</div>
        </div>
        <div className="market-items">
          <div className="white">ASSETS</div>
          <div className="white">2,295</div>
        </div>
        <div className="market-items">
          <div className="white">EXCHANGES</div>
          <div className="white">73</div>
        </div>
        <div className="market-items">
          <div className="white">MARKETS</div>
          <div className="white">15,793</div>
        </div>
        <div className="market-items">
          <div className="white">BTC DOM INDEX</div>
          <div className="white">32.9%</div>
        </div>
      </Container>
    </div>
  );
}

export default MarketData;
