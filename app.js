const express = require("express");
const puppeteer = require("puppeteer");
const { createServer } = require("http");
const cors = require("cors");
const AppRouter = require("./routes/appRouter");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
const httpServer = createServer(app);

// Middleware setup
dotenv.config();
app.use(
  cors({
    origin: "*", // or specify your frontend origin
    optionsSuccessStatus: 200,
  })
);
app.use(express.json({ limit: "50mb" }));
app.use(
  express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 })
);
app.use(bodyParser.json());
app.use("/files", express.static(path.join(__dirname, "files")));
app.use("/api", AppRouter);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URL, {})
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => console.log(err));

// Start server
httpServer.listen(process.env.PORT, () => {
  console.log(`University server is running on port ${process.env.PORT}!`);
});

module.exports = app;
