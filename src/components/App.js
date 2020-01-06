import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './Home'
import Game from './Game'
import SignUpSignIn from './SignUpSignIn'
import NotFound from './NotFound'

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [gameData, setGameData] = useState({})
  const [message, setMessage] = useState({
    text: '',
    status: ''
  })

  useEffect(() => {
    if (sessionStorage.getItem('pseudo') && sessionStorage.getItem('password')) {
      const user = {
        pseudo: sessionStorage.getItem('pseudo'),
        password: sessionStorage.getItem('password')
      }
      fetch('http://localhost:8888/signin', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(user)
      })
        .then((res) => res.json())
        .then((res) => { setLoggedIn(res.login) })
    }
  })

  return (
    <Router>
      <Switch>
        { loggedIn &&
          <Route exact path="/">
            <Home setLoggedIn={setLoggedIn} gameData={gameData} setGameData={setGameData} message={message} setMessage={setMessage} />
          </Route>
        }
        { loggedIn &&
          <Route exact path="/game/:id" component={Game}>
            <Game gameData={gameData} setGameData={setGameData} />
          </Route>
        }
        { !loggedIn &&
          <Route>
            <SignUpSignIn setLoggedIn={setLoggedIn} message={message} setMessage={setMessage} />
          </Route>
        }
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

export default App
