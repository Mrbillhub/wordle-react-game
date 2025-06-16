import React from 'react';

const Keyboard = ({ onKeyPress, keyboardStatus }) => {
  const topRow = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  const middleRow = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
  const bottomRow = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];

  const getKeyClassName = (key) => {
    let className = 'keyboard-key';
    const status = keyboardStatus[key];

    if (status) {
      className += ` key-${status}`;
    }

    return className;
  };

  const handleKeyClick = (key) => {
    onKeyPress(key);
  };

  const renderKey = (key) => (
    <button
      key={key}
      className={getKeyClassName(key)}
      onClick={() => handleKeyClick(key)}
    >
      {key}
    </button>
  );

  const renderSpecialKey = (key, label, className = '') => (
    <button
      key={key}
      className={`keyboard-key keyboard-key-wide ${className}`}
      onClick={() => handleKeyClick(key)}
    >
      {label}
    </button>
  );

  return (
    <div className="keyboard">
      <div className="keyboard-row">
        {topRow.map(renderKey)}
      </div>
      <div className="keyboard-row">
        {middleRow.map(renderKey)}
      </div>
      <div className="keyboard-row">
        {renderSpecialKey('ENTER', 'ENTER')}
        {bottomRow.map(renderKey)}
        {renderSpecialKey('BACKSPACE', '⌫')}
      </div>
    </div>
  );
};

export default Keyboard;
