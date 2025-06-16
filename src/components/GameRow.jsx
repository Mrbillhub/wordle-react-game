import React from 'react';
import GameTile from './GameTile';

const GameRow = ({ guess, result, isCurrentRow, isAnimating }) => {
  const tiles = [];

  for (let i = 0; i < 5; i++) {
    const letter = guess?.[i] || '';
    const status = result?.[i] || '';

    tiles.push(
      <GameTile
        key={i}
        letter={letter}
        status={status}
        index={i}
        isCurrentRow={isCurrentRow}
        isAnimating={isAnimating}
      />
    );
  }

  return (
    <div className="game-row">
      {tiles}
    </div>
  );
};

export default GameRow;
