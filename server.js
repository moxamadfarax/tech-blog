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

app.use(express.static("views"));

app.get("/", (req, res) => {
  res.render("layouts/main", { title: "Tech Blog - Home" });
});
app.get("/signUp", (req, res) => {
  res.render("signUpPage", { title: "Tech Blog - Sign Up" });
});
app.get("/signIn", (req, res) => {
  res.render("signInPage", { title: "Tech Blog - Sign In" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
