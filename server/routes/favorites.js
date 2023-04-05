const { Router } = require("express");

const Property = require("../models/Property");
const Favorites = require("../models/Favorites");
const { validateAuth, validateAdmin } = require("../middleware/auth");

const router = Router();

router.post("/:id", validateAuth, async (req, res) => {
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
  try {
    const favorites = await Favorites.findOne({
      where: { UserId: req.params.id },
    });
    const AllFavorites = await favorites.getProperties();
    res.send(AllFavorites);
  } catch (error) {
    res.sendStatus(404);
  }
});

// ADMIN

router.get("/admin/:id", validateAuth, validateAdmin, async (req, res) => {
  const { id } = req.params;
  try {
    const favorites = await Favorites.findByPk(id);
    const AllFavorites = await favorites.getProperties();
    res.status(200).send(AllFavorites);
  } catch (error) {
    res.sendStatus(404);
  }
});

module.exports = router;
