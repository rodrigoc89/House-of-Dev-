const User = require("./User");
const Property = require("./Property");
const Favorites = require("./Favorites");

// User.belongsToMany(Property, { through: "Favorites" });
// Property.belongsToMany(User, { through: "Favorites" });

// User.hasOne(FavoritesLibrary);
// FavoritesLibrary.belongsTo(User);
// Property.belongsToMany(FavoritesLibrary, { through: "Library_Content" });
// FavoritesLibrary.belongsToMany(Property, { through: "Library_Content" });

User.belongsTo(Favorites);
Favorites.belongsToMany(Property, { through: "Favorites_Properties" });

module.exports = { User, Property };
