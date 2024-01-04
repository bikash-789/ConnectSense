const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const multer = require("multer");
const pdfParse = require("pdf-parse");
const fs = require("fs");
// const fileUpload = require("express-fileupload");

require("dotenv").config();

// Import routes from directory
const authRoutes = require("./routes/Auth");
const sttRoutes = require("./routes/STT");
// Initialize app with express server
const app = express();

// Connect to database
mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected successfully!"))
  .catch((err) => {
    console.log(err);
  });

// Middlewares
// app.use(fileUpload());
app.use(morgan("dev"));
app.use(cors({ origin: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Route middlewares
app.get("/api", (req, res) => {
  res.send("Welcome to API!");
});
const upload = multer({
  dest: "uploads/",
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB
    fieldSize: 10 * 1024 * 1024, // 10MB
  },
});
app.post("/api/extract-text", upload.single("pdfFile"), (req, res) => {
  const file = req.file;
  pdfParse(file.path)
    .then((data) => {
      res.set("Content-Type", "text/plain");
      res.send(data.text);
    })
    .catch((error) => {
      res.status(500).send(error.message);
    })
    .finally(() => {
      fs.readdir("./uploads", (err, files) => {
        if (err) throw err;
        console.log(files);
        files.forEach((file) => {
          fs.unlink(`./uploads/${file}`, (err) => {
            if (err) throw err;
            console.log("File deleted!");
          });
        });
      });
    });
});
app.use(authRoutes);
app.use(sttRoutes);
// Listen a server on port
app.listen(process.env.PORT, (err) => {
  if (err) console.log("Oops! Server could not be setup :(");
  console.log(`Server listening on port ${process.env.PORT}`);
});
