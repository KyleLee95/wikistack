const router = require("express").Router();
const addPage = require("../views/addPage");
const { Page } = require("../models");

router.get("/", (req, res, next) => {
  res.send("test");
});

router.post("/", async (req, res, next) => {
  const page = new Page({
    title: req.body.title,
    content: req.body.content
  });

  try {
    await page.save();
    res.redirect(`/wiki/${page.slug}`);
  } catch (error) {
    {
      next(error);
    }
  }
});

router.get("/:slug", async (req, res, next) => {
  try {
    const page = await Page.findOne({
      where: {
        slug: req.params.slug
      }
    });
    res.send(page);
  } catch (error) {
    next(error);
  }
  // res.send(`hit dynamic route at ${req.params.slug}`);
});

router.get("/add", (req, res, next) => {
  res.send(addPage());
});

module.exports = router;
