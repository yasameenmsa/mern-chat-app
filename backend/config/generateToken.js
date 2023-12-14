const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || Yasmeenmsa, {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
