import React from "react";
import Keyboard from "./Keyboard";

const Input = ({ getInput, answer}) => {
  return (
    <div className="input-container">
      <Keyboard getInput={getInput} answer={answer}/>
    </div>
  );
};

export default Input;
