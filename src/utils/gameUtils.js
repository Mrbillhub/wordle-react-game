// Game utility functions for Wordle

// Check the status of each letter in the guess
export const checkGuess = (guess, target) => {
  const result = [];
  const targetLetters = target.split('');
  const guessLetters = guess.split('');

  // First pass: mark correct positions (green)
  const usedTargetIndices = new Set();
  const usedGuessIndices = new Set();

  for (let i = 0; i < guessLetters.length; i++) {
    if (guessLetters[i] === targetLetters[i]) {
      result[i] = 'correct';
      usedTargetIndices.add(i);
      usedGuessIndices.add(i);
    }
  }

  // Second pass: mark wrong positions (yellow) and absent (gray)
  for (let i = 0; i < guessLetters.length; i++) {
    if (usedGuessIndices.has(i)) continue;

    const letter = guessLetters[i];
    let found = false;

    for (let j = 0; j < targetLetters.length; j++) {
      if (!usedTargetIndices.has(j) && targetLetters[j] === letter) {
        result[i] = 'present';
        usedTargetIndices.add(j);
        found = true;
        break;
      }
    }

    if (!found) {
      result[i] = 'absent';
    }
  }

  return result;
};

// Get keyboard key status based on all guesses made
export const getKeyboardStatus = (guesses, target) => {
  const keyStatus = {};

  guesses.forEach(guess => {
    if (guess && guess.length === 5) {
      const result = checkGuess(guess, target);
      guess.split('').forEach((letter, index) => {
        const status = result[index];

        // Priority: correct > present > absent
        if (status === 'correct') {
          keyStatus[letter] = 'correct';
        } else if (status === 'present' && keyStatus[letter] !== 'correct') {
          keyStatus[letter] = 'present';
        } else if (!keyStatus[letter]) {
          keyStatus[letter] = status;
        }
      });
    }
  });

  return keyStatus;
};

// Game constants
export const GAME_STATUS = {
  PLAYING: 'playing',
  WON: 'won',
  LOST: 'lost'
};

export const TILE_STATUS = {
  EMPTY: '',
  FILLED: 'filled',
  CORRECT: 'correct',
  PRESENT: 'present',
  ABSENT: 'absent'
};

// Check if game is won
export const isGameWon = (guess, target) => {
  return guess === target;
};

// Check if game is lost
export const isGameLost = (currentRow, maxRows) => {
  return currentRow >= maxRows;
};
