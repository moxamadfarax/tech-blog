const router = require("express").Router();
const usersRoutes = require("./usersRoutes");
const blogRoutes = require("./blogsRoutes");

router.use("/users", usersRoutes);
router.use("/blogs", blogRoutes);

module.exports = router;
