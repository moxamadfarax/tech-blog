const router = require("express").Router();
const authCheck = require("../utils/authCheck");

router.get("/", authCheck, async (req, res) => {
  console.log(req.session.logged_in);
  try {
    res.render("homePage", {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/signUp", (req, res) => {
  console.log(req.session.logged_in);
  try {
    if (req.session.logged_in) {
      res.redirect("/");
      return;
    }
    res.render("signUp");
  } catch (error) {
    res.status(500).json(err);
  }
});

router.get("/signIn", (req, res) => {
  console.log(req.session.logged_in);
  try {
    if (req.session.logged_in) {
      res.redirect("/");
      return;
    }
    res.render("signIn");
  } catch (error) {
    res.status(500).json(err);
  }
});

module.exports = router;
