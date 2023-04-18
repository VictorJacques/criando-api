const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send({ message: "Hello World" });
});

app.listen(3333);
