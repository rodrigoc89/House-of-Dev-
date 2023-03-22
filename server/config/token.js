const jwt = require("jsonwebtoken");
const { SECRET } = require("../config/envs");

function generateToken(payload) {
  const token = jwt.sign({ user: payload }, SECRET, { expiresIn: "2d" });
  return token;
}

const validateToken = (token) => {
  return jwt.verify(token, SECRET);
};

module.exports = { generateToken, validateToken };