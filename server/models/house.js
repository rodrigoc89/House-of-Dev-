const S = require("sequelize");
const db = require("../db/db");

class House extends S.Model {}

House.init(
  {
    direction: {
      type: S.STRING,
    },

    ambients: {
      type: S.ARRAY(S.STRING),
    },

    description: {
      type: S.STRING,
    },
    m2: {
      type: S.INTEGER,
    },
    options: {
      type: S.STRING,
    },
    URLImage: {
      type: S.STRING,
    },
    disp: {
      type: S.BOOLEAN,
    },
  },
  { sequelize: db, modelName: "house" }
);

module.exports = House;
