import React from "react";

const Winner = ({ word, resetGame }) => {
  return (
    <div className="winner-container">
      <h1 className="winner-heading">Winner!</h1>
      <p className="winner-content">The word was: {word}</p>
      <button className="winner-btn" onClick={resetGame}>
        Play Again
      </button>
    </div>
  );
};

export default Winner;
