const S = require("sequelize");
const db = require("../db/db");

class Appointment extends S.Model {}

Appointment.init(
  {
    date: {
      type: S.STRING,
    },
    address: {
      type: S.STRING,
    },

    image: {
      type: S.TEXT,
    },
    userPhone: {
      type: S.BIGINT,
    },
    userName: {
      type: S.STRING,
    },
    userLastName: {
      type: S.STRING,
    },
    userEmail: {
      type: S.STRING,
    },
  },
  { sequelize: db, modelName: "Appointment" }
);

module.exports = Appointment;
