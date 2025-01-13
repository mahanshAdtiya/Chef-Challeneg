import React from "react";

const EMPTY = "__";

const DisplayBoard = ({ word, guessedWord }) => {
  // console.log("Guessed Letters: ", guessedWord);
  // console.log("Word: ", word);

  return (
    <div className="display-board-container">
      {word.split("").map((letter, index) => (
        <span key={index} className="display-board-letter">
          {guessedWord.has(letter) ? letter.toUpperCase() : EMPTY}
        </span>
      ))}
    </div>
  );
};

export default DisplayBoard;
