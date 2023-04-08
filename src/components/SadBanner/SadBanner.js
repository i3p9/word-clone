import React from 'react';

function SadBanner({ answer, handleRestart }) {
  function handleRestartButton() {
    handleRestart();
  }

  return <>
    <div className="sad banner">
      <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      <button onClick={handleRestartButton}>Restart game?</button>
    </div>
  </>;
}

export default SadBanner;
