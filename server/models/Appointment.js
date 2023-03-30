const S = require("sequelize");
const db = require("../db/db");

class Appointment extends S.Model {}

Appointment.init(
  {
    date: {
      type: S.STRING,
    },
    direction: {
      type: S.STRING,
    },
  },
  { sequelize: db, modelName: "Appointment" }
);

module.exports = Appointment;
