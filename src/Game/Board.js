import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import Chip from './Chip'

const Board = ({ currentPlayer, setCurrentPlayer }) => {
  const isInitialMount = useRef(true)

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

  const addChip = (event) => {
    const coordinates = event.target.id.split('')
    const newBoard = board.map((row, i) => {
      return row.map((column, j) => {
        if (i === coordinates[0] - 1 && j === coordinates[1] - 1) {
          return currentPlayer === 'black' ? 'black' : 'white'
        }
        return column
      })
    })
    currentPlayer === 'black' ? setCurrentPlayer('white') : setCurrentPlayer('black')
    setBoard(newBoard)
  }

  const parseBoardToCheckAvailability = () => {
    const removeAllAvailable = board.map((row) => {
      return row.map((column) => {
        return column === 'available' ? 'no' : column
      })
    })
    const boardParsedTopToBottom = removeAllAvailable.map((row, i) => {
      if (i <= 5) {
        return row.map((column, j) => {
          if (column === 'white') {
            return 'white'
          } else if (column === 'black') {
            return 'black'
          } else if (column === 'available') {
            return 'available'
          } else if (currentPlayer === 'black' && (removeAllAvailable[i + 1][j] === 'no' || removeAllAvailable[i + 1][j] === 'black')) {
            return column
          } else if (currentPlayer === 'black' && removeAllAvailable[i + 1][j] === 'white' && removeAllAvailable[i + 2][j] === 'black') {
            return 'available'
          } else if (currentPlayer === 'white' && (removeAllAvailable[i + 1][j] === 'no' || removeAllAvailable[i + 1][j] === 'white')) {
            return column
          } else if (currentPlayer === 'white' && removeAllAvailable[i + 1][j] === 'black' && removeAllAvailable[i + 2][j] === 'white') {
            return 'available'
          }
        })
      } else {
        return row
      }
    })
    const boardParsedBottomToTop = boardParsedTopToBottom.map((row, i) => {
      console.log(currentPlayer)
      if (i >= 2) {
        return row.map((column, j) => {
          if (column === 'white') {
            return 'white'
          } else if (column === 'black') {
            return 'black'
          } else if (column === 'available') {
            return 'available'
          } else if (currentPlayer === 'black' && (removeAllAvailable[i - 1][j] === 'no' || removeAllAvailable[i - 1][j] === 'black' || removeAllAvailable[i - 1][j] === 'available')) {
            return column
          } else if (currentPlayer === 'black' && removeAllAvailable[i - 1][j] === 'white' && removeAllAvailable[i - 2][j] === 'black') {
            return 'available'
          } else if (currentPlayer === 'white' && (removeAllAvailable[i - 1][j] === 'no' || removeAllAvailable[i - 1][j] === 'white' || removeAllAvailable[i - 1][j] === 'available')) {
            return column
          } else if (currentPlayer === 'white' && removeAllAvailable[i - 1][j] === 'black' && removeAllAvailable[i - 2][j] === 'white') {
            return 'available'
          }
        })
      } else {
        return row
      }
    })
    const boardParsedLeftToRight = boardParsedBottomToTop.map((row) => {
      return row.map((column, j) => {
        if (j <= 5) {
          if (column === 'white') {
            return 'white'
          } else if (column === 'black') {
            return 'black'
          } else if (column === 'available') {
            return 'available'
          } else if (currentPlayer === 'black' && (row[j + 1] === 'no' || row[j + 1] === 'black' || row[j + 1] === 'available')) {
            return column
          } else if (currentPlayer === 'black' && row[j + 1] === 'white' && row[j + 2] === 'black') {
            return 'available'
          } else if (currentPlayer === 'white' && (row[j + 1] === 'no' || row[j + 1] === 'white' || row[j + 1] === 'available')) {
            return column
          } else if (currentPlayer === 'white' && row[j + 1] === 'black' && row[j + 2] === 'white') {
            return 'available'
          }
        } else {
          return column
        }
      })
    })
    const boardParsedRightToLeft = boardParsedLeftToRight.map((row) => {
      return row.map((column, j) => {
        if (j >= 2) {
          if (column === 'white') {
            return 'white'
          } else if (column === 'black') {
            return 'black'
          } else if (column === 'available') {
            return 'available'
          } else if (currentPlayer === 'black' && (row[j - 1] === 'no' || row[j - 1] === 'black')) {
            return column
          } else if (currentPlayer === 'black' && row[j - 1] === 'white' && row[j - 2] === 'black') {
            return 'available'
          } else if (currentPlayer === 'white' && (row[j - 1] === 'no' || row[j - 1] === 'white')) {
            return column
          } else if (currentPlayer === 'white' && row[j - 1] === 'black' && row[j - 2] === 'white') {
            return 'available'
          }
        } else {
          return column
        }
      })
    })
    // const boardParsedUpLeftToBottomRight = boardParsedRightToLeft.map((row, i) => {
    //   if (i <= 5) {
    //     return row.map((column, j) => {
    //       if (j <= 5) {
    //         if (column === 'white') {
    //           return 'white'
    //         } else if (column === 'black') {
    //           return 'black'
    //         } else if (column === 'available') {
    //           return 'available'
    //         } else if (currentPlayer === 'black' && (boardParsedRightToLeft[i + 1][j + 1] === 'no' || boardParsedRightToLeft[i + 1][j + 1] === 'black')) {
    //           return column
    //         } else if (currentPlayer === 'black' && boardParsedRightToLeft[i + 1][j + 1] === 'white' && boardParsedRightToLeft[i + 2][j + 2] === 'black') {
    //           return 'available'
    //         } else if (currentPlayer === 'white' && (boardParsedRightToLeft[i + 1][j + 1] === 'no' || boardParsedRightToLeft[i + 1][j + 1] === 'white')) {
    //           return column
    //         } else if (currentPlayer === 'white' && boardParsedRightToLeft[i + 1][j + 1] === 'black' && boardParsedRightToLeft[i + 2][j + 2] === 'white') {
    //           return 'available'
    //         }
    //       } else {
    //         return column
    //       }
    //     })
    //   } else {
    //     return row
    //   }
    // })
    return setBoard(boardParsedRightToLeft)
  }

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
    } else {
      parseBoardToCheckAvailability()
    }
  }, [currentPlayer])

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
                      <li onClick={addChip} className="board__square clickable" key={`row${i}column${j}`} id={`${i + 1}${j + 1}`} data-testid={`${i + 1}${j + 1}`}>
                        <Chip color={column} />
                      </li>
                    )
                  }
                  return (
                    <li className="board__square" key={`row${i}column${j}`} id={`${i + 1}${j + 1}`} data-testid={`${i + 1}${j + 1}`}>
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
  currentPlayer: PropTypes.string.isRequired,
  setCurrentPlayer: PropTypes.func.isRequired
}

export default Board
