import React from "react";

const Winner = ({ word, resetGame }) => {
  return (
    <div>
      <h1>Winner!</h1>
      <p>The word was: {word}</p>
      <button onClick={resetGame}>Play Again</button>
    </div>
  );
};

export default Winner;
