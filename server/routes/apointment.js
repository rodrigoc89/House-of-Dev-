const { validateAuth } = require("../middleware/auth");
const { Apointment } = require("../models");
const router = require("express").Router();

router.get("/", validateAuth, (req, res) => {
  Apointment.findAll().then((apointmentsFound) => {
    res.send(apointmentsFound);
  });
});

router.post("/:id", validateAuth, (req, res) => {
  const data = {
    date: req.body.date,
    direction: req.body.direction,
    UserId: req.params.id,
  };
  Apointment.create(data).then((ap) => {
    res.send(ap);
  });
});

router.get("/:id", validateAuth, (req, res) => {
  Apointment.findAll({ where: { UserId: req.params.id } }).then((ap) =>
    res.send(ap)
  );
});
module.exports = router;
