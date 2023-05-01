const router = require("express").Router();

const userRoute = require("./user");
const propertyRoute = require("./property");
const favoriteRoute = require("./favorites");
const appointmentRouter = require("./appointment");
const messageRouter = require("./messages");

router.use("/user", userRoute);
router.use("/property", propertyRoute);
router.use("/favorite", favoriteRoute);
router.use("/appointment", appointmentRouter);
router.use("/messages", messageRouter);

module.exports = router;
