const { Router } = require("express");

const { validateAdmin, validateAuth } = require("../middleware/auth");

const {
  getAllProperties,
  infoProperty,
  searchBar,
  filterSellOrRent,
  filterPrice,
  createProperty,
  editInfoProperty,
  deleteAProperty,
} = require("../controllers/property");

const router = Router();

router.get("/", getAllProperties);

router.get("/:id", infoProperty);
// SEARCH OF INSERT TEXT
router.get("/search/:textSearch", searchBar);

// FILTRO POR ALQUILER O VENTA
router.get("/filterOptions/:options", filterSellOrRent);

router.get("/filterPrice/:filterMajorToMinor", filterPrice);

//ADMIN ROUTES FIND AND EDIT PROPERTY

router.post("/", validateAuth, validateAdmin, createProperty);

router.put("/:id", validateAuth, validateAdmin, editInfoProperty);

router.delete("/:id", validateAuth, validateAdmin, deleteAProperty);
module.exports = router;
