/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import Chip from './Chip'

const Board = ({ currentPlayer, setCurrentPlayer, opponent, setOpponent }) => {
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

  const addChip = (i, j) => (event) => {
    const coordinates = event.target.id.split('')
    const newBoard = board.map((row, i) => {
      return row.map((column, j) => {
        if (i === coordinates[0] - 1 && j === coordinates[1] - 1) {
          return currentPlayer
        }
        return column
      })
    })
    if (currentPlayer === 'black') {
      setCurrentPlayer('white')
      setOpponent('black')
    } else {
      setCurrentPlayer('black')
      setOpponent('white')
    }
    setBoard(newBoard)
    parseBoardToTurnChip(newBoard, i, j)
  }

  const parseBoardToCheckAvailability = () => {
    const removeAllAvailable = board.map((row) => {
      return row.map((column) => {
        return column === 'available' ? 'no' : column
      })
    })
    const boardParsedTopToBottom = removeAllAvailable.map((row, i) => {
      if (i <= 4) {
        return row.map((column, j) => {
          if (column === 'white' || column === 'black') {
            return column
          } else if (currentPlayer === removeAllAvailable[i + 1][j] && removeAllAvailable[i + 1][j] === 'no') {
            return column
          } else if (currentPlayer === removeAllAvailable[i + 2][j] && removeAllAvailable[i + 1][j] === opponent) {
            let k = 1
            while (removeAllAvailable[i + k][j] === opponent) {
              k += 1
            }
            if (removeAllAvailable[i + k][j] === currentPlayer) {
              return 'available'
            } else {
              return column
            }
          }
        })
      } else {
        return row
      }
    })
    const boardParsedBottomToTop = boardParsedTopToBottom.map((row, i) => {
      if (i >= 2) {
        return row.map((column, j) => {
          if (column === 'white' || column === 'black' || column === 'available') {
            return column
          } else if (currentPlayer === 'black' && boardParsedTopToBottom[i - 1][j] !== 'white') {
            return column
          } else if (currentPlayer === 'black' && boardParsedTopToBottom[i - 1][j] === 'white' && boardParsedTopToBottom[i - 2][j] === 'black') {
            return 'available'
          } else if (currentPlayer === 'white' && boardParsedTopToBottom[i - 1][j] !== 'black') {
            return column
          } else if (currentPlayer === 'white' && boardParsedTopToBottom[i - 1][j] === 'black' && boardParsedTopToBottom[i - 2][j] === 'white') {
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
          if (column === 'white' || column === 'black' || column === 'available') {
            return column
          } else if (currentPlayer === 'black' && row[j + 1] !== 'white') {
            return column
          } else if (currentPlayer === 'black' && row[j + 1] === 'white' && row[j + 2] === 'black') {
            return 'available'
          } else if (currentPlayer === 'white' && row[j + 1] !== 'black') {
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
          if (column === 'white' || column === 'black' || column === 'available') {
            return column
          } else if (currentPlayer === 'black' && row[j - 1] !== 'white') {
            return column
          } else if (currentPlayer === 'black' && row[j - 1] === 'white' && row[j - 2] === 'black') {
            return 'available'
          } else if (currentPlayer === 'white' && row[j - 1] !== 'black') {
            return column
          } else if (currentPlayer === 'white' && row[j - 1] === 'black' && row[j - 2] === 'white') {
            return 'available'
          }
        } else {
          return column
        }
      })
    })
    const boardParsedUpLeftToBottomRight = boardParsedRightToLeft.map((row, i) => {
      if (i <= 5) {
        return row.map((column, j) => {
          if (j <= 5) {
            if (column === 'white') {
              return 'white'
            } else if (column === 'black') {
              return 'black'
            } else if (column === 'available') {
              return 'available'
            } else if (currentPlayer === 'black' && (boardParsedRightToLeft[i + 1][j + 1] === 'no' || boardParsedRightToLeft[i + 1][j + 1] === 'black')) {
              return column
            } else if (currentPlayer === 'black' && boardParsedRightToLeft[i + 1][j + 1] === 'white' && boardParsedRightToLeft[i + 2][j + 2] === 'black') {
              return 'available'
            } else if (currentPlayer === 'white' && (boardParsedRightToLeft[i + 1][j + 1] === 'no' || boardParsedRightToLeft[i + 1][j + 1] === 'white')) {
              return column
            } else if (currentPlayer === 'white' && boardParsedRightToLeft[i + 1][j + 1] === 'black' && boardParsedRightToLeft[i + 2][j + 2] === 'white') {
              return 'available'
            }
          } else {
            return column
          }
        })
      } else {
        return row
      }
    })
    const boardParsedUpRightToBottomLeft = boardParsedUpLeftToBottomRight.map((row, i) => {
      if (i <= 5) {
        return row.map((column, j) => {
          if (j >= 2) {
            if (column === 'white') {
              return 'white'
            } else if (column === 'black') {
              return 'black'
            } else if (column === 'available') {
              return 'available'
            } else if (currentPlayer === 'black' && (boardParsedRightToLeft[i + 1][j - 1] === 'no' || boardParsedRightToLeft[i + 1][j - 1] === 'black')) {
              return column
            } else if (currentPlayer === 'black' && boardParsedRightToLeft[i + 1][j - 1] === 'white' && boardParsedRightToLeft[i + 2][j - 2] === 'black') {
              return 'available'
            } else if (currentPlayer === 'white' && (boardParsedRightToLeft[i + 1][j - 1] === 'no' || boardParsedRightToLeft[i + 1][j - 1] === 'white')) {
              return column
            } else if (currentPlayer === 'white' && boardParsedRightToLeft[i + 1][j - 1] === 'black' && boardParsedRightToLeft[i + 2][j - 2] === 'white') {
              return 'available'
            }
          } else {
            return column
          }
        })
      } else {
        return row
      }
    })
    const boardParsedBottomLeftToUpRight = boardParsedUpRightToBottomLeft.map((row, i) => {
      if (i >= 2) {
        return row.map((column, j) => {
          if (j <= 5) {
            if (column === 'white') {
              return 'white'
            } else if (column === 'black') {
              return 'black'
            } else if (column === 'available') {
              return 'available'
            } else if (currentPlayer === 'black' && (boardParsedRightToLeft[i - 1][j + 1] === 'no' || boardParsedRightToLeft[i - 1][j + 1] === 'black')) {
              return column
            } else if (currentPlayer === 'black' && boardParsedRightToLeft[i - 1][j + 1] === 'white' && boardParsedRightToLeft[i - 2][j + 2] === 'black') {
              return 'available'
            } else if (currentPlayer === 'white' && (boardParsedRightToLeft[i - 1][j + 1] === 'no' || boardParsedRightToLeft[i - 1][j + 1] === 'white')) {
              return column
            } else if (currentPlayer === 'white' && boardParsedRightToLeft[i - 1][j + 1] === 'black' && boardParsedRightToLeft[i - 2][j + 2] === 'white') {
              return 'available'
            }
          } else {
            return column
          }
        })
      } else {
        return row
      }
    })
    const boardParsedBottomRightToUpLeft = boardParsedBottomLeftToUpRight.map((row, i) => {
      if (i >= 2) {
        return row.map((column, j) => {
          if (j >= 2) {
            if (column === 'white') {
              return 'white'
            } else if (column === 'black') {
              return 'black'
            } else if (column === 'available') {
              return 'available'
            } else if (currentPlayer === 'black' && (boardParsedRightToLeft[i - 1][j - 1] === 'no' || boardParsedRightToLeft[i - 1][j - 1] === 'black')) {
              return column
            } else if (currentPlayer === 'black' && boardParsedRightToLeft[i - 1][j - 1] === 'white' && boardParsedRightToLeft[i - 2][j - 2] === 'black') {
              return 'available'
            } else if (currentPlayer === 'white' && (boardParsedRightToLeft[i - 1][j - 1] === 'no' || boardParsedRightToLeft[i - 1][j - 1] === 'white')) {
              return column
            } else if (currentPlayer === 'white' && boardParsedRightToLeft[i - 1][j - 1] === 'black' && boardParsedRightToLeft[i - 2][j - 2] === 'white') {
              return 'available'
            }
          } else {
            return column
          }
        })
      } else {
        return row
      }
    })
    return setBoard(boardParsedBottomRightToUpLeft)
  }

  const parseBoardToTurnChip = (newBoard, i, j) => {
    const boardUpdated = newBoard.map((row) => {
      return row.map((column) => {
        return column
      })
    })
    if (i >= 2 && boardUpdated[i - 1][j] === opponent && boardUpdated[i - 2][j] === currentPlayer) {
      boardUpdated[i - 1][j] = currentPlayer
    }
    if (i <= 5 && boardUpdated[i + 1][j] === opponent && boardUpdated[i + 2][j] === currentPlayer) {
      boardUpdated[i + 1][j] = currentPlayer
    }
    if (j >= 2 && boardUpdated[i][j - 1] === opponent && boardUpdated[i][j - 2] === currentPlayer) {
      boardUpdated[i][j - 1] = currentPlayer
    }
    if (j <= 5 && boardUpdated[i][j + 1] === opponent && boardUpdated[i][j + 2] === currentPlayer) {
      boardUpdated[i][j + 1] = currentPlayer
    }
    if (i <= 5 && j <= 5 && boardUpdated[i + 1][j + 1] === opponent && boardUpdated[i + 2][j + 2] === currentPlayer) {
      boardUpdated[i + 1][j + 1] = currentPlayer
    }
    if (i <= 5 && j >= 2 && boardUpdated[i + 1][j - 1] === opponent && boardUpdated[i + 2][j - 2] === currentPlayer) {
      boardUpdated[i + 1][j - 1] = currentPlayer
    }
    if (i >= 2 && j <= 5 && boardUpdated[i - 1][j + 1] === opponent && boardUpdated[i - 2][j + 2] === currentPlayer) {
      boardUpdated[i - 1][j + 1] = currentPlayer
    }
    if (i >= 2 && j >= 2 && boardUpdated[i - 1][j - 1] === opponent && boardUpdated[i - 2][j - 2] === currentPlayer) {
      boardUpdated[i - 1][j - 1] = currentPlayer
    }
    setBoard(boardUpdated)
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
                      <li onClick={addChip(i, j)} className="board__square clickable" key={`row${i}column${j}`} id={`${i + 1}${j + 1}`} data-testid={`${i + 1}${j + 1}`}>
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
  opponent: PropTypes.string.isRequired,
  setCurrentPlayer: PropTypes.func.isRequired,
  setOpponent: PropTypes.func.isRequired
}

export default Board
