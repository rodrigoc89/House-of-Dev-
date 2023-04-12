const Property = require("../models/Property");
const Favorites = require("../models/Favorites");

const addOrDeleteFavorite = async (req, res) => {
  const { id } = req.params;
  const idProperty = req.body.id;
  const { type } = req.body;

  try {
    const favorites = await Favorites.findOne({
      where: { UserId: id },
    });

    if (!favorites) return res.status(400).send(error);

    const property = await Property.findByPk(idProperty);

    if (type === "add") {
      const addFavorite = await favorites.addProperty(property);
      res.send(property).status(200);
    } else {
      const removeFavorite = await favorites.removeProperties(property);
      res.send(property).status(200);
    }
  } catch (error) {
    res.status(400).send(error);
  }
};

const getAllYourFavorites = async (req, res) => {
  const { id } = req.params;
  try {
    const favorites = await Favorites.findOne({
      where: { UserId: id },
    });
    const AllFavorites = await favorites.getProperties();
    res.send(AllFavorites);
  } catch (error) {
    res.status(400).send(error);
  }
};
// ADMIN
const getFavoritesOfUser = async (req, res) => {
  const { id } = req.params;
  try {
    const favorites = await Favorites.findOne({
      where: { UserId: id },
    });
    const AllFavorites = await favorites.getProperties();
    res.status(200).send(AllFavorites);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = {
  addOrDeleteFavorite,
  getAllYourFavorites,
  getFavoritesOfUser,
};
