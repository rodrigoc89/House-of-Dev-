const router = require("express").Router();

const userRoute = require("./user");
const propertyRoute = require("./property");
const favoriteRoute = require("./favorites");
const apointmentRouter= require("./apointment")

router.use("/user", userRoute);
router.use("/property", propertyRoute);
router.use("/favorite", favoriteRoute);
router.use("/apointment", apointmentRouter)

module.exports = router;
