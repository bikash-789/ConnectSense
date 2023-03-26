const pdfParse = require("pdf-parse");

module.exports.extractText = (req, res) => {
  if (!req.files && !req.files.pdfFile) {
    res.status(400).json({
      error: "No file uploaded!",
    });
  }
  pdfParse(req.files.pdfFile).then((result) => {
    res.send(result.text);
  });
};
