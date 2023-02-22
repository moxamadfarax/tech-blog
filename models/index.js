// Requiring models.
const Users = require("./Users");
const Blogs = require("./Blogs");

// Configuring model association.
Users.hasMany(Blogs, {
  foreignKey: "blogs_id",
});
Blogs.hasOne(Users, {
  foreignKey: "user_id",
});

// Exporting models.
module.exports = { Users, Blogs };
