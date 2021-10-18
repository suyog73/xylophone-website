import React from "react";

const Header = () => {
  const myStyle = {
    textAlign: "center",
  };

  return (
    <>
      <h1 style={myStyle}>
        <span style={{ color: "#c90a1d" }} className="x">
          X
        </span>
        <span style={{ color: "#bdc90a" }} className="y">
          Y
        </span>
        <span style={{ color: "#1731b3" }} className="l">
          L
        </span>
        <span style={{ color: "#6d7273" }} className="o">
          O
        </span>
        <span style={{ color: "#c24f15" }} className="p">
          P
        </span>
        <span style={{ color: "#6d32a8" }} className="h">
          H
        </span>
        <span style={{ color: "#4ccaed" }} className="o">
          O
        </span>
        <span style={{ color: "#32a852" }} className="n">
          N
        </span>
        <span style={{ color: "#c2155a" }} className="e">
          E
        </span>
      </h1>
    </>
  );
};

export default Header;
