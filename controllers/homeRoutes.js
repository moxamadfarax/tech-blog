const router = require("express").Router();
const authCheck = require("../utils/authCheck");
const formatTime = require("../utils/helpers");
const { Blogs, Users } = require("../models");

router.get("/", authCheck, async (req, res) => {
  try {
    res.render("homePage", {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/signUp", (req, res) => {
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

router.get("/newPost", authCheck, async (req, res) => {
  try {
    res.render("newPost", {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to view all posts
router.get("/posts", authCheck, async (req, res) => {
  try {
    const blogData = await Blogs.findAll({
      include: [
        {
          model: Users,
        },
      ],
      where: {
        blog_user_id: req.session.user_id,
      },
    });
    const blogs = blogData.map((Blogs) => Blogs.get({ plain: true }));
    console.log(blogs);
    res.render("blogs", {
      blogs,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
