const {
  gettAllAppointments,
  createAAppointment,
  getAllYourAppointment,
} = require("../controllers/appointments");
const { validateAuth, validateAdmin } = require("../middleware/auth");

const router = require("express").Router();

//admin

router.get("/", validateAuth, validateAdmin, gettAllAppointments);

//usuario

router.post("/:id", validateAuth, createAAppointment);


router.get("/:id", validateAuth, getAllYourAppointment);


module.exports = router;
