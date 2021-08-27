const express = require("express");
const Private = require("../models/Private");
const PrivateRouter = express.Router();

/*-------------------------get--------------------------- */

PrivateRouter.get("/", async (req, res) => {
  let private = await Private.find({});
  return res.json({
    success: true,
    private,
  });
});

/*--------------------------post-------------------------*/

PrivateRouter.post("/", async (req, res) => {
  const { privatename, user } = req.body;
  try {
    if (!privatename || !user) {
      return res.status(400).json({
        success: false,
        message: "fill the required information.",
      });
    }
    let private = new Private({
      privatename,
      user,
    });

    let newPrivate = await private.save();
    return res.status(201).json({
      success: true,
      private: newPrivate,
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }
});

module.exports = PrivateRouter;
