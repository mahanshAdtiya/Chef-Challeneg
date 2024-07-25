import React from "react";

const GameOver = ({ word, resetGame }) => {
  return (
    <div className="over-container">
      <h1 className="over-heading">Game Over</h1>
      <p className="over-content">The word was: {word}</p>
      <button className="over-btn" onClick={resetGame}>
        Play Again
      </button>
    </div>
  );
};

export default GameOver;
