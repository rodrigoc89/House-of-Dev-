const S = require("sequelize");
const db = require("../db/db");
const bcrypt = require("bcrypt");
// const validator = require("validator");

class User extends S.Model {}
User.init(
  {
    name: {
      type: S.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Field cannot be null",
        },
        isAlpha: {
          args: true,
          msg: "Name can only contain letters",
        },
        len: {
          args: [3, 255],
          msg: "The name can only be greater than 3 characters up to 255 characters",
        },
      },
    },
    lastName: {
      type: S.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Field cannot be null",
        },
        isAlpha: {
          args: true,
          msg: "Last name can only contain letters",
        },
        len: {
          args: [3, 255],
          msg: "The last name can only be greater than 3 characters up to 255 characters",
        },
      },
    },
    phone: {
      type: S.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: {
          args: [10, 15],
          msg: "Validation len on phone failed",
        },
      },
    },
    email: {
      type: S.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          args: true,
          msg: "The field has to be a valid email",
        },
      },
    },
    password: {
      type: S.STRING,
      allowNull: false,
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
