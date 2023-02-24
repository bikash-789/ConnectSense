const User = require("../model/user");
const jwtt = require("jsonwebtoken");
const { expressjwt: jwt } = require("express-jwt");

// Signup function - Returns 'user info' after successfull signup
module.exports.signUp = (req, res) => {
  //console.log(req.body)
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({
      error: "All fields are required!",
    });
  }
  const user = new User(req.body);
  user.save((err, user) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    user.salt = undefined;
    user.hashed_password = undefined;
    res.status(200).json({
      message: "Successfully created!",
    });
  });
};
