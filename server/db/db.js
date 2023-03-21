const Sequelize = require("sequelize");

const db = new Sequelize("houseOfDev", null, null, {
  host: "localhost",
  dialect: "postgres",
});

module.exports = db;
