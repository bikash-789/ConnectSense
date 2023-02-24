const express = require("express");
const router = express.Router();

const { signUp } = require("../controllers/AuthAPI");

router.post("/api/signup", signUp);
module.exports = router;
