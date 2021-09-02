const express = require("express");
const User = require("../models/User");
const UserRouter = express.Router();
/*------------------------------get----------------------------------*/

UserRouter.get("/", async (req, res) => {
  let users = await User.find({});
  return res.json({
    success: true,
    users,
  });
});

UserRouter.get("/find/:id", async (req, res) => {
  const { id } = req.params;
  try {
    let user = await User.findById(id);

    return res.json({
      success: true,
      user,
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }
});

/*----------------------------------post-----------------------------*/

UserRouter.post("/", async (req, res) => {
  const { name, surname, email, username, password } = req.body;
  try {
    if (!name || !surname || !email || !username || !password) {
      return res.status(400).json({
        success: false,
        massage: "fill all the required information.",
      });
    }

    let user = new User({
      name,
      surname,
      email,
      username,
      password,
    });

    let newUser = await user.save();
    return res.status(201).json({
      success: true,
      user: newUser,
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }
});
/*--------------------------------update--------------------------------------*/
UserRouter.put("/update/:id", async (req, res) => {
  const { name, surname } = req.body;
  try {
    await User.findOneAndUpdate({ _id: req.params.id }, { name: name, surname });
    return res.json({
      success: true,
      message: "usuario actualizado",
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }
  
});

/*--------------------------------delete---------------------------------------*/
UserRouter.delete("/delete/:id", async (req, res) => {
  let { id } = req.params;
  try {
    await User.findByIdAndDelete(id);
    return res.json({
      success: true,
      message: "usuario borrado",
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }
});

module.exports = UserRouter;
