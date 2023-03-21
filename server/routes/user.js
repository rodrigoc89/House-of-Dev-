const router = require("express").Router();
const User = require("../models/User");

router.post("/login", (req, res) => {
  User.findOne({ where: { email: req.params.email } }).then((user) => {
    user.validatePassword(req.params.password).then((validate) => {
      if (!validate) {
        return res.sendStatus(401);
      }
      const token = "hola, soy un identificador llamado user";
      res.cookie("token", token).send(token);
    });
  });
});

router.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.status(204).send("logout");
});

module.exports = router;
