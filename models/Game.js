const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  player1: String,
  player2: String,
  rounds: [
    {
      player1Choice: String,
      player2Choice: String,
      result: String,
    },
  ],
  winner: String,
  date: { type: Date, default: Date.now },
});

const Game = mongoose.model("Game", gameSchema);
module.exports = Game;
