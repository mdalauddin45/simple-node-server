const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("simple Node Server Running");
});

app.listen(port, () => {
  console.log(`simple node server Runiing on port ${port}`);
});
