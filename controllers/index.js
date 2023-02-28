const router = require("express").Router();
const homeRoutes = require("./homeRoutes");
const apiRoutes = require("./api");

// Setting api and home routes.
router.use("/", homeRoutes);
router.use("/api", apiRoutes);

// Exporting router.
module.exports = router;
