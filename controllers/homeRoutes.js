const router = require("express").Router();
const authCheck = require("../utils/authCheck");
const formatTime = require("../utils/helpers");
const { Blogs, Users, Comments } = require("../models");

router.get("/", async (req, res) => {
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

router.get("/dashboard", authCheck, async (req, res) => {
  try {
    const blogData = await Blogs.findAll({
      include: [
        {
          model: Users,
          attributes: ["username"],
        },
      ],
    });
    const blogs = blogData.map((blog) => {
      const plainBlog = blog.get({ plain: true });
      plainBlog.createdAt = formatTime(plainBlog.createdAt);

      if (plainBlog.User) {
        plainBlog.username = plainBlog.User.username;
        delete plainBlog.User;
        plainBlog.username = blog.User.username;
      }

      return plainBlog;
    });

    res.render("dashboard", {
      blogs,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
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
router.get("/myPosts", authCheck, async (req, res) => {
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
    const blogs = blogData.map((blog) => {
      const plainBlog = blog.get({ plain: true });
      plainBlog.createdAt = formatTime(plainBlog.createdAt);
      return plainBlog;
    });

    res.render("blogs", {
      blogs,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/blogInfo/:id", authCheck, async (req, res) => {
  try {
    const blogData = await Blogs.findOne({
      include: [
        {
          model: Users,
        },
        {
          model: Comments,
          include: [
            {
              model: Users,
              attributes: ["username"],
            },
          ],
          order: [["createdAt", "ASC"]],
        },
      ],
      where: {
        blog_id: req.params.id,
      },
      attributes: [
        "blog_id",
        "blog_title",
        "blog_body",
        "createdAt",
        "blog_user_id",
      ],
    });

    const formattedTime = formatTime(blogData.createdAt);

    const blog = {
      blog_id: blogData.blog_id,
      blog_title: blogData.blog_title,
      blog_body: blogData.blog_body,
      createdAt: formattedTime,
      username: blogData.User.username,
      comments: blogData.Comments.map((comment) => ({
        comment_id: comment.comment_id,
        comment_user: comment.User.username,
        comment_body: comment.comment,
        createdAt: formatTime(comment.createdAt),
      })),
    };

    res.render("blogInfo", {
      blog,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/editBlog/:id", authCheck, (req, res) => {
  let blog_id = req.params.id;
  res.render("editPost", { blog_id });
});

router.get("/addComment/:id", authCheck, (req, res) => {
  let blog_id = req.params.id;
  res.render("comment", { blog_id });
});

module.exports = router;
