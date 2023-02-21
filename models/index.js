// Requiring models.
const User = require("./Users");
const Blogs = require("./Blogs");
const Comments = require("./Comments");

// Configuring model association.
User.hasMany(Blogs, {
  foreignKey: "blogs_id",
});
Blogs.hasOne(User, {
  foreignKey: "user_id",
});

User.hasMany(Comments, {
  foreignKey: "comment_user_id",
});

Comments.belongsTo(Blogs, {
  foreignKey: "blogs_id",
});
Blogs.hasMany(Comments, {
  foreignKey: "blog_id",
});

// Exporting models.
module.exports = { User, Blogs, Comments };
