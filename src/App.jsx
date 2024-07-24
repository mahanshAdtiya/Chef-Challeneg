import React, { useState, useEffect } from "react";
import "./assets/sass/base.scss";
import { getRandomWord } from "./utils/random.utils";
import Header from "./Components/Header";
import Rules from "./Components/Rules";
import Man from "./Components/Man";
import DisplayBoard from "./Components/DisplayBoard";
import Input from "./Components/Input";
import Winner from "./Components/Winner";
import GameOver from "./Components/GameOver";

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
      <DisplayBoard word={word.word} guessedWord={guessedWord} />
      <Input getInput={getInput} />
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
    <div className="hangman-container">
      <div>
        <Header attempts={MAX_WRONG_GUESSES - wrongGuesses} />
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
        <Man wrongGuesses={wrongGuesses} />
        {winnerOrLoser}
      </div>
    </div>
  );
}

export default App;
