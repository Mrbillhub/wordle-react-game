import React from 'react';

const GameMessage = ({ gameStatus, targetWord, onRestart }) => {
  if (gameStatus === 'playing') return null;

  const isWin = gameStatus === 'won';
  const title = isWin ? '🎉 Congratulations!' : '😞 Game Over';
  const message = isWin 
    ? 'You guessed the word correctly!' 
    : `The word was: ${targetWord}`;

  return (
    <div className="game-message-overlay">
      <div className="game-message">
        <h2 className={`message-title ${isWin ? 'message-win' : 'message-lose'}`}>
          {title}
        </h2>
        <p className="message-text">{message}</p>
        <button className="restart-button" onClick={onRestart}>
          Play Again
        </button>
      </div>
    </div>
  );
};

export default GameMessage;
