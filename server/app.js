const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const fileUpload = require("express-fileupload");
require("dotenv").config();

// Import routes from directory
const authRoutes = require("./routes/Auth");
const pdfParserRouts = require("./routes/PDFParser");

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
app.use(morgan("dev"));
app.use(cors({ origin: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileUpload());

// Route middlewares
app.get("/api", (req, res) => {
  res.send("Welcome to API!");
});
app.use(authRoutes);
app.use(pdfParserRouts);

// Listen a server on port
app.listen(process.env.PORT, (err) => {
  if (err) console.log("Oops! Server could not be setup :(");
  console.log(`Server listening on port ${process.env.PORT}`);
});
