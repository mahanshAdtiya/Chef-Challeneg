import React, { useState } from "react";

const KeyboardButton = ({ letter, getInput, pressed, answer }) => {
  const [pressedKeys, setPressedKeys] = useState([]);

  const handleClick = () => {
    getInput(letter.toLowerCase());
    if (!pressedKeys.includes(letter)) {
      setPressedKeys((prev) => [...prev, letter]);
    }
  };

  const isLetterInAnswer = answer.includes(letter.toLowerCase());

  return (
    <button
      className={`keyboard-button ${pressedKeys.includes(letter)
        ? isLetterInAnswer
          ? "correct"
          : "wrong"
        : "neutral"}`}

      onClick={handleClick}
      type="button"
    >
      {letter}
    </button>
  );
};

export default KeyboardButton;
