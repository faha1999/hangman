import React, { useState } from 'react';
import Figure from './components/Figure';
import { Header } from './components/Header';
import { Word } from './components/Word';
import { WrongLetter } from './components/WrongLetter';
import { useState } from 'react';

const words = ['application', 'programming', 'interface', 'wizard'];

let selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);

  return (
    <div className="App">
      <Header />
      <div className="game-container">
        <Figure />
        <WrongLetter />
        <Word />
      </div>
    </div>
  );
}

export default App;
