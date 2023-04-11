const router = require("express").Router();

const { validateAuth, validateAdmin } = require("../middleware/auth");
const { passwordValidator } = require("../middleware/passwordValidator");
const {
  permanence,
  login,
  register,
  logout,
  editProfile,
  getAllUsers,
  infoUser,
  editUser,
  deleteUser,
} = require("../controllers/user");

router.get("/me", validateAuth, permanence);

router.post("/register", passwordValidator, register);

router.post("/login", login);

router.post("/logout", logout);

router.put("/profile/:id", validateAuth, editProfile);

// ADMIN ROUTES FIND AND EDIT USERS

router.get("/", validateAuth, validateAdmin, getAllUsers);

router.get("/admin/:id", validateAuth, infoUser);

router.put("/:id", validateAuth, validateAdmin, editUser);

router.delete("/:id", validateAuth, validateAdmin, deleteUser);

module.exports = router;

//Users[citas.UserId-1]
