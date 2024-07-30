import React from "react";

const Header = ({ attempts, time }) => {
  return (
    <div className="header">
      <div className="header-heading">
        <h1>Chef's Challenge</h1>
      </div>
      <div className="header-content">
        <h3>
          You have <span className="life-counter">{attempts}</span> lives left
        </h3>
        <p style={{display: 'flex', justifyContent: 'center'}}>Time: <span style={{color: 'teal'}}> {time}</span></p>
      </div>
    </div>
  );
};

export default Header;
