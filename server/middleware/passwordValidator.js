const validatePassword = (password) => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;
  return regex.test(password);
};

const passwordValidator = (req, res, next) => {
  const password = req.body.password;

  if (!validatePassword(password)) {
    return res.status(400).json({
      error:
        "The password must contain at least one lowercase letter, one uppercase letter, one number, and one symbol.",
    });
  }

  next();
};

module.exports = { passwordValidator };
