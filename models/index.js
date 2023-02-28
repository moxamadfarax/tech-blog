// Requiring models.
const Users = require("./Users");
const Blogs = require("./Blogs");
const Comments = require("./Comments");

// Model Association
Users.hasMany(Blogs, {
  foreignKey: "user_id",
});
Blogs.belongsTo(Users, {
  foreignKey: "blog_user_id",
});

Users.hasMany(Comments, {
  foreignKey: "comment_user_id",
});

Comments.hasOne(Blogs, {
  foreignKey: "blog_id",
});

Blogs.hasMany(Comments, {
  foreignKey: "blog_id",
});

Comments.belongsTo(Users, {
  foreignKey: "comment_user_id",
});

Users.hasMany(Comments, {
  foreignKey: "comment_user_id",
});

module.exports = { Users, Blogs, Comments };
