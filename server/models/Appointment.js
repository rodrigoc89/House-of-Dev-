const S = require("sequelize");
const db = require("../db/db");

class Apointment extends S.Model {}

Apointment.init(
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

module.exports = Apointment;
