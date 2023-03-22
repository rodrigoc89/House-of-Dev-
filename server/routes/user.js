const router = require("express").Router();

const User = require("../models/User");

const { generateToken } = require("../config/token");
const { validateAuth } = require("../middleware/auth");

router.post("/register", (req, res) => {
  const { name, lastName, password, email } = req.body;
  const newUser = {
    name: name,
    lastName: lastName,
    password: password,
    email: email,
  };
  User.create(newUser)
    .then((user) => res.status(201).send(user))
    .catch((error) => console.log(error));
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ where: { email: email } }).then((user) => {
    user.validatePassword(password).then((validate) => {
      if (!validate) {
        return res.sendStatus(401);
      }
      const payload = {
        name: user.name,
        lastName: user.lastName,
        password: user.password,
        email: user.email,
        admin: user.admin,
      };
      const token = generateToken(payload);
      res.cookie("token", token).send(payload);
    });
  });
});

router.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.status(204).send("logout");
});

// ADMIN

router.put("/admin/:id", validateAuth, (req, res) => {
  const { id } = req.params;
  User.findByPk(id).then((user) => {
    console.log(user);
    user
      .update(req.body, { where: { id: id } })
      .then((userUpdate) => res.status(201).send(userUpdate))
      .catch((error) => console.log(error));
  });
});

router.get("/admin/:id", (req, res) => {
  const { id } = req.params;
  User.findByPk(id)
    .then((user) => {
      res.status(201).send(user);
    })
    .catch((error) => console.log(error));
});

router.get("/adminList", (req, res) => {
  User.findAll()
    .then((users) => {
      res.status(201).send(users);
    })
    .catch((error) => console.log(error));
});

module.exports = router;
