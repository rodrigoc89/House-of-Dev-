const router = require("express").Router();

const User = require("../models/User");
const Favorites = require("../models/Favorites");

const { generateToken } = require("../config/token");
const { validateAuth, validateAdmin } = require("../middleware/auth");

router.get("/me", validateAuth, (req, res) => {
  res.send(req.user);
});

router.post("/register", (req, res) => {
  const { name, lastName, password, email } = req.body;
  const newUser = {
    name: name,
    lastName: lastName,
    password: password,
    email: email,
  };
  User.create(newUser)
    .then((user) => {
      Favorites.create({ UserId: user.id }).then((favoriteCreated) => {
        res.send(favoriteCreated);
      });

      // res.status(201).send(user);
      // user.createFavorites(user);
    })
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
        id:user.id,
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

// ADMIN ROUTES FIND AND EDIT USERS

router.get("/", validateAuth, validateAdmin, async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(201).send(users);
  } catch (error) {
    res.sendStatus(404);
  }
});

router.get("/admin/:id", validateAuth, async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    res.status(201).send(user);
  } catch (error) {
    res.sendStatus(404);
  }
});

router.put("/:id", validateAuth, validateAdmin, async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    user.update(req.body);
    res.status(201).send(user);
  } catch (error) {
    res.sendStatus(404);
  }
});

router.delete("/:id", validateAuth, validateAdmin, async (req, res) => {
  const { id } = req.params;
  try {
    await User.destroy({ where: { id: id } });
    res.sendStatus(202);
  } catch (error) {
    res.sendStatus(404);
  }
});

module.exports = router;
