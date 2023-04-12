const S = require("sequelize");
const db = require("../db/db");

class Property extends S.Model {}
Property.init(
  {
    address: {
      type: S.STRING,
      allowNull: false,
    },
    bathrooms: {
      type: S.INTEGER,
      allowNull: false,
    },
    bedrooms: {
      type: S.INTEGER,
      allowNull: false,
    },
    price: {
      type: S.INTEGER,
      allowNull: false,
    },
    description: {
      type: S.TEXT,
      allowNull: false,
    },
    m2: {
      type: S.INTEGER,
      allowNull: false,
    },
    options: {
      type: S.STRING,
      allowNull: false,
    },
    image: {
      type: S.TEXT,
      allowNull: false,
      validate: {
        isUrl: { args: true, msg: "you must enter a valid format" },
      },
    },
    available: {
      type: S.BOOLEAN,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "Property" }
);

module.exports = Property;
