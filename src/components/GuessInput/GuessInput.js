import React from "react";

function GuessInput({ children, handleGuessInput, gameStatus }) {
  const [guessWord, setGuessWord] = React.useState('');
  function handleFormInput(event) {
    event.preventDefault();
    handleGuessInput(guessWord);
    setGuessWord('');
  }

  return <>
    <form onSubmit={handleFormInput}>
      <label htmlFor='guessInput'>{children}</label>
      <input
        id='guessInput'
        type='text'
        pattern=".{5,5}"
        value={guessWord}
        onChange={(event) => {
          setGuessWord(event.target.value.toUpperCase());
        }}
        disabled={(gameStatus !== 'running') ? "disabled" : ""}
      ></input>
    </form>
  </>;
}

export default GuessInput;
