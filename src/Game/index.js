import React, { useState } from 'react'

import Board from './Board'
import GameInfos from './GameInfos'

const Game = () => {
  const [currentPlayer, setCurrentPlayer] = useState('black')
  const [opponent, setOpponent] = useState('white')

  return (
    <main className="play-area">
      <Board currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} opponent={opponent} setOpponent={setOpponent} />
      <GameInfos currentPlayer={currentPlayer} />
    </main>
  )
}

export default Game
