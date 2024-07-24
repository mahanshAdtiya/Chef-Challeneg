import React from "react";

const GameOver = ({ word, resetGame }) => {
  return (
    <div>
      <h1>Game Over</h1>
      <p>The word was: {word}</p>
      <button onClick={resetGame}>Play Again</button>
    </div>
  );
};

export default GameOver;
