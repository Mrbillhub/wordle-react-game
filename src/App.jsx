import React, { useState, useEffect, useCallback } from 'react';
import GameBoard from './components/GameBoard';
import Keyboard from './components/Keyboard';
import GameMessage from './components/GameMessage';
import { getRandomWord, isValidWord } from './utils/wordList';
import { checkGuess, getKeyboardStatus, isGameWon, isGameLost } from './utils/gameUtils';

const MAX_GUESSES = 6;
const WORD_LENGTH = 5;

function App() {
  const [targetWord, setTargetWord] = useState('');
  const [guesses, setGuesses] = useState(Array(MAX_GUESSES).fill(''));
  const [results, setResults] = useState(Array(MAX_GUESSES).fill(null));
  const [currentRow, setCurrentRow] = useState(0);
  const [currentGuess, setCurrentGuess] = useState('');
  const [gameStatus, setGameStatus] = useState('playing');
  const [keyboardStatus, setKeyboardStatus] = useState({});
  const [animatingRow, setAnimatingRow] = useState(-1);
  const [message, setMessage] = useState('');

  // Initialize game
  const initializeGame = useCallback(() => {
    const newWord = getRandomWord();
    setTargetWord(newWord);
    setGuesses(Array(MAX_GUESSES).fill(''));
    setResults(Array(MAX_GUESSES).fill(null));
    setCurrentRow(0);
    setCurrentGuess('');
    setGameStatus('playing');
    setKeyboardStatus({});
    setAnimatingRow(-1);
    setMessage('');
    console.log('New word:', newWord); // For debugging - remove in production
  }, []);

  // Initialize game on component mount
  useEffect(() => {
    initializeGame();
  }, [initializeGame]);

  // Handle keyboard input
  const handleKeyPress = useCallback((key) => {
    if (gameStatus !== 'playing') return;

    if (key === 'ENTER') {
      handleSubmitGuess();
    } else if (key === 'BACKSPACE') {
      handleBackspace();
    } else if (key.length === 1 && key.match(/[A-Z]/)) {
      handleLetterInput(key);
    }
  }, [gameStatus, currentGuess, currentRow]);

  const handleLetterInput = (letter) => {
    if (currentGuess.length < WORD_LENGTH) {
      setCurrentGuess(prev => prev + letter);
    }
  };

  const handleBackspace = () => {
    setCurrentGuess(prev => prev.slice(0, -1));
  };

  const showMessage = (text, duration = 2000) => {
    setMessage(text);
    setTimeout(() => setMessage(''), duration);
  };

  const handleSubmitGuess = async () => {
    if (currentGuess.length !== WORD_LENGTH) {
      showMessage('Word must be 5 letters long');
      return;
    }

    if (!isValidWord(currentGuess)) {
      showMessage('Not a valid word');
      return;
    }

    const guess = currentGuess.toUpperCase();
    const result = checkGuess(guess, targetWord);

    // Update guesses array
    const newGuesses = [...guesses];
    newGuesses[currentRow] = guess;
    setGuesses(newGuesses);

    // Animate the current row
    setAnimatingRow(currentRow);

    // After animation delay, update results and check game status
    setTimeout(() => {
      const newResults = [...results];
      newResults[currentRow] = result;
      setResults(newResults);

      // Update keyboard status
      const newKeyboardStatus = getKeyboardStatus(newGuesses.slice(0, currentRow + 1), targetWord);
      setKeyboardStatus(newKeyboardStatus);

      // Check win condition
      if (isGameWon(guess, targetWord)) {
        setGameStatus('won');
      } else if (isGameLost(currentRow + 1, MAX_GUESSES)) {
        setGameStatus('lost');
      } else {
        setCurrentRow(prev => prev + 1);
        setCurrentGuess('');
      }

      setAnimatingRow(-1);
    }, 1500); // Animation duration

    setCurrentGuess('');
  };

  // Update current guess in the guesses array for display
  const displayGuesses = [...guesses];
  if (gameStatus === 'playing' && currentGuess) {
    displayGuesses[currentRow] = currentGuess.padEnd(WORD_LENGTH, ' ');
  }

  // Physical keyboard event listener
  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key.toUpperCase();

      if (key === 'ENTER') {
        handleKeyPress('ENTER');
      } else if (key === 'BACKSPACE') {
        handleKeyPress('BACKSPACE');
      } else if (key.match(/^[A-Z]$/)) {
        handleKeyPress(key);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyPress]);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Wordle</h1>
        <button className="new-game-button" onClick={initializeGame}>
          New Game
        </button>
      </header>

      <main className="app-main">
        {message && (
          <div className="game-message-toast">
            {message}
          </div>
        )}

        <GameBoard
          guesses={displayGuesses}
          results={results}
          currentRow={currentRow}
          animatingRow={animatingRow}
        />

        <Keyboard
          onKeyPress={handleKeyPress}
          keyboardStatus={keyboardStatus}
        />
      </main>

      <GameMessage
        gameStatus={gameStatus}
        targetWord={targetWord}
        onRestart={initializeGame}
      />
    </div>
  );
}

export default App;
