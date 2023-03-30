const { Router } = require("express");
const User = require("../models/User");
const Property = require("../models/Property");
const Favorites = require("../models/Favorites");
const { validateAuth } = require("../middleware/auth");

const router = Router();

router.post("/:id", validateAuth, async (req, res) => {
  const { id } = req.params;
  const idProperty = req.body.id;
  const { type } = req.body;

  try {
    const favorites = await Favorites.findOne({
      where: { UserId: id },
    });
    console.log(favorites, "soyb yoo");
    if (!favorites) return res.sendStatus(404);

    const property = await Property.findByPk(idProperty);

    console.log(property);

    if (type === "add") {
      const addFavorite = await favorites.addProperty(property);
      console.log(addFavorite, "soy el favorito añadido");
      res.send(addFavorite).status(200);
    } else {
      const addFavorite = await Favorites.removeProperties(property);
      res.status(200).send(addFavorite);
    }
  } catch (error) {
    res.sendStatus(404);
  }
});

router.get("/:id", validateAuth, async (req, res) => {
  const { id } = req.params;

  const favorites = await Favorites.findOne({
    where: { UserId: req.params.id },
  });
  console.log(favorites, "soy del get");

  const favoritePropie = await favorites.getProperties();

  res.send(favoritePropie);
});

module.exports = router;
