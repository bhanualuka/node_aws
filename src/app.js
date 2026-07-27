require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

console.log("Application started - Version 2");

app.get("/", (req, res) => {
  res.json({ message: "Jai sai master , This is my First Appication" });
});

app.listen(PORT, () => {
  console.log(`Server is up and running ${PORT}`);
});

console.log("Everything is going right...");
