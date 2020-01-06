import React from 'react'
import PropTypes from 'prop-types'

const GameInfos = ({ currentPlayer, setCurrentPlayer, opponent, setOpponent, board, lastPlayerPass, setLastPlayerPass, whiteScore, blackScore, endGame, endMsg, player1, player2 }) => {
  const pass = () => {
    if (board.every((row) => {
      return row.every((column) => {
        return column !== 'available'
      })
    })) {
      if (lastPlayerPass === opponent || lastPlayerPass === currentPlayer) {
        endGame()
      } else {
        setLastPlayerPass(currentPlayer)
        setCurrentPlayer(opponent)
        setOpponent(currentPlayer)
      }
    }
  }

  return (
    <aside className="aside">
      <div className="msg">{endMsg}</div>
      <p>Score : </p>
      <ul className="score__list">
        <li className="score__list__item">{player1} <div className='aside__chip black-chip chip'><p>{blackScore}</p></div></li>
        <li className="score__list__item">{player2.length === 0 ? 'En attente' : player2} <div className='aside__chip white-chip chip'><p>{whiteScore}</p></div></li>
      </ul>
      <p className="turn">C&apos;est au tour de : <div className={`aside__chip ${currentPlayer}-chip chip`}></div></p>
      <button onClick={pass} type="button" className="pass-button">passer</button>
    </aside>
  )
}

GameInfos.propTypes = {
  // string
  currentPlayer: PropTypes.string.isRequired,
  opponent: PropTypes.string.isRequired,
  endMsg: PropTypes.string.isRequired,

  // func
  setCurrentPlayer: PropTypes.func.isRequired,
  setOpponent: PropTypes.func.isRequired,
  endGame: PropTypes.func.isRequired,

  // array
  board: PropTypes.array.isRequired,
  lastPlayerPass: PropTypes.array.isRequired,
  setLastPlayerPass: PropTypes.array.isRequired,

  // number
  whiteScore: PropTypes.number.isRequired,
  blackScore: PropTypes.number.isRequired
}

export default GameInfos