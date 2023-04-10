const { User, Favorites } = require("../models");
const { generateToken } = require("../config/token");

const permanence = async (req, res) => {
  try {
    res.status(200).send(req.user);
  } catch (error) {
    res.sendStatus(404);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email: email } });
    console.log(user);
    const validate = await user.validatePassword(password);
    if (!validate) return res.sendStatus(401);
    const payload = {
      id: user.id,
      name: user.name,
      lastName: user.lastName,
      phone: user.phone,
      password: user.password,
      email: user.email,
      admin: user.admin,
    };
    const token = generateToken(payload);
    res.cookie("token", token).send(payload);
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    Favorites.create({ UserId: newUser.id });
    res.status(201).send(newUser);
  } catch (error) {
    console.log(error);
  }
};

const logout = (req, res) => {
  try {
    res.clearCookie("token");
    res.status(204).send("logout");
  } catch (error) {
    res.sendStatus(404);
  }
};

const editProfile = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    const userUp = await user.update(req.body);
    const payload = {
      id: userUp.id,
      name: userUp.name,
      lastName: userUp.lastName,
      phone: userUp.phone,
      password: userUp.password,
      email: userUp.email,
      admin: userUp.admin,
    };
    token = generateToken(payload);
    res.cookie("token", token);
    res.status(202).send(userUp);
  } catch (error) {
    res.sendStatus(404);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(202).send(users);
  } catch (error) {
    res.sendStatus(404);
  }
};

const infoUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    res.status(202).send(user);
  } catch (error) {
    res.sendStatus(404);
  }
};

const editUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    user.update(req.body);
    res.status(202).send(user);
  } catch (error) {
    res.sendStatus(404);
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await User.destroy({ where: { id: id } });
    res.sendStatus(202);
  } catch (error) {
    res.sendStatus(404);
  }
};
module.exports = {
  login,
  permanence,
  register,
  logout,
  editProfile,
  getAllUsers,
  infoUser,
  editUser,
  deleteUser,
};
