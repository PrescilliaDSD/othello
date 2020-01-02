import React, { useState } from 'react'

import Chip from './Chip'

const Board = () => {
  const [board, setBoard] = useState([
    ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no'],
    ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no'],
    ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no'],
    ['no', 'no', 'no', 'white', 'black', 'no', 'no', 'no'],
    ['no', 'no', 'no', 'black', 'white', 'no', 'no', 'no'],
    ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no'],
    ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no'],
    ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no']
  ])

  return (
    <>
      <article className="board">
        <ul className="board__row">
          <li className="row-number"></li>
          <li className="row-number">1</li>
          <li className="row-number">2</li>
          <li className="row-number">3</li>
          <li className="row-number">4</li>
          <li className="row-number">5</li>
          <li className="row-number">6</li>
          <li className="row-number">7</li>
          <li className="row-number">8</li>
        </ul>
        {
          board.map((row, i) => (
            <ul key={`row${i}`} className="board__row">
              <li className="column-number">{ i + 1 }</li>
              {
                row.map((column, j) => (
                  <li className="board__square" key={`row${i}column${j}`} id={`${i + 1}${j + 1}`}>
                    <Chip color={column} />
                  </li>
                ))
              }
            </ul>
          ))
        }
      </article>
    </>
  )
}

export default Board
