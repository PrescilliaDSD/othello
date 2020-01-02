import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Game from './Game/index'

const App = () => {
  return (
    <Router>
      <Route exact path="/">
        <Game />
      </Route>
    </Router>
  )
}

export default App
