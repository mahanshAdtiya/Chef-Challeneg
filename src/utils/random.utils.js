import { words } from "./index";

const getRandomWord = () => {
  return words[Math.floor(Math.random() * words.length)];
};

export { getRandomWord };
