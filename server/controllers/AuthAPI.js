const User = require("../model/user");
const jwtt = require("jsonwebtoken");
const { expressjwt: jwt } = require("express-jwt");
const { errorHandler } = require("../helper/DB_ErrorHandler");

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
        error: errorHandler(err),
      });
    }
    user.salt = undefined;
    user.hashed_password = undefined;
    res.status(200).json({
      message: "Successfully created!",
    });
  });
};

// Signin function
module.exports.signIn = (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      error: "All fields are required!",
    });
  }
  // Search for user in database
  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "User with this email doesn't exist, please Signup.",
      });
    }
    // If user is found, make sure to match the password
    if (!user.authenticate(password)) {
      return res.status(401).json({
        error: "Email and password doesn't match",
      });
    }

    // Generate a signed token with user id and secret
    const token = jwtt.sign({ _id: user._id }, process.env.SECRET);

    // Persist the token as 't' in cookie with expirty date
    res.cookie("Token", token, { expire: new Date().getMinutes() + 20 });

    // Return response with user and token to Frontend app
    const { _id, name, email } = user;
    return res.json({
      token,
      user: { _id, name, email },
    });
  });
};

//
// READ - will check if the current user is signed in or not
exports.requireSignIn = jwt({
  secret: process.env.SECRET,
  algorithms: ["HS256"],
  userProperty: "auth",
});
