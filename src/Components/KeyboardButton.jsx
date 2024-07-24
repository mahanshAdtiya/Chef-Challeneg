import React from "react";

const KeyboardButton = ({ letter, getInput }) => {
  const handleClick = () => {
    getInput(letter.toLowerCase());
  };

  return (
    <button className="keyboard-button" onClick={handleClick} type="button">
      {letter}
    </button>
  );
};

export default KeyboardButton;
