const router = require("express").Router();
const usersRoutes = require("./usersRoutes");
const blogRoutes = require("./blogsRoutes");
const commentRoutes = require("./commentsRoutes");

router.use("/users", usersRoutes);
router.use("/blogs", blogRoutes);
router.use("/comments", commentRoutes);

module.exports = router;
