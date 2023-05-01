const User = require("./User");
const Property = require("./Property");
const Favorites = require("./Favorites");
const Appointment = require("./Appointment");
const Message = require("./Messages");

//relaciones entre usuarios y favoritos:
Favorites.belongsTo(User);
Message.belongsTo(User, { as: "receiver" });
Favorites.belongsToMany(Property, { through: "Favorites_Properties" });

//relaciones entre usuarios y citas:
Appointment.belongsTo(User);
module.exports = { User, Property, Favorites, Appointment, Message };
