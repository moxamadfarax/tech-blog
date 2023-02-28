const router = require("express").Router();
const Blogs = require("../../models/Blogs");

router.post("/newPost", (req, res) => {
  const blogData = {
    blog_user_id: req.session.user_id,
    blog_title: req.body.title,
    blog_body: req.body.body,
  };

  Blogs.create(blogData)
    .then((newPost) => {
      res.status(200).json(newPost);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.delete("/:id", async (req, res) => {
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

router.put("/updatePost/:id", async (req, res) => {
  try {
    const blogData = await Blogs.update(
      {
        blog_title: req.body.title,
        blog_body: req.body.body,
      },
      {
        where: {
          blog_id: req.params.id,
        },
      }
    );

    if (!blogData[0]) {
      res.status(404).json({ message: "No blog post found with this id!" });
      return;
    }

    res.status(200).json({ message: "Blog post updated successfully!" });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
