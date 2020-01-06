/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Board from './Board'
import GameInfos from './GameInfos'

const Game = () => {
  const [currentPlayer, setCurrentPlayer] = useState('')
  const [opponent, setOpponent] = useState('')
  const [board, setBoard] = useState([])
  const [lastPlayerPass, setLastPlayerPass] = useState('')
  const [whiteScore, setWhiteScore] = useState(2)
  const [blackScore, setBlackScore] = useState(2)
  const [endMsg, setEndMsg] = useState('')
  const [player1, setPlayer1] = useState('')
  const [player2, setPlayer2] = useState('')
  const [status, setStatus] = useState('')

  const params = useParams()

  const endGame = () => {
    whiteScore > blackScore ? setEndMsg(`${player2} a gagné !`) : setEndMsg(`${player1} a gagné !`)
    setTimeout(() => {
      window.location.replace('http://localhost:9000/')
    }, 5000)
  }

  useEffect(() => {
    fetch('http://localhost:8888/game', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((res) => {
        res.data.map((game) => {
          if (params.id === game._id) {
            setCurrentPlayer(game.turn)
            setOpponent(game.turn === 'black' ? 'white' : 'black')
            setBoard([...game.board])
            setLastPlayerPass(game.lastPass)
            setWhiteScore(game.player2.score)
            setBlackScore(game.player1.score)
            setPlayer1(game.player1.pseudo)
            setPlayer2(game.player2.pseudo)
            setStatus(game.status)
          }
          return game
        })
      })
  }, [])

  return (
    <main className="play-area">
      <Board endGame={endGame} whiteScore={whiteScore} blackScore={blackScore} setWhiteScore={setWhiteScore} setBlackScore={setBlackScore} setLastPlayerPass={setLastPlayerPass} board={board} setBoard={setBoard} currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} opponent={opponent} setOpponent={setOpponent} player1={player1} player2={player2} status={status} lastPlayerPass={lastPlayerPass} />
      <GameInfos endMsg={endMsg} endGame={endGame} whiteScore={whiteScore} blackScore={blackScore} lastPlayerPass={lastPlayerPass} setLastPlayerPass={setLastPlayerPass} board={board} currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} opponent={opponent} setOpponent={setOpponent} player1={player1} player2={player2} />
    </main>
  )
}

export default Game
