const router = require("express").Router();

const userRoute = require("./user");
const adminRoute = require("./admin");

router.use("/user", userRoute);
router.use("/admin", adminRoute);

module.exports = router;
