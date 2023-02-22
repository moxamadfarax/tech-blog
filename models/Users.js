const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require("bcrypt");

class Users extends Model {
  async checkPassword(userPassword) {
    return await bcrypt.compare(userPassword, this.password);
  }
}

Users.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    hooks: {
      beforeCreate: async (newPassword) => {
        newPassword.password = await bcrypt.hash(newPassword.password, 10);
        return newPassword;
      },
      beforeUpdate: async (updatedPassword) => {
        updatedPassword.password = await bcrypt.hash(
          updatedPassword.password,
          10
        );
        return updatedPassword;
      },
    },
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "Users",
  }
);

module.exports = Users;
