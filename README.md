# Wordle Game - React Implementation

## Assignment Description

This is a complete implementation of the popular Wordle game built using **Vite + React + JavaScript**. The game recreates all the core mechanics of Wordle, providing an engaging word-guessing experience with visual feedback and interactive gameplay.

## Game Features

### Core Gameplay
- **6x5 Game Board**: Six attempts to guess a five-letter word
- **Color-coded Feedback System**:
  - 🟩 **Green**: Correct letter in correct position
  - 🟨 **Yellow**: Correct letter in wrong position  
  - ⬜ **Gray**: Letter not in the target word

### Interactive Elements
- **Physical Keyboard Support**: Type letters, use Enter to submit, Backspace to delete
- **Virtual On-screen Keyboard**: Click buttons for touch-friendly gameplay
- **Keyboard State Tracking**: Keys change color based on letter status
- **Input Validation**: Only accepts valid 5-letter words
- **Real-time Feedback**: Toast messages for invalid inputs

### Visual Design
- **Smooth Animations**: 
  - Tile flip animations when revealing results
  - Pop animations when typing letters
  - Smooth color transitions
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Dark Theme**: Modern dark UI similar to the original Wordle
- **Clean Typography**: Easy-to-read fonts and proper spacing

### Game Management
- **Win/Lose Detection**: Automatic game state management
- **Game Over Modal**: Displays results with restart option
- **New Game Button**: Start fresh games anytime
- **Word Pool**: Extensive dictionary of valid words

## Technical Implementation

### Component Architecture
- **Reusable Components**: Modular design with single-responsibility components
- **State Management**: Efficient useState hooks for game state
- **Event Handling**: Keyboard and mouse interaction support
- **Conditional Rendering**: Dynamic UI updates based on game progress

### File Structure
```
wordle-game/
├── public/
│   ├── vite.svg
│   └── index.html
├── src/
│   ├── components/
│   │   ├── GameBoard.jsx
│   │   ├── GameRow.jsx
│   │   ├── GameTile.jsx
│   │   ├── Keyboard.jsx
│   │   └── GameMessage.jsx
│   ├── utils/
│   │   ├── wordList.js
│   │   └── gameUtils.js
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

### Key Components

#### GameBoard
- Renders the 6x5 grid of tiles
- Manages current row highlighting
- Handles animation states

#### GameTile
- Individual letter tiles with status-based styling
- Animation support for flip effects
- Dynamic className generation

#### Keyboard
- Virtual keyboard with QWERTY layout
- Key status color coding
- Click and physical key event handling

#### Game Logic Utils
- **Word validation** and **guess checking**
- **Keyboard status tracking**
- **Win/lose condition detection**

## How to Run

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation & Setup
```bash
# Extract the zip file and navigate to the project directory
cd wordle-game

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development
The game will be available at `http://localhost:5173` when running in development mode.

## Game Rules

1. **Objective**: Guess the hidden 5-letter word in 6 attempts or fewer
2. **Input**: Type letters using keyboard or click virtual keyboard
3. **Submission**: Press Enter to submit your guess
4. **Feedback**: After each guess, tiles change colors to provide hints
5. **Victory**: Guess the word correctly within 6 attempts
6. **Defeat**: Use all 6 attempts without guessing correctly

## Technical Highlights

- **Modern React Patterns**: Functional components with hooks
- **Performance Optimized**: useCallback for event handlers
- **Accessibility**: Keyboard navigation support
- **Mobile Responsive**: Touch-friendly interface
- **Animation Rich**: Smooth transitions and feedback
- **Extensible**: Easy to add new features or modify existing ones

## Future Enhancements

Potential improvements that could be added:
- Statistics tracking (games played, win rate, streak)
- Hard mode (must use revealed letters)
- Daily challenge mode
- Share results functionality
- Color blind accessibility options
- Sound effects and haptic feedback

---

This implementation demonstrates proficiency in React development, state management, component design, CSS animations, event handling, and creating engaging user interfaces.
# wordle-react-game
