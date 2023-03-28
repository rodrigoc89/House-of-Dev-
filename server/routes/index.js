const router = require("express").Router();

const userRoute = require("./user");
const propertyRoute = require("./property");
const favoriteRoute = require("./favorites");

router.use("/user", userRoute);
router.use("/property", propertyRoute);
router.use("/favorite", favoriteRoute);

module.exports = router;
