const router = require("express").Router();

const User = require("../models/User");
const Favorites = require("../models/Favorites");

const { generateToken } = require("../config/token");
const { validateAuth, validateAdmin } = require("../middleware/auth");

router.get("/me", validateAuth, (req, res) => {
  try {
    res.status(200).send(req.user);
  } catch (error) {
    res.sendStatus(404);
  }
});

router.post("/register", async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    Favorites.create({ UserId: newUser.id });
    res.status(201).send(newUser);
  } catch (error) {
    res.sendStatus(404);
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email: email } });
    const validate = await user.validatePassword(password);
    if (!validate) return res.sendStatus(401);
    const payload = {
      id: user.id,
      name: user.name,
      lastName: user.lastName,
      password: user.password,
      email: user.email,
      admin: user.admin,
    };
    const token = generateToken(payload);
    res.cookie("token", token).send(payload);
  } catch (error) {
    res.sendStatus(404);
  }
});

router.post("/logout", (req, res) => {
  try {
    res.clearCookie("token");
    res.status(204).send("logout");
  } catch (error) {
    res.sendStatus(404);
  }
});

router.put("/profile/:id", validateAuth, async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    res.status(202).send(user);
  } catch (error) {
    res.sendStatus(404);
  }
});

// ADMIN ROUTES FIND AND EDIT USERS

router.get("/", validateAuth, validateAdmin, async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(202).send(users);
  } catch (error) {
    res.sendStatus(404);
  }
});

router.get("/admin/:id", validateAuth, async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    res.status(202).send(user);
  } catch (error) {
    res.sendStatus(404);
  }
});

router.put("/:id", validateAuth, validateAdmin, async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    user.update(req.body);
    res.status(202).send(user);
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
