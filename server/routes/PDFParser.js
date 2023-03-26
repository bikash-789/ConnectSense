const express = require("express");
const router = express.Router();

const { extractText } = require("../controllers/PDFParserAPI.js");

router.post("/api/extract-text", extractText);
module.exports = router;
