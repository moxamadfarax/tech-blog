const router = require("express").Router();
const Comments = require("../../models/Comments");

// Route to create comment based off of blog id.
router.post("/new/:id", (req, res) => {
  const commentData = {
    blog_id: req.params.id,
    comment_user_id: req.session.user_id,
    comment: req.body.comment,
  };
  console.log(commentData);

  Comments.create(commentData)
    .then((newComment) => {
      res.status(200).json(newComment);
      console.log("nice");
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// Exporting router.
module.exports = router;
