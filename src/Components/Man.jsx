import React from "react";

const Man = ({ wrongGuesses }) => {
  return (
    <div className="man-container">
      <svg className="man" height="250" width="200">
        {/* <!-- Rod --> */}
        <line x1="60" y1="20" x2="160" y2="20" />
        <line x1="160" y1="20" x2="160" y2="50" />
        <line x1="60" y1="20" x2="60" y2="230" />
        <line x1="10" y1="230" x2="110" y2="230" />

        {/* <!-- Head --> */}
        <circle
          cx="160"
          cy="70"
          r="20"
          className={wrongGuesses < 1 ? "hide" : ""}
        />
        {/* <!-- Body --> */}
        <line
          x1="160"
          y1="90"
          x2="160"
          y2="150"
          className={wrongGuesses < 2 ? "hide" : ""}
        />
        {/* <!-- Arms --> */}
        <line
          x1="160"
          y1="120"
          x2="140"
          y2="100"
          className={wrongGuesses < 3 ? "hide" : ""}
        />
        <line
          x1="160"
          y1="120"
          x2="180"
          y2="100"
          className={wrongGuesses < 4 ? "hide" : ""}
        />
        {/* <!-- Legs --> */}
        <line
          x1="160"
          y1="150"
          x2="140"
          y2="180"
          className={wrongGuesses < 5 ? "hide" : ""}
        />
        <line
          x1="160"
          y1="150"
          x2="180"
          y2="180"
          className={wrongGuesses < 6 ? "hide" : ""}
        />
      </svg>
    </div>
  );
};

export default Man;
