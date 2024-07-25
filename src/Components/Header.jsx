import React from "react";

const Header = ({ attempts }) => {
  return (
    <div className="header">
      <div className="header-heading">
        <h1>Chef's Challenge</h1>
      </div>
      <div className="header-content">
        <h3>
          You have <span className="life-counter">{attempts}</span> lives left
        </h3>
      </div>
    </div>
  );
};

export default Header;
