import React from 'react';
import {useRef, useEffect } from 'react';
import './litelements/pushbutton-element'
import './App.css';

function App() {
  const redButtonRef = useRef();

  const clickHandler = () => {
    console.log('red button clicked')
  }
  useEffect(() => {
    let redButton = null;
    if (redButtonRef.current) {
      redButtonRef.current.addEventListener('button-press', clickHandler)
      redButton = redButtonRef.current;
    }
    return () => {
      if (redButton) {
        redButton.removeEventListener('button-press', clickHandler)
      }
    }
  })
  return (
    <div className="App">
      <header className="App-header">
      <wow-button color="red" ref={redButtonRef}/>
      </header>
    </div>
  );
}

export default App;
