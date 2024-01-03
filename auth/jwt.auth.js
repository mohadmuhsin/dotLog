const jwt = require("jsonwebtoken");
require("dotenv").config();

const jwtSecret = process.env.SECRET_KEY;

module.exports = {

  generateAccessToken(payload, res) {
    const token = jwt.sign(payload, jwtSecret, { expiresIn: "30m" });
    let maxAge = 30 * 60 * 1000
    res.cookie("jwt", token, {
      httpOnly: true,
      maxAge: maxAge,
    });
    return token
  },

  generateRefreshToken(payload, res) {
    const { _id } = payload
    const refreshSecret = jwt.sign({ _id }, jwtSecret, {
      expiresIn: "30d",
    });
    let maxAge = 30 * 24 * 60 * 60 * 1000
    res.cookie("ReTkn", refreshSecret, {
      httpOnly: true,
      maxAge: maxAge,
    });

    return refreshSecret;
  },

 
};
