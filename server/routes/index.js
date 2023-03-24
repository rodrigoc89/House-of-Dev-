const router = require("express").Router();

const userRoute = require("./user");
const propertyRoute = require("./property");

router.use("/user", userRoute);
router.use("/property", propertyRoute);

module.exports = router;
