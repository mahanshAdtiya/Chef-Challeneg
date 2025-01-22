import React from "react";
import KeyboardButton from "./KeyboardButton";

const Keyboard = ({ getInput, answer}) => {
  const getLetters = () => {
    let result = [];

    for (let i = 65; i < 65 + 26; i++) {
      result.push(String.fromCharCode(i));
    }

    return result;
  };

  const letters = getLetters();

  return (
    <div className="keyboard-container">
      <div className="keyboard">
        {letters.map((letter) => (
          <KeyboardButton getInput={getInput} letter={letter} key={letter} answer={answer}/>
        ))}
      </div>
    </div>
  );
};

export default Keyboard;
