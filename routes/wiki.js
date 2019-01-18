const router = require("express").Router();
const addPage = require("../views/addPage");

router.get("/", (req, res, next) => {
  res.send("test");
});

router.post("/", (req, res, next) => {
  res.send("heeey post");
});

router.get("/add", (req, res, next) => {
  res.send(addPage());
});

module.exports = router;
