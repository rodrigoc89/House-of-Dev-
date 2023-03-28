const { Router } = require("express");
const User = require("../models/User");
const Property = require("../models/Property");
const Favorites = require("../models/Favorites");
const { validateAuth } = require("../middleware/auth");

const router = Router();

router.post("/:id", validateAuth, async (req, res) => {
  const { id } = req.params;
  const idProperty = req.body.id;
  const type = req.body.type;

  try {
    const user = await User.findByPk(id);
    console.log(user.dataValues);

    const property = await Property.findByPk(idProperty);

    if (type == "add") {
      const addFavorite = await favorites.createProperties(property);
      res.sendStatus(200).send(addFavorite);
    }

    const addFavorite = await Favorites.removeProperties(property);
    res.status(200).send(addFavorite);
  } catch (error) {
    res.sendStatus(404);
  }
});

module.exports = router;
