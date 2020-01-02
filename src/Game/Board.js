import React, { useState, useLayoutEffect } from 'react'
import PropTypes from 'prop-types'

import Chip from './Chip'

const Board = ({ currentPlayer }) => {
  const [board, setBoard] = useState([
    ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no'],
    ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no'],
    ['no', 'no', 'no', 'available', 'no', 'no', 'no', 'no'],
    ['no', 'no', 'available', 'white', 'black', 'no', 'no', 'no'],
    ['no', 'no', 'no', 'black', 'white', 'available', 'no', 'no'],
    ['no', 'no', 'no', 'no', 'available', 'no', 'no', 'no'],
    ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no'],
    ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no']
  ])

  const addChip = async (event) => {
    const coordinates = await event.target.id.split('')
    const newBoard = await board.map((row, i) => {
      return row.map((column, j) => {
        if (i === coordinates[0] - 1 && j === coordinates[1] - 1) {
          return 'black'
        }
        return column
      })
    })
    await parseTopToBottom(newBoard)
  }

  const parseTopToBottom = (boardUpdated) => {
    const boardParsed = boardUpdated.map((row, i) => {
      if (i <= 5) {
        return row.map((column, j) => {
          if (column === 'white') {
            return 'white'
          } else if (column === 'black') {
            return 'black'
          } else if (boardUpdated[i + 1][j] === 'no' || boardUpdated[i + 1][j] === 'black' || boardUpdated[i + 1][j] === 'available') {
            return column
          } else if (currentPlayer === 'black' && boardUpdated[i + 1][j] === 'white' && boardUpdated[i + 2][j] === 'black') {
            return 'available'
          }

        })
      } else {
        return row
      }
    })
    setBoard(boardParsed)
  }

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
                row.map((column, j) => {
                  if (column === 'available') {
                    return (
                      <li onClick={addChip} className="board__square clickable" key={`row${i}column${j}`} id={`${i + 1}${j + 1}`}>
                        <Chip color={column} />
                      </li>
                    )
                  }
                  return (
                    <li className="board__square" key={`row${i}column${j}`} id={`${i + 1}${j + 1}`}>
                      <Chip color={column} />
                    </li>
                  )
                })
              }
            </ul>
          ))
        }
      </article>
    </>
  )
}

Board.propTypes = {
  currentPlayer: PropTypes.string.isRequired
}

export default Board
