import React from 'react'

import Board from './Board'
import GameInfos from './GameInfos'

const Game = () => {
  return (
    <main>
      <h1>Othello</h1>
      <div className="play-area">
        <Board />
        <GameInfos />
      </div>
    </main>
  )
}

export default Game
