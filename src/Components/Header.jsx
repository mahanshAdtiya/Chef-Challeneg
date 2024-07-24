import React from "react";

const Header = ({ attempts }) => {
  return (
    <div className="header">
      <h1>Chef's Challenge</h1>
      <h3>
        You have <span className="life-counter">{attempts}</span> lives left
      </h3>
    </div>
  );
};

export default Header;
