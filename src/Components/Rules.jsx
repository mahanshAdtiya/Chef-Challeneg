import React from "react";

const Rules = () => {
  return (
    <div className="rules-container">
      <h2 className="instruction-heading">Game Instructions</h2>
      <h3>Objective:</h3>
      <p>
        Guess the hidden word by suggesting letters within a limited number of
        attempts.
      </p>

      <h3>How to Play:</h3>
      <ol>
        <li>
          <strong>Start the Game:</strong> A random word with blank spaces will
          be shown.
        </li>
        <li>
          <strong>Guess Letters:</strong> Input one letter at a time.
        </li>
        <li>
          <strong>Correct Guess:</strong> The letter appears in the word.
        </li>
        <li>
          <strong>Incorrect Guess:</strong> You lose an attempt, and the hangman
          figure begins to appear.
        </li>
        <li>
          <strong>Win:</strong> Guess all letters before running out of
          attempts.
        </li>
        <li>
          <strong>Lose:</strong> The full hangman figure appears if you run out
          of attempts. The word is revealed.
        </li>
        <li>
          <strong>Reset:</strong> Press the reset button to start a new game.
        </li>
      </ol>

      <h3>Rules:</h3>
      <ul>
        <li>
          <strong>Only Letters:</strong> Only alphabetical letters are allowed.
        </li>
        <li>
          <strong>No Repeats:</strong> You cannot guess the same letter more
          than once.
        </li>
        <li>
          <strong>Limited Attempts:</strong> You have 6 wrong guesses. Use them
          wisely!
        </li>
      </ul>

      <h3>Tips:</h3>
      <ul>
        <li>
          Start with common vowels (A, E, I, O, U) and frequent consonants (R,
          S, T, L, N).
        </li>
        <li>Use revealed letters to help narrow down your guesses.</li>
        <li>Choose carefully to avoid losing all attempts.</li>
      </ul>
    </div>
  );
};

export default Rules;
