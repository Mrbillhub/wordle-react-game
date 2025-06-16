import React from 'react';

const GameTile = ({ letter, status, index, isCurrentRow, isAnimating }) => {
  const getClassName = () => {
    let className = 'game-tile';

    if (status) {
      className += ` tile-${status}`;
    }

    if (letter && !status) {
      className += ' tile-filled';
    }

    if (isCurrentRow && letter) {
      className += ' tile-current';
    }

    if (isAnimating) {
      className += ' tile-flip';
      className += ` tile-flip-${index}`;
    }

    return className;
  };

  return (
    <div className={getClassName()}>
      {letter}
    </div>
  );
};

export default GameTile;
