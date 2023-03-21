const UsersService = require("../models/User")

const registerUser = async (req, res) => {
    try {
      const newUser = await UsersService.userRegister(req.body);
      res.status(201).send(newUser);
    } catch {
      res.status(404).send(`ERROR registration`);
    }
  };
  export default registerUser