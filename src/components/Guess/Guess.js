import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ id, word, answer }) {
  const result = checkGuess(word, answer);

  return <>
    <p className='guess'>
      {range(0, 5).map((step) => {
        let ansClass = 'cell';
        if (result === null) {
          ansClass = 'cell';
        } else {
          if (result[step].status === 'correct') {
            ansClass = 'cell correct';
          } else if (result[step].status === 'incorrect') {
            ansClass = 'cell incorrect';
          } else if (result[step].status === 'misplaced') {
            ansClass = 'cell misplaced';
          }
        }
        return <span key={step} className={ansClass}>{word ? word[step] : ''}</span>
      })}

    </p>
  </>;
}

export default Guess;
