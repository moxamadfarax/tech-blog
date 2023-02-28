// Requiring made routes.
const router = require("express").Router();
const usersRoutes = require("./usersRoutes");
const blogRoutes = require("./blogsRoutes");
const commentRoutes = require("./commentsRoutes");

// Giving routes their roots.
router.use("/users", usersRoutes);
router.use("/blogs", blogRoutes);
router.use("/comments", commentRoutes);

// Exporting router.
module.exports = router;
