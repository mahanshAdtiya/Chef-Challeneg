import React, { useState, useEffect, useRef } from "react";
import "./assets/sass/base.scss";
import { getRandomWord } from "./utils/random.utils";
import { Header, Rules, Man, DisplayBoard, Input, Winner, GameOver } from './Components';
const MAX_WRONG_GUESSES = 6;

function App() {
  const [word, setWord] = useState(getRandomWord());
  const [guessedWord, setGuessedWord] = useState(new Set());
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isWinner, setIsWinner] = useState(false);
  const [showRules, setShowRules] = useState(false);
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);
  const [shareMessage, setShareMessage] = useState("Check out this link!");
  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
  
    return `${hours > 0 ? `${hours}h ` : ""}${minutes > 0 || hours > 0 ? `${minutes}m ` : ""}${seconds}s`;
  };

  const handleShareClick = () => {
    const message =
      `Heyy, Check out this fun game which helps you test your knowledge about food\n` +
      `It took me ${wrongGuesses} lives and ${formatTime(
        time
      )} to complete the game, let's see how much you can score.\n` +
      `Here's the link: `;
    setShareMessage(message);
  };

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
    handleShareClick();
  }, [guessedWord, wrongGuesses, word]);

  useEffect(() => {
    if (!isGameOver && !isWinner) {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isGameOver, isWinner]);

  const resetGame = () => {
    setWord(getRandomWord());
    setGuessedWord(new Set());
    setWrongGuesses(0);
    setIsGameOver(false);
    setIsWinner(false);
    setTime(0);
  };

  const game = (
    <div className="game">
      <div>
        <DisplayBoard word={word.word} guessedWord={guessedWord} />
      </div>
      <div>
        <Input getInput={getInput} answer={word.word.toLowerCase()}/>
      </div>
    </div>
  );

  const winnerOrLoser = isWinner ? (
    <Winner word={word} resetGame={resetGame} time= {formatTime(time)} message={shareMessage}/>
  ) : isGameOver ? (
    <GameOver word={word} resetGame={resetGame} time= {formatTime(time)} message={shareMessage}/>
  ) : (
    game
  );

  return (
    <>
      <div className="hangman-container">
        <div className={`content ${showRules ? "blurred" : ""}`}>
          <div>
            <Header attempts={MAX_WRONG_GUESSES - wrongGuesses} time= {formatTime(time)}/>
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