// Requiring models.
const Users = require("./Users");
const Blogs = require("./Blogs");
const Comments = require("./Comments");

// Configuring model association.
Users.hasMany(Blogs, {
  foreignKey: "user_id",
});
Blogs.belongsTo(Users, {
  foreignKey: "blog_user_id",
});

// Comments to Users table associations to connect a User to a Comment
Users.hasMany(Comments, {
  foreignKey: "comment_user_id",
});

// Posts to Comments table associations to connect a post to a comment
Comments.hasOne(Blogs, {
  foreignKey: "blog_id",
});

Blogs.hasMany(Comments, {
  foreignKey: "blog_id",
});

// Comments to User table associations to connect a post to a comment
Comments.belongsTo(Users, {
  foreignKey: "comment_user_id",
});

Users.hasMany(Comments, {
  foreignKey: "comment_user_id",
});

// Exporting models.
module.exports = { Users, Blogs, Comments };
