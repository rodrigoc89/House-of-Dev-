const S = require("sequelize");
const db = require("../db/db");

class Favorites extends S.Model {}
Favorites.init({}, { sequelize: db, modelName: "Favorites" });

module.exports = Favorites;
