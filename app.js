const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const main = require("./views/main");
const layout = require("./views/layout");
const { db } = require("./models/");
//when using models.db in init
// const models = require("./models");

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res, next) => {
  res.send(layout(""));
});

db.authenticate().then(() => {
  console.log("connected to the database");
});

const PORT = 3000;

const init = async () => {
  await db.sync();

  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
};
init();
