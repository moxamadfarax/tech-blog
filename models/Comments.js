const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

Comments.init(
  {
    comment_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    post_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Blogs",
        key: "blog_id",
      },
    },
    comment_user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Users",
        key: "user_id",
      },
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "Comments",
  }
);
