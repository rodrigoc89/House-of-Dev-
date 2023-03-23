const User = require("./models/User");

User.create({
  name: "admin",
  lastName: "superAdmin",
  email: "admin@gmail.com",
  password: "admin",
  admin: true,
}).then(() => console.log("ADMIN CREADO"));
