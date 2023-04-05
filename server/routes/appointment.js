const { validateAuth } = require("../middleware/auth");
const { Appointment } = require("../models");

const router = require("express").Router();

router.get("/", validateAuth, async (req, res) => {
  try {
    const appointments = await Appointment.findAll();
    res.status(200).send(appointments);
  } catch (error) {
    res.sendStatus(402);
  }
});

router.post("/:id", validateAuth, async (req, res) => {
  const { id } = req.params;

  try {
    const data = {
      date: req.body.date,
      address: req.body.address,
      UserId: req.params.id,
    };
    const appointment = await Appointment.create(data);
    res.status(201).send(appointment);
  } catch (error) {
    res.sendStatus(402);
  }
});

router.get("/:id", validateAuth, async (req, res) => {
  try {
    const appointments = await Appointment.findAll({
      where: { UserId: req.params.id },
    });
    res.status(200).send(appointments);
  } catch (error) {
    res.sendStatus(402);
  }
});
module.exports = router;
