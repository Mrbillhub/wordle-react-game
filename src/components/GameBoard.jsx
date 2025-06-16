import React from 'react';
import GameRow from './GameRow';

const GameBoard = ({ guesses, results, currentRow, animatingRow }) => {
  const rows = [];

  for (let i = 0; i < 6; i++) {
    const isCurrentRow = i === currentRow;
    const isAnimating = i === animatingRow;

    rows.push(
      <GameRow
        key={i}
        guess={guesses[i]}
        result={results[i]}
        isCurrentRow={isCurrentRow}
        isAnimating={isAnimating}
      />
    );
  }

  return (
    <div className="game-board">
      {rows}
    </div>
  );
};

export default GameBoard;
