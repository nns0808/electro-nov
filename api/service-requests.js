const express = require("express");

const app = express();

app.use(express.json());

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