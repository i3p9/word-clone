import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResult from '../GuessResult/GuessResult';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import HappyBanner from '../HappyBanner/HappyBanner';
import SadBanner from '../SadBanner/SadBanner';
import Keyboard from '../Keyboard/Keyboard';
import { checkGuess } from '../../game-helpers';

// Pick a random word on every pageload.
//const answer = sample(WORDS);
// NOTE: moving it to a state to handle restarting the game without pageload
// To make debugging easier, we'll log the solution in the console.
//console.info({ answer });

function Game() {
  const [answer, setAnswer] = React.useState(sample(WORDS));

  const [allGuesses, setAllGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('running');
  const [numOfWinningGuess, setNumOfWinningGuess] = React.useState(0);
  const [guessStatus, setGuessStatus] = React.useState([]);

  function handleGuessInput(word) {
    if (allGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      window.alert(`you can't do more than ${NUM_OF_GUESSES_ALLOWED} guesses`);
    } else {
      const nextGuesses = [...allGuesses, { word: word, id: crypto.randomUUID() }];
      setAllGuesses(nextGuesses);

      if (word === answer) {
        setNumOfWinningGuess(nextGuesses.length);
        setGameStatus('won');

      } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
        setGameStatus('lost');
      }
    }

    //setting guessStatus array for keyboard key colors
    const guessResult = checkGuess(word, answer);
    setGuessStatus((prev) => [...prev, ...guessResult]);
  }

  function handleRestart() {
    setAllGuesses([]);
    setGameStatus('running');
    setAnswer(sample(WORDS));
    setGuessStatus([]);
  }

  return <>
    <GuessResult
      allGuesses={allGuesses}
      answer={answer}
    ></GuessResult>
    <GuessInput
      handleGuessInput={handleGuessInput}
      gameStatus={gameStatus}
    >Enter guess: </GuessInput>
    <Keyboard guessStatus={guessStatus} />
    {(gameStatus === 'won') ? <HappyBanner numOfGuesses={numOfWinningGuess} handleRestart={handleRestart} /> : ""}
    {(gameStatus === 'lost') ? <SadBanner answer={answer} handleRestart={handleRestart} /> : ""}
  </>;
}

export default Game;
