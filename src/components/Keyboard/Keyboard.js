import React from 'react';

function Keyboard({ guessStatus }) {
  const KEYS = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"]
  ];

  const resultObj = {};

  guessStatus.map(({ letter, status }) => {
    resultObj[letter] = status;
  })


  return <>
    <div>
      {KEYS.map((row, index) => {
        return (
          <div key={index} className='keyboardRow'>
            {row.map((char, index) => {
              return <span key={index} className={`keyCell ${resultObj[char]}`}>{char}</span>
            })}
          </div>
        )
      })}
    </div>
  </>;
}

export default Keyboard;
