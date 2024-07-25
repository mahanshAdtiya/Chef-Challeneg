import React, { useState, useEffect } from "react";
import "./assets/sass/base.scss";
import { getRandomWord } from "./utils/random.utils";
import {Header, Rules, Man, DisplayBoard, Input, Winner, GameOver} from './Components';

const MAX_WRONG_GUESSES = 6;

function App() {
  const [word, setWord] = useState(getRandomWord());
  const [guessedWord, setGuessedWord] = useState(new Set());
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isWinner, setIsWinner] = useState(false);
  const [showRules, setShowRules] = useState(false);

  const handleClick = () => {
    setShowRules(!showRules);
  };

  const getInput = (letter) => {
    let answer = word.word.toLowerCase();
    let newWrongGuess = wrongGuesses + (answer.includes(letter) ? 0 : 1);
    setGuessedWord((prev) => new Set(prev).add(letter));
    setWrongGuesses(newWrongGuess);
  };

  useEffect(() => {
    const answer = word.word.toLowerCase();
    const allLettersGuessed = answer
      .split("")
      .every((char) => guessedWord.has(char) || char === " ");

    setIsWinner(allLettersGuessed);
    setIsGameOver(wrongGuesses >= MAX_WRONG_GUESSES);
  }, [guessedWord, wrongGuesses, word]);

  const resetGame = () => {
    setWord(getRandomWord());
    setGuessedWord(new Set());
    setWrongGuesses(0);
    setIsGameOver(false);
    setIsWinner(false);
  };

  const game = (
    <div className="game">
      <div>
        <DisplayBoard word={word.word} guessedWord={guessedWord} />
      </div>
      <div>
        <Input getInput={getInput} />
      </div>
    </div>
  );

  const winnerOrLoser = isWinner ? (
    <Winner word={word.word} resetGame={resetGame} />
  ) : isGameOver ? (
    <GameOver word={word.word} resetGame={resetGame} />
  ) : (
    game
  );

  return (
    <>
      <div className="hangman-container">
        <div className={`content ${showRules ? "blurred" : ""}`}>
          <div>
            <Header attempts={MAX_WRONG_GUESSES - wrongGuesses} />
          </div>
          <div>
            <Man wrongGuesses={wrongGuesses} />
          </div>
          {winnerOrLoser}
        </div>
      </div>
      <button className="rules-btn" onClick={handleClick}>
        Rules
      </button>
      {showRules && (
        <div className="overlay">
          <div className="modal">
            <Rules />
            <button className="close-btn" onClick={handleClick}>
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
