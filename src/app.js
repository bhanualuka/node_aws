require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

app.get("/get", (req, res) => {
  res.json({ message: "jai sai master jai bapuji maharaj" });
});

app.get("/hello", (req, res) => {
  res.json({ message: "Jai Bapuji maharaj , modified Code" });
});

app.listen(PORT, () => {
  console.log(`Server is up and running ${PORT}`);
});
