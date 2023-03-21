const jwt = require("jsonwebtoken");
// const secret = require("../dotenv.js");
const secret = "hola";
function generateToken(payload) {
  const token = jwt.sign({ user: payload }, secret, { expiresIn: "2d" });
  return token;
}

const validateToken = (token) => {
  return jwt.verify(token, secret);
};

module.export = { generateToken };
