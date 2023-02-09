const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const PORT = process.env.PORT || 3001;
const path = require("path");

app.engine(
  "handlebars",
  exphbs.engine({
    defaultLayout: "main",
  })
);

app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("views"));
let loggedIn = false;
app.get("/", (req, res) => {
  res.render("layouts/main", { title: "Tech Blog - Home", loggedIn });
});
app.get("/auth", (req, res) => {
  res.render("authPage", {
    layout: false,
    title: "Tech Blog - Sign Up",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
