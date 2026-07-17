const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

app.get("/get", (req, res) => {
  res.json({ message: "jai sai master jai bapuji maharaj" });
});

app.listen(PORT, () => {
  console.log(`Server is up and running ${PORT}`);
});
