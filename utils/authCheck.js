// Helper function that checks whether the user is loggen in our not.
const authCheck = (req, res, next) => {
  if (!req.session.logged_in) {
    res.redirect("/signUp");
  } else {
    next();
  }
};

module.exports = authCheck;
