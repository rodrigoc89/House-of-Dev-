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

    if (!favorites) return res.sendStatus(404);

    const property = await Property.findByPk(idProperty);

    if (type === "add") {
      const addFavorite = await favorites.addProperty(property);
      res.send(property).status(200);
    } else {
      const removeFavorite = await favorites.removeProperties(property);
      res.send(property).status(200);
    }
  } catch (error) {
    console.log(error);
  }
};

const getAllYourFavorites = async (req, res) => {
  const { id } = req.params;
  try {
    const favorites = await Favorites.findOne({
      where: { UserId: req.params.id },
    });
    const AllFavorites = await favorites.getProperties();
    res.send(AllFavorites);
  } catch (error) {
    res.sendStatus(404);
  }
};

const getFavoritesOfUser = async (req, res) => {
  const { id } = req.params;
  try {
    const favorites = await Favorites.findByPk(id);
    const AllFavorites = await favorites.getProperties();
    res.status(200).send(AllFavorites);
  } catch (error) {
    res.sendStatus(404);
  }
};

module.exports = {
  addOrDeleteFavorite,
  getAllYourFavorites,
  getFavoritesOfUser,
};
