const { validateToken } = require("../config/token");

const validateAuth = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.sendStatus(401);

  const user = validateToken(token);
  if (!user) return res.sendStatus(401);

  req.user = user;
  next();
};
const validateAdmin = (req, res, next) => {
  if (!req.body.admin) return res.sendStatus(401);
  next();
};

module.exports = { validateAdmin, validateAuth };
