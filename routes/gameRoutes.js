const express = require("express");
const router = express.Router();
const Game = require("../models/Game");

router.post("/", async (req, res) => {
  try {
    const { player1, player2, rounds, winner } = req.body;
    const newGame = new Game({ player1, player2, rounds, winner });
    await newGame.save();
    res.json(newGame);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const games = await Game.find().sort({ date: -1 });
    res.json(games);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
