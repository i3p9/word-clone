import React from 'react';
import Guess from '../Guess/Guess';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessResult({ allGuesses, answer }) {

  return <>
    <div className='guess-results'>
      {range(0, NUM_OF_GUESSES_ALLOWED).map((index) => {
        return <Guess
          key={index}
          id={(allGuesses[index]?.id) ? allGuesses[index]?.id : ''}
          word={(allGuesses[index]?.word) ? allGuesses[index]?.word : ''}
          answer={answer}
        ></Guess>
      })}
    </div>
  </>;
}

export default GuessResult;
