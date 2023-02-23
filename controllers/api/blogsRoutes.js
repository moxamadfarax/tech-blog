const router = require("express").Router();
const Blogs = require("../../models/Blogs");

// Route to create a new post
router.post("/newPost", (req, res) => {
  console.log("hit");
  console.log(req.body);
  const blogData = {
    blog_user_id: req.session.user_id,
    blog_title: req.body.title,
    blog_body: req.body.body,
  };

  // Creating a new post in the DB
  Blogs.create(blogData)
    .then((newPost) => {
      res.status(200).json(newPost);
      console.log("nice");
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.delete("/:id", async (req, res) => {
  console.log(req.params.id);
  try {
    const blogsData = await Blogs.destroy({
      where: {
        blog_id: req.params.id,
      },
    });
    if (!blogsData) {
      res.status(404).json({ message: "No book found with this id!" });
      return;
    }
    res.status(200).json(blogsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
