const User = require("./User");
const Property = require("./Property");
const Favorites = require("./Favorites");
const Appointment = require("./Appointment");

//relaciones entre usuarios y favoritos:
Favorites.belongsTo(User);
User.belongsTo(Favorites);
Favorites.belongsToMany(Property, { through: "Favorites_Properties" });

//relaciones entre usuarios y citas:
Appointment.belongsTo(User);
module.exports = { User, Property, Favorites, Appointment };
