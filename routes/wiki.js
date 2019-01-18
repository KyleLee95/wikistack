const router = require("express").Router();
const addPage = require("../views/addPage");
const { Page } = require('../models')


router.get("/", (req, res, next) => {
  res.send("test");
});

router.post("/", async (req, res, next) => {
  
  let sluggified = req.body.title
  let newSlug = ''

  const sluggify = (sluggified) => {
    let regex = / /gi;
    console.log(sluggified.replace(regex, '_'))
    newSlug = sluggified.replace(regex, '_')
  }

  sluggify(sluggified)

  const page = new Page({
    title: req.body.title,
    content: req.body.content,
    slug: newSlug
  })

  try {
    await page.save();
    res.redirect('/');
  } catch (error){
    { next(error) }
  }
});

router.get("/add", (req, res, next) => {
  res.send(addPage());
});

module.exports = router;


