const dotenv = require("dotenv");

dotenv.config();
const requiredEnvs = ["SECRET"];
requiredEnvs.forEach((env) => {
  if (!process.env[env]) throw new Error(`Missing env variable ${env}`);
});

const secret = process.env.SECRET;

module.export = secret;
