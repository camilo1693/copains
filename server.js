const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
mongoose.set('useFindAndModify', false);
/*-------------------------------- importar routas------------------------------------*/

const UserRouter = require("./api/UserRouter")
const HallRouter = require("./api/HallRouter")
const PrivateRouter = require("./api/PrivateRouter")

/*--------------------------------------------------------------------------------------*/
const PORT = process.env.PORT || 5000;
const { DB_URI } = process.env;

mongoose
  .connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*---------------------------------- utilizar rutas----------------------------------*/
app.use("/users", UserRouter )
app.use("/hall", HallRouter )
app.use("/Private", PrivateRouter )

/*------------------------------------------------------------------------------------*/

app.listen(PORT, () => {
  console.log(`server runnig on port ${PORT}`);
});