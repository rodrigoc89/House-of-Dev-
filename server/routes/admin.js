const { Router } = require("express");

const User = require("../models/User");

const router = Router();

// USERS
router.get("/user/:id", (req, res) => {
  const { id } = req.params;
  User.findByPk(id)
    .then((user) => {
      res.status(201).send(user);
    })
    .catch((error) => console.log(error));
});

router.get("/users", (req, res) => {
  User.findAll()
    .then((users) => {
      res.status(201).send(users);
    })
    .catch((error) => console.log(error));
});

router.put("/user/:id", validateAuth, (req, res) => {
  const { id } = req.params;
  User.findByPk(id).then((user) => {
    console.log(user);
    user
      .update(req.body, { where: { id: id } })
      .then((userUpdate) => res.status(201).send(userUpdate))
      .catch((error) => console.log(error));
  });
});
// PROPERTY

export default router;
