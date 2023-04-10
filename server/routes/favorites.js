const { Router } = require("express");

const { validateAuth, validateAdmin } = require("../middleware/auth");
const {
  addOrDeleteFavorite,
  getAllYourFavorites,
  getFavoritesOfUser,
} = require("../controllers/favorites");

const router = Router();

router.post("/:id", validateAuth, addOrDeleteFavorite);


router.get("/:id", validateAuth, getAllYourFavorites);



// ADMIN

router.get("/admin/:id", validateAuth, validateAdmin, getFavoritesOfUser);

module.exports = router;
