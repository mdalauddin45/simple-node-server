const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("simple Node Server Running");
});

const users = [
  { id: 1, name: "sabana", email: "sabana@gmail.com" },
  { id: 2, name: "sabila", email: "sabila@gmail.com" },
  { id: 3, name: "shapnur", email: "shapnur@gmail.com" },
];

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  console.log("post api called");
});

app.listen(port, () => {
  console.log(`simple node server Runiing on port ${port}`);
});
