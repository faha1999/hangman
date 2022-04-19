import React from 'react';
import Figure from './components/Figure';
import { Header } from './components/Header';
import { Word } from './components/Word';
import { WrongLetter } from './components/WrongLetter';

function App() {
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
