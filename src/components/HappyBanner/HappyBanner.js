import React from 'react';

function HappyBanner({ numOfGuesses, handleRestart }) {
  function handleRestartButton(){
    handleRestart();
  }
  return <>
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong> {numOfGuesses} guesses</strong>.
      </p>
      <button onClick={handleRestartButton}>Restart game?</button>
    </div>
  </>;
}

export default HappyBanner;
