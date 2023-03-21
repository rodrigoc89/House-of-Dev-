const router = require("express").Router();

const user = require("./user");

router("/user", user);

module.exports = router;
