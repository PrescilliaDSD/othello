import React, { useState } from 'react'

import Board from './Board'
import GameInfos from './GameInfos'

const Game = () => {
  const [round, setRound] = useState(1)
  const [currentPlayer, setCurrentPlayer] = useState('black')

  return (
    <main>
      <h1>Othello</h1>
      <div className="play-area">
        <Board currentPlayer={currentPlayer} />
        <GameInfos round={round} currentPlayer={currentPlayer} />
      </div>
    </main>
  )
}

export default Game
