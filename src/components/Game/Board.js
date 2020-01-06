/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'

import Chip from './Chip'

const Board = ({ currentPlayer, setCurrentPlayer, opponent, setOpponent, board, setBoard, setLastPlayerPass, setWhiteScore, setBlackScore, endGame, player1, player2, status, whiteScore, blackScore, lastPlayerPass }) => {
  const id = useParams()
  const isInitialMount = useRef(true)

  const addChip = (i, j) => () => {
    setLastPlayerPass('none')
    const newBoard = board.map((row, k) => {
      return row.map((column, l) => {
        if (k === i && l === j) {
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

  const isAvailable = (arr, i, j, indI, indJ) => {
    let k = 1
    if (indI === '-' && indJ === 'none') {
      while (i - k >= 0 && arr[i - k][j] === opponent) {
        k += 1
      }
      if (i - k >= 0 && arr[i - k][j] === currentPlayer) {
        return true
      }
    } else if (indI === '+' && indJ === 'none') {
      while (i + k <= 7 && arr[i + k][j] === opponent) {
        k += 1
      }
      if (i + k <= 7 && arr[i + k][j] === currentPlayer) {
        return true
      }
    } else if (indI === 'none' && indJ === '+') {
      while (j + k <= 7 && arr[i][j + k] === opponent) {
        k += 1
      }
      if (j + k <= 7 && arr[i][j + k] === currentPlayer) {
        return true
      }
    } else if (indI === 'none' && indJ === '-') {
      while (j - k >= 0 && arr[i][j - k] === opponent) {
        k += 1
      }
      if (j - k >= 0 && arr[i][j - k] === currentPlayer) {
        return true
      }
    } else if (indI === '+' && indJ === '+') {
      while (i + k <= 7 && j + k <= 7 && arr[i + k][j + k] === opponent) {
        k += 1
      }
      if (i + k <= 7 && j + k <= 7 && arr[i + k][j + k] === currentPlayer) {
        return true
      }
    } else if (indI === '+' && indJ === '-') {
      while (i + k <= 7 && j - k >= 0 && arr[i + k][j - k] === opponent) {
        k += 1
      }
      if (i + k <= 7 && j - k >= 0 && arr[i + k][j - k] === currentPlayer) {
        return true
      }
    } else if (indI === '-' && indJ === '+') {
      while (i - k >= 0 && j + k <= 7 && arr[i - k][j + k] === opponent) {
        k += 1
      }
      if (i - k >= 0 && j + k <= 7 && arr[i - k][j + k] === currentPlayer) {
        return true
      }
    } else if (indI === '-' && indJ === '-') {
      while (i - k >= 0 && j - k >= 0 && arr[i - k][j - k] === opponent) {
        k += 1
      }
      if (i - k >= 0 && j - k >= 0 && arr[i - k][j - k] === currentPlayer) {
        return true
      }
    }
    return false
  }

  const isTurning = (arr, i, j, indI, indJ) => {
    let k = 1
    if (indI === '-' && indJ === 'none') {
      while (i - k >= 0 && arr[i - k][j] === opponent) {
        k += 1
      }
      if (i - k >= 0 && arr[i - k][j] === currentPlayer) {
        for (let index = 1; index < k; index += 1) {
          arr[i - index][j] = currentPlayer
        }
      }
    } else if (indI === '+' && indJ === 'none') {
      while (i + k <= 7 && arr[i + k][j] === opponent) {
        k += 1
      }
      if (i + k <= 7 && arr[i + k][j] === currentPlayer) {
        for (let index = 1; index < k; index += 1) {
          arr[i + index][j] = currentPlayer
        }
      }
    } else if (indI === 'none' && indJ === '+') {
      while (j + k <= 7 && arr[i][j + k] === opponent) {
        k += 1
      }
      if (j + k <= 7 && arr[i][j + k] === currentPlayer) {
        for (let index = 1; index < k; index += 1) {
          arr[i][j + index] = currentPlayer
        }
      }
    } else if (indI === 'none' && indJ === '-') {
      while (j - k >= 0 && arr[i][j - k] === opponent) {
        k += 1
      }
      if (j - k >= 0 && arr[i][j - k] === currentPlayer) {
        for (let index = 1; index < k; index += 1) {
          arr[i][j - index] = currentPlayer
        }
      }
    } else if (indI === '+' && indJ === '+') {
      while (i + k <= 7 && j + k <= 7 && arr[i + k][j + k] === opponent) {
        k += 1
      }
      if (i + k <= 7 && j + k <= 7 && arr[i + k][j + k] === currentPlayer) {
        for (let index = 1; index < k; index += 1) {
          arr[i + index][j + index] = currentPlayer
        }
      }
    } else if (indI === '+' && indJ === '-') {
      while (i + k <= 7 && j - k <= 7 && arr[i + k][j - k] === opponent) {
        k += 1
      }
      if (i + k <= 7 && j - k <= 7 && arr[i + k][j - k] === currentPlayer) {
        for (let index = 1; index < k; index += 1) {
          arr[i + index][j - index] = currentPlayer
        }
      }
    } else if (indI === '-' && indJ === '+') {
      while (i - k >= 0 && j + k <= 7 && arr[i - k][j + k] === opponent) {
        k += 1
      }
      if (i - k >= 0 && j + k <= 7 && arr[i - k][j + k] === currentPlayer) {
        for (let index = 1; index < k; index += 1) {
          arr[i - index][j + index] = currentPlayer
        }
      }
    } else if (indI === '-' && indJ === '-') {
      while (i - k >= 0 && j - k >= 0 && arr[i - k][j - k] === opponent) {
        k += 1
      }
      if (i - k >= 0 && j - k >= 0 && arr[i - k][j - k] === currentPlayer) {
        for (let index = 1; index < k; index += 1) {
          arr[i - index][j - index] = currentPlayer
        }
      }
    }

    let white = 0
    let black = 0
    arr.map((row) => {
      row.map((column) => {
        if (column === 'black') black += 1
        if (column === 'white') white += 1
      })
    })
    setWhiteScore(white)
    setBlackScore(black)
    return arr
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
          if (column === currentPlayer || column === opponent || column === 'available' || removeAllAvailable[i + 1][j] !== opponent) {
            return column
          } else if (isAvailable(removeAllAvailable, i, j, '+', 'none')) {
            return 'available'
          }
          return column
        })
      }
      return row
    })
    const boardParsedBottomToTop = boardParsedTopToBottom.map((row, i) => {
      if (i >= 2) {
        return row.map((column, j) => {
          if (column === currentPlayer || column === opponent || column === 'available' || boardParsedTopToBottom[i - 1][j] !== opponent) {
            return column
          } else if (isAvailable(boardParsedTopToBottom, i, j, '-', 'none')) return 'available'
          return column
        })
      }
      return row
    })
    const boardParsedLeftToRight = boardParsedBottomToTop.map((row, i) => {
      return row.map((column, j) => {
        if (j <= 5) {
          if (column === currentPlayer || column === opponent || column === 'available' || boardParsedBottomToTop[i][j + 1] !== opponent) {
            return column
          } else if (isAvailable(boardParsedBottomToTop, i, j, 'none', '+')) return 'available'
        }
        return column
      })
    })
    const boardParsedRightToLeft = boardParsedLeftToRight.map((row, i) => {
      return row.map((column, j) => {
        if (j >= 2) {
          if (column === currentPlayer || column === opponent || column === 'available' || row[j - 1] !== opponent) {
            return column
          } else if (isAvailable(boardParsedLeftToRight, i, j, 'none', '-')) return 'available'
        }
        return column
      })
    })
    const boardParsedUpLeftToBottomRight = boardParsedRightToLeft.map((row, i) => {
      if (i <= 5) {
        return row.map((column, j) => {
          if (j <= 5) {
            if (column === currentPlayer || column === opponent || column === 'available' || boardParsedRightToLeft[i + 1][j + 1] === 'no' || boardParsedRightToLeft[i + 1][j + 1] === currentPlayer) {
              return column
            } else if (isAvailable(boardParsedRightToLeft, i, j, '+', '+')) return 'available'
          }
          return column
        })
      }
      return row
    })
    const boardParsedUpRightToBottomLeft = boardParsedUpLeftToBottomRight.map((row, i) => {
      if (i <= 5) {
        return row.map((column, j) => {
          if (j >= 2) {
            if (column === currentPlayer || column === opponent || column === 'available' || boardParsedUpLeftToBottomRight[i + 1][j - 1] === 'no' || boardParsedUpLeftToBottomRight[i + 1][j - 1] === currentPlayer) {
              return column
            } else if (isAvailable(boardParsedUpLeftToBottomRight, i, j, '+', '-')) return 'available'
          }
          return column
        })
      }
      return row
    })
    const boardParsedBottomLeftToUpRight = boardParsedUpRightToBottomLeft.map((row, i) => {
      if (i >= 2) {
        return row.map((column, j) => {
          if (j <= 5) {
            if (column === currentPlayer || column === opponent || column === 'available' || boardParsedUpRightToBottomLeft[i - 1][j + 1] === 'no' || boardParsedUpRightToBottomLeft[i - 1][j + 1] === currentPlayer) {
              return column
            } else if (isAvailable(boardParsedUpRightToBottomLeft, i, j, '-', '+')) return 'available'
          }
          return column
        })
      }
      return row
    })
    const boardParsedBottomRightToUpLeft = boardParsedBottomLeftToUpRight.map((row, i) => {
      if (i >= 2) {
        return row.map((column, j) => {
          if (j >= 2) {
            if (column === currentPlayer || column === opponent || column === 'available' || boardParsedBottomLeftToUpRight[i - 1][j - 1] === 'no' || boardParsedBottomLeftToUpRight[i - 1][j - 1] === currentPlayer) {
              return column
            } else if (isAvailable(boardParsedBottomLeftToUpRight, i, j, '-', '-')) return 'available'
          }
          return column
        })
      }
      return row
    })
    return setBoard(boardParsedBottomRightToUpLeft)
  }

  const parseBoardToTurnChip = (newBoard, i, j) => {
    if (i <= 5) {
      isTurning(newBoard, i, j, '+', 'none')
      if (j <= 5) {
        isTurning(newBoard, i, j, '+', '+')
      }
      if (j >= 2) {
        isTurning(newBoard, i, j, '+', '-')
      }
    }
    if (i >= 2) {
      isTurning(newBoard, i, j, '-', 'none')
      if (j <= 5) {
        isTurning(newBoard, i, j, '-', '+')
      }
      if (j >= 2) {
        isTurning(newBoard, i, j, '-', '-')
      }
    }
    if (j <= 5) {
      isTurning(newBoard, i, j, 'none', '+')
    }
    if (j >= 2) {
      isTurning(newBoard, i, j, 'none', '-')
    }

    setBoard(newBoard)
  }

  const parseBoardToCheckIfTheGameEnds = () => {
    let isTheBoardFilled = 0
    console.log(board)
    board.map((row) => {
      row.map((column) => {
        if (column === 'white' || column === 'black') {
          isTheBoardFilled += 1
        }
      })
    })
    let isThereBlackChip = 0
    let isThereWhiteChip = 0
    board.map((row) => {
      row.map((column) => {
        if (column === 'black') {
          isThereBlackChip += 1
        }
        if (column === 'white') {
          isThereWhiteChip += 1
        }
      })
    })
    if (isTheBoardFilled === 64 || isThereBlackChip === 0 || isThereWhiteChip === 0) {
      endGame()
    }
  }

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
    } else {
      parseBoardToCheckAvailability()
      board.length > 0 && parseBoardToCheckIfTheGameEnds()
      const game = {
        _id: id.id,
        board,
        player1: {
          pseudo: player1,
          color: 'black',
          score: blackScore
        },
        player2: {
          pseudo: player2,
          color: 'white',
          score: whiteScore
        },
        turn: currentPlayer,
        status,
        lastPass: lastPlayerPass
      }
      fetch('http://localhost:8888/updateGame', {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(game)
      })
        .then((res) => res.json())
        .then((res) => {
          console.log('hiiiiiiiiii amjmajfamjf', res)
        })
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

  board: PropTypes.array.isRequired,

  setCurrentPlayer: PropTypes.func.isRequired,
  setOpponent: PropTypes.func.isRequired,
  setBoard: PropTypes.func.isRequired,
  setLastPlayerPass: PropTypes.func.isRequired,
  setWhiteScore: PropTypes.func.isRequired,
  setBlackScore: PropTypes.func.isRequired,
  endGame: PropTypes.func.isRequired
}

export default Board