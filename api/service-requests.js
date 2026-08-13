const express = require("express");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});

app.get("/api/service-requests", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Service request API is working!",
  });
});

app.post("/api/service-requests", (req, res) => {
  console.log("Service request received:");
  console.log(req.body);

  res.status(200).json({
    success: true,
    message: "Service request received successfully",
  });
});

module.exports = app;