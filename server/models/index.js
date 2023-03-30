const User = require("./User");
const Property = require("./Property");
const Favorites = require("./Favorites");
const Apointment = require("./Appointment");

//relaciones entre usuarios y favoritos:
Favorites.belongsTo(User);
Favorites.belongsToMany(Property, { through: "Favorites_Properties" });

//relaciones entre usuarios y citas:
Apointment.belongsTo(User);
module.exports = { User, Property, Favorites, Apointment };
