const { validateToken } = require("../config/token");

const validateAuth = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(400).json({ error: "token does not exist" });

  const user = validateToken(token);
  if (!user)
    return res.status(401).json({ error: "the user is not logged in" });

  req.user = user;
  next();
};
const validateAdmin = (req, res, next) => {
  const { admin } = req.user.user

  if (!admin)
    return res
      .status(401)
      .json({ error: "there are no administrator permissions" });

  next();
};

module.exports = { validateAdmin, validateAuth };
