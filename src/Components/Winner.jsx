import React from "react";
import {
  WhatsappShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookShareButton,
  TelegramShareButton,
  RedditShareButton,
  WhatsappIcon,
  TwitterIcon,
  LinkedinIcon,
  FacebookIcon,
  TelegramIcon,
  RedditIcon,
} from "react-share";

const Winner = ({ word, resetGame, time, message }) => {
  const shareUrl = window.location.href;
  return (
    <div className="winner-container">
      <h1 className="winner-heading">Winner!</h1>
      <p className="winner-content">The word was: {word.word.toUpperCase()}</p>
      <p className="winner-content">{word.clue}</p>
      <p>
        Time Left: <span style={{ color: "teal" }}>{time}</span>
      </p>
      <button className="winner-btn" onClick={resetGame}>
        Play Again
      </button>
      <div style={{ display: "flex", gap: "20px" }}>
        <WhatsappShareButton url={shareUrl} title={message}>
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
        <TwitterShareButton url={shareUrl} title={message}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <LinkedinShareButton url={shareUrl} title={message}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
        <FacebookShareButton url={shareUrl} title={message}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TelegramShareButton url={shareUrl} title={message}>
          <TelegramIcon size={32} round />
        </TelegramShareButton>
        <RedditShareButton url={shareUrl} title={message}>
          <RedditIcon size={32} round />
        </RedditShareButton>
      </div>
    </div>
  );
};

export default Winner;
