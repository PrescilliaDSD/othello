import React from 'react'
import PropTypes from 'prop-types'

const GameInfos = ({ currentPlayer }) => {
  return (
    <aside className="aside">
      <div className={`aside__chip ${currentPlayer}-chip chip`}></div>
      <button type="button" className="pass-button">passer</button>
    </aside>
  )
}

GameInfos.propTypes = {
  currentPlayer: PropTypes.string.isRequired
}

export default GameInfos
