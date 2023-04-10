const S = require("sequelize");
const db = require("../db/db");

class Appointment extends S.Model {}

Appointment.init(
  {
    date: {
      type: S.DATE,
      validate: {
        isDate: true,
      },
    },
    address: {
      type: S.STRING,
      allowNull: false,
    },

    image: {
      type: S.TEXT,
      allowNull: false,
    },
    userPhone: {
      type: S.BIGINT,
      allowNull: false,
    },
    userName: {
      type: S.STRING,
      allowNull: false,
    },
    userLastName: {
      type: S.STRING,
      allowNull: false,
    },
    userEmail: {
      type: S.STRING,
      validate: {
        isEmail: true,
      },
    },
  },
  { sequelize: db, modelName: "Appointment" }
);

module.exports = Appointment;
