const S = require("sequelize");
const db = require("../db/db");
const bcrypt = require("bcrypt");

class User extends S.Model {}
User.init(
  {
    name: {
      type: S.STRING,
      allowNull: false,
    },
    lastName: {
      type: S.STRING,
      allowNull: false,
    },
    phone: {
      type: S.BIGINT,
      allowNull: false,
      validate:{
        min: 7,
      }
    },
    email: {
      type: S.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: S.STRING,
      allowNull: false,
      validate: {
        isStrongPassword: {
          minLength: 8,
          minLowercase: 0,
          minUppercase: 0,
          minNumbers: 0,
          minSymbols: 0,
        },
      },
    },
    salt: {
      type: S.STRING,
    },
    admin: {
      type: S.BOOLEAN,
      defaultValue: false,
    },
  },
  { sequelize: db, modelName: "User" }
);

User.prototype.hash = function (password, salt) {
  return bcrypt.hash(password, salt);
};

User.prototype.validatePassword = function (password) {
  return this.hash(password, this.salt).then(
    (hashed) => hashed === this.password
  );
};

User.addHook("beforeValidate", (user) => {
  const salt = bcrypt.genSaltSync();
  user.salt = salt;

  return user.hash(user.password, user.salt).then((hashed) => {
    user.password = hashed;
  });
});

module.exports = User;
