import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <main className="home">
      <p className="what-to-do">Oups ! Je crois que tu es perdu.</p>
      <Link to="/">Retourner sur la page d&apos;accueil</Link>
    </main>

  )
}

export default NotFound