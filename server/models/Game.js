const mongoose = require('mongoose')

const { Schema } = mongoose

const GameSchema = new Schema({
  board: {
    type: Array,
    required: true
  },
  player1: {
    pseudo: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    },
    score: {
      type: Number,
      required: true
    }
  },
  player2: {
    pseudo: {
      type: String
    },
    color: {
      type: String
    },
    score: {
      type: Number
    }
  },
  turn: {
    type: 'String',
    required: true
  },
  status: {
    type: String
  },
  lastPass: {
    type: String
  }
})

module.exports = mongoose.model('Game', GameSchema)
