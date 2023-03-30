const { validateAuth } = require("../middleware/auth");
const { Appointment } = require("../models");
const router = require("express").Router();

router.get("/", validateAuth, (req, res) => {
  Appointment.findAll().then((appointmentsFound) => {
    res.send(appointmentsFound);
  });
});

router.post("/:id", validateAuth, (req, res) => {
  const data = {
    date: req.body.date,
    direction: req.body.direction,
    UserId: req.params.id,
  };
  Appointment.create(data).then((ap) => {
    res.send(ap);
  });
});

router.get("/:id", validateAuth, (req, res) => {
  Appointment.findAll({ where: { UserId: req.params.id } }).then((ap) =>
    res.send(ap)
  );
});
module.exports = router;
