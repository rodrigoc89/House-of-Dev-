const router = require("express").Router();

const User = require("../models/User");

const { generateToken } = require("../config/token");

router.post("/register", (req, res) => {
  User.create(req.body)
    .then((user) => res.status(201).send(user))
    .catch((error) => console.log(error));
});

router.post("/login", (req, res) => {
  const { name, lastName, email, password } = req.body;
  User.findOne({ where: { email: email } }).then((user) => {
    console.log(user);
    user.validatePassword(password).then((validate) => {
      if (!validate) {
        return res.sendStatus(401);
      }
      const payload = {
        name: name,
        lastName: lastName,
        password: password,
        email: email,
      };
      console.log(generateToken, "generatetoken");
      const token = generateToken(payload);
      res.cookie("token", token).send(token);
    });
  });
});

router.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.status(204).send("logout");
});

module.exports = router;
