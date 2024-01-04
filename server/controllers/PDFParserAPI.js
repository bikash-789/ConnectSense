module.exports.extractText = (req, res) => {
  var fs = require("fs");
  fs.readFile(req.files.pdfFile, (err, pdfBuffer) => {
    if (err) {
      console.log(err);
    }
    // pdfBuffer contains the file content
    new PdfReader().parseBuffer(pdfBuffer, function (err, item) {
      if (err) callback(err);
      else if (!item) callback();
      else if (item.text) {
        console.log(item.text);
        res.set("Content-Type", "text/plain");
        res.send(item.text);
      }
    });
  });
};
