import React, { useState } from 'react'
import PropTypes from 'prop-types'

const SignUpSignIn = ({ setLoggedIn, message, setMessage }) => {
  const [pseudo, setPseudo] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const createUser = () => {
    if (confirmPassword !== password) {
      setMessage({
        text: 'Les mots de passe doivent être identiques!',
        status: 'error'
      })
    } else {
      const user = {
        pseudo,
        password
      }
      fetch('http://localhost:8888/signup', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(user)
      })
        .then((res) => res.json())
        .then((res) => {
          setMessage({
            text: res.msg,
            status: 'success'
          })
          setPseudo('')
          setPassword('')
          setConfirmPassword('')
        })
    }
  }

  const login = () => {
    const user = {
      pseudo,
      password
    }
    fetch('http://localhost:8888/signin', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then((res) => res.json())
      .then((res) => {
        setMessage({
          text: res.msg,
          status: res.login ? 'success' : 'error'
        })
        setLoggedIn(res.login)
        sessionStorage.setItem('pseudo', pseudo)
        sessionStorage.setItem('password', password)
        setPseudo('')
        setPassword('')
      })
  }

  return (
    <main>
      <h1 className="welcome-title">Bienvenue sur ce jeu Othello !</h1>
      <p className={`message message-${message.status}`}>{message.text}</p>
      <div className="sign-forms">
        <section>
          <h2>S&apos;inscrire</h2>
          <form>
            <label htmlFor="signUpPseudo">Pseudo : <input type="text" id="signUpPseudo" onChange={(event) => { setPseudo(event.target.value) }} value={pseudo} /></label>
            <label htmlFor="signUpPassword">Mot de passe : <input type="password" id="signUpPassword" onChange={(event) => { setPassword(event.target.value) }} value={password} /></label>
            <label htmlFor="confirmPassword">Confirmer le mot de passe : <input type="password" id="confirmPassword" onChange={(event) => { setConfirmPassword(event.target.value) }} value={confirmPassword} /></label>
            <button type="button" onClick={createUser}>S&apos;inscrire</button>
          </form>
        </section>
        <section>
          <h2>Se connecter</h2>
          <form>
            <label htmlFor="signInPseudo">Pseudo : <input type="text" id="signInPseudo" onChange={(event) => { setPseudo(event.target.value) }} value={pseudo} /></label>
            <label htmlFor="signInPassword">Mot de passe : <input type="password" id="signInPassword" onChange={(event) => { setPassword(event.target.value) }} value={password} /></label>
            <button type="button" onClick={login}>Se connecter</button>
          </form>
        </section>
      </div>
    </main>
  )
}

SignUpSignIn.propTypes = {
  setLoggedIn: PropTypes.func.isRequired,
  message: PropTypes.object.isRequired,
  setMessage: PropTypes.func.isRequired
}

export default SignUpSignIn
