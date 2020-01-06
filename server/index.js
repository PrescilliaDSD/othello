const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

const UserModel = require('./models/User')
const GameModel = require('./models/Game')

const PORT = 8888
const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))

mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/othello`, {
  useNewUrlParser: true,
  useCreateIndex: true
}).then(result => {
  console.log('connected to MongoDB')
}).catch((error) => {
  console.log('error connecting to MongoDB:', error.message)
})

app.post('/signup', (req, res) => {
  const { pseudo, password } = req.body

  const newUser = new UserModel({
    pseudo, password
  })

  UserModel.findOne({ pseudo }).then((user) => {
    if (user) {
      return res.json({ msg: 'Ce pseudo est déjà utilisé.' })
    } else {
      return newUser.save().then((user) => res.json({ user, msg: 'Votre inscription a bien été validée.' }))
    }
  })
})

app.post('/signin', (req, res) => {
  const { pseudo, password } = req.body

  UserModel.findOne({ pseudo, password }).exec((err, data) => {
    if (err) return console.error(err)
    if (data) {
      return res.json({ msg: 'Connexion réussie.', login: true, id: data.pseudo })
    } else {
      return res.json({ msg: 'Les identifiants sont incorrects', login: false })
    }
  })
})

app.post('/createGame', (req, res) => {
  const board = [
    ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no'],
    ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no'],
    ['no', 'no', 'no', 'available', 'no', 'no', 'no', 'no'],
    ['no', 'no', 'available', 'white', 'black', 'no', 'no', 'no'],
    ['no', 'no', 'no', 'black', 'white', 'available', 'no', 'no'],
    ['no', 'no', 'no', 'no', 'available', 'no', 'no', 'no'],
    ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no'],
    ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no']
  ]

  const turn = 'black'
  const player1 = {
    pseudo: req.body.pseudo,
    color: 'black',
    score: 2
  }
  const player2 = {
    pseudo: `${req.body.pseudo}2`,
    color: 'white',
    score: 2
  }
  const status = 'wait for player 2'
  const lastPass = 'none'

  const newGame = new GameModel({
    board,
    player1,
    player2,
    turn,
    status,
    lastPass
  })

  newGame.save((err) => {
    if (err) return console.error(err)
  })
  res.json({ game: newGame })
})

app.get('/game', (req, res) => {
  GameModel.find()
    .exec((err, data) => {
      if (err) return console.error(err)
      res.json({
        data
      })
    })
})

app.put('/updateGame', async (req, res) => {
  const game = req.body
  await GameModel.updateOne({ _id: game._id }, {
    _id: game._id,
    board: game.board,
    player1: {
      pseudo: game.player1.pseudo,
      color: game.player1.color,
      score: game.player1.score
    },
    player2: {
      pseudo: game.player2.pseudo,
      color: game.player2.color,
      score: game.player2.score
    },
    turn: game.turn,
    status: game.status,
    lastPass: game.lastPass
  })

  res.json('jeu mis a jour')
})

app.listen(PORT, () => console.log(`Listening on ${PORT}`))
