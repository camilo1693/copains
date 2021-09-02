const express = require("express");
const Game = require("../models/Game");
const GameRouter = express.Router();

/*------------------------------get----------------------------------*/
GameRouter.get("/", async (req, res) => {
  let hall = await Game.find({});
  return res.json({
    success: true,
    hall,
  });
});

/*----------------------------post---------------------------*/

GameRouter.post("/", async (req, res) => {
    const { name, img } = req.body;
    try {
      if (!name || !img) {
        return res.status(400).json({
          success: false,
          message: "fill the required information.",
        });
      }
      let game = new Game({
        name,
        img,
      });
  
      let newGame = await game.save();
      return res.status(201).json({
        success: true,
        game: newGame,
      });
    } catch (err) {
      return res.status(400).json({
        success: false,
        message: err.message,
      });
    }
  });
  /*--------------------------------update--------------------------------------*/
  GameRouter.put("/update/:id", async (req, res) => {
    const { img } = req.body;
    try {
      await Game.findOneAndUpdate({ _id: req.params.id }, { img });
      return res.json({
        success: true,
        message: "juego actualizado",
      });
    } catch (err) {
      return res.status(400).json({
        success: false,
        message: err.message,
      });
    }
  });
  
  /*--------------------------------delete---------------------------------------*/
  GameRouter.delete("/delete/:id", async (req, res) => {
    let { id } = req.params;
    try {
      await Game.findByIdAndDelete(id);
      return res.json({
        success: true,
        message: "juego borrado",
      });
    } catch (err) {
      return res.status(400).json({
        success: false,
        message: err.message,
      });
    }
  });
  
module.exports = GameRouter;