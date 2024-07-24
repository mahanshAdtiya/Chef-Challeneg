import React from "react";
import KeyboardButton from "./KeyboardButton";

const Keyboard = ({ getInput }) => {
  const getLetters = () => {
    let result = [];

    for (let i = 65; i < 65 + 26; i++) {
      result.push(String.fromCharCode(i));
    }

    return result;
  };

  const letters = getLetters();

  const buttons = letters.map((letter) => (
    <KeyboardButton
      getInput={getInput}
      letter={letter}
      key={letter.charCodeAt(0)}
    />
  ));

  return <div className="keyboard-container">{buttons}</div>;
};

export default Keyboard;
