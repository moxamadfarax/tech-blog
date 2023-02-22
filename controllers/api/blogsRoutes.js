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

// Route to update an existing post
// router.post("/update", (req, res) => {
//   let url = req.headers.referer;
//   let split = url.split("/");
//   const parsedPostID = split.pop();

//   // Updating a existing post in the DB
//   Posts.update(
//     {
//       post_title: req.body.updatePostDetails.post_title,
//       post_body: req.body.updatePostDetails.post_body,
//     },
//     {
//       where: {
//         post_id: parsedPostID,
//       },
//     }
//   )
//     .then((updatedPost) => {
//       res.json(updatedPost);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.json(err);
//     });
// });

module.exports = router;
