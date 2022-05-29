import React from "react";
import { Button, Container, Spinner } from "react-bootstrap";
import { useData } from "../../Contexts/DataProvider";

function convertToInternationalCurrencySystem(labelValue) {
  // Nine Zeroes for Billions
  return Math.abs(Number(labelValue)) >= 1.0e9
    ? (Math.abs(Number(labelValue)) / 1.0e9).toFixed(2) + "b"
    : // Six Zeroes for Millions
    Math.abs(Number(labelValue)) >= 1.0e6
    ? (Math.abs(Number(labelValue)) / 1.0e6).toFixed(2) + "m"
    : // Three Zeroes for Thousands
    Math.abs(Number(labelValue)) >= 1.0e3
    ? (Math.abs(Number(labelValue)) / 1.0e3).toFixed(2) + "k"
    : Math.abs(Number(labelValue));
}

function CoinTable() {
  const { limit, setLimit, hiddenSpinner, data } = useData();

  return (
    <div
      style={{
        position: "relative",
        top: "-100px",
      }}
    >
      <Container style={{ display: "flex", "flex-direction": "column" }}>
        <table
          style={{ "box-shadow": "rgb(0 0 0 / 40%) 0px 2px 15px -3px" }}
          className="data-table"
        >
          <thead style={{ "border-radius": "10px" }} className="table-head">
            <tr>
              <th>Rank</th>
              <th className="name-col">Name</th>
              <th style={{ textAlign: "right" }}>Price</th>
              <th style={{ textAlign: "right" }}>Market Cap</th>
              <th style={{ textAlign: "right" }}>VWAP (24Hr)</th>
              <th style={{ textAlign: "right" }}>Supply</th>
              <th style={{ textAlign: "right" }}>Volume (24Hr)</th>
              <th style={{ textAlign: "right" }}>Change (24Hr)</th>
            </tr>
          </thead>
          <tbody>
            {data.map((crypto, index) => {
              return (
                <tr
                  style={{ backgroundColor: "white" }}
                  className="table-rows"
                  key={index}
                >
                  <td style={{ textAlign: "center" }}>{crypto.rank}</td>
                  <td style={{ textAlign: "left" }}>
                    <div
                      style={{
                        display: "flex",
                        "flex-direction": "row",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={`https://assets.coincap.io/assets/icons/${crypto.symbol.toLowerCase()}@2x.png`}
                        alt={`${crypto.symbol} logo`}
                        height={30}
                        width={30}
                        style={{ marginRight: "10px" }}
                      />
                      <div
                        style={{
                          display: "flex",
                          "flex-direction": "column",
                          justifyContent: "center",
                        }}
                      >
                        <h6 style={{ margin: "0px" }}>{crypto.name}</h6>
                        <p style={{ margin: "0px", fontSize: "small" }}>
                          {crypto.symbol}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td style={{ textAlign: "right" }}>{`$${parseFloat(
                    crypto.priceUsd
                  )
                    .toFixed(2)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</td>
                  <td
                    style={{ textAlign: "right" }}
                  >{`$${convertToInternationalCurrencySystem(
                    crypto.marketCapUsd
                  )}`}</td>
                  <td style={{ textAlign: "right" }}>{`$${parseFloat(
                    crypto.vwap24Hr
                  )
                    .toFixed(2)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</td>
                  <td
                    style={{ textAlign: "right" }}
                  >{`$${convertToInternationalCurrencySystem(
                    crypto.supply
                  )}`}</td>
                  <td
                    style={{ textAlign: "right" }}
                  >{`$${convertToInternationalCurrencySystem(
                    crypto.volumeUsd24Hr
                  )}`}</td>
                  <td
                    style={{ textAlign: "right" }}
                    className={
                      parseFloat(crypto.changePercent24Hr) > 0 ? "green" : "red"
                    }
                  >{`${parseFloat(crypto.changePercent24Hr).toFixed(2)}%`}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div
          style={{ alignSelf: "center", margin: "20px" }}
          className="connect-button"
        >
          <Button
            onClick={() => {
              setLimit(limit + 50);
            }}
            className="connect"
          >
            <span hidden={!hiddenSpinner}>Load More</span>
            <Spinner hidden={hiddenSpinner} animation="border" />
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default CoinTable;
