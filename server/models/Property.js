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
      type: S.STRING,
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
      type: S.STRING,
      allowNull: false,
    },
    available: {
      type: S.BOOLEAN,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "Property" }
);

module.exports = Property;
