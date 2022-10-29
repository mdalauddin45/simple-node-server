const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("simple Node Server Running");
});

const users = [
  { id: 1, name: "sabana", email: "sabana@gmail.com" },
  { id: 2, name: "sabila", email: "sabila@gmail.com" },
  { id: 3, name: "shapnur", email: "shapnur@gmail.com" },
];

app.get("/users", (req, res) => {
  if (req.query.name) {
    const search = req.query.name;
    const filtered = users.filter(
      (usr) => usr.name.toLocaleLowerCase().indexOf(search),
      res.send(filtered)
    );
  }
  res.send(users);
});

app.post("/users", (req, res) => {
  console.log("post api called");
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  console.log(user);
  res.send(user);
});

app.listen(port, () => {
  console.log(`simple node server Runiing on port ${port}`);
});
