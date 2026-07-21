require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

console.log("Application started - Version 2");

app.get("/get", (req, res) => {
  res.json({ message: "jai sai master jai bapuji maharaj" });
});

app.get("/ram", (req, res) => {
  console.log("Hello route called");
  res.json({ message: "Jai Bapuji maharaj , modified Code" });
});

app.listen(PORT, () => {
  console.log(`Server is up and running ${PORT}`);
});

console.log("Everything is going right...");
