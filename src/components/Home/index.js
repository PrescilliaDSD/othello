import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Home = ({ setLoggedIn, gameData, setGameData, message, setMessage }) => {

  const [gamesList, setGamesList] = useState([])

  const logout = () => {
    setLoggedIn(false)
    sessionStorage.setItem('pseudo', '')
    sessionStorage.setItem('password', '')
    setMessage({
      text: '',
      status: ''
    })
  }

  const createGame = () => {
    const user = {
      pseudo: sessionStorage.getItem('pseudo')
    }
    fetch('http://localhost:8888/createGame', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then((res) => res.json())
      .then((res) => {
        setGameData(res.game)
        setMessage({
          text: 'Votre partie a bien été créée. Pour y accéder, cliquez sur le bouton "continuer une partie en cours".',
          status: 'success'
        })
        setGamesList([...gamesList, res.game])
      })

  }

  useEffect(() => {
    fetch('http://localhost:8888/game', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((res) => setGamesList([...res.data]))
  }, [])

  return (
    <main className="home">
      <h1>Jeu Othello</h1>
      <p className={`message message-${message.status}`}>{message.text}</p>
      <p className="what-to-do">Que voulez-vous faire ?</p>
      <ul>
        {
          gamesList.length > 0 && gamesList.map((game) => {
            if (game.status === 'wait for player 2') {
              return (
                <li className="games__list__item"><Link to={`/game/${game._id}?pseudo=${sessionStorage.getItem('pseudo')}`}>{game.player1.pseudo} attend un adversaire !</Link></li>
              )
            }
          })
        }
      </ul>
      <ul className="home__actions">
        {
          gameData._id &&
          <li><Link to={`/game/${gameData._id}?pseudo=${sessionStorage.getItem('pseudo')}`}>Continuer une partie en cours</Link></li>
        }
        {
          !gameData._id &&
          <li><button onClick={createGame}>Créer une partie</button></li>
        }
        <li><button onClick={logout}>Me déconnecter</button></li>
      </ul>
    </main>

  )
}

Home.propTypes = {
  setLoggedIn: PropTypes.func.isRequired
}

export default Home