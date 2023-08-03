import React from "react";
import "../style/main.scss";

function EmptyComponent() {
  return (
    <div style={{ width: "70%", margin: "0 auto" }}>
      <h1 className="dash-title">Let's Explore The Power Of AI</h1>
      <div className="common-que-flex">
        <div>
          <p
            style={{
              border: "1px solid lightgray",
              padding: "10px",
              textAlign: "justify",
              width: "500px",
            }}
          >
            I want to know how many transactions have been processed on the BTTC
            network?
          </p>
          <p
            style={{
              border: "1px solid lightgray",
              padding: "10px",
              textAlign: "justify",
              width: "500px",
            }}
          >
            I want to know the total value of BTTC tokens that have been
            transacted on the network?
          </p>
          <p
            style={{
              border: "1px solid lightgray",
              padding: "10px",
              textAlign: "justify",
              width: "500px",
            }}
          >
            I want to know the average transaction fee for a BTTC transaction.?
          </p>
        </div>
      </div>
    </div>
  );
}

export default EmptyComponent;
