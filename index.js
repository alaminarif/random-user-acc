const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("get api create");
});

app.listen(port, () => {
  console.log("listen to port", port);
});
