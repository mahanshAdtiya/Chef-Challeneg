import React from "react";
import { useState } from "react";

const KeyboardButton = ({ letter, getInput, pressed }) => {
  const [pressedKeys, setPressedKeys] = useState(new Set());

  const handleClick = () => {
    getInput(letter.toLowerCase());
    setPressedKeys((prev) => new Set(prev).add(letter));
  };

  return (
    <button
      className={`keyboard-button ${pressedKeys.has(letter) ? "pressed" : ""}`}
      onClick={handleClick}
      type="button"
    >
      {letter}
    </button>
  );
};

export default KeyboardButton;
