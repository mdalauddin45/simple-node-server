const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require("mongodb");

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

//user:alauddin45
//pass:1WOZtb3DQ3JmoefA

const uri =
  "mongodb+srv://alauddin45:1WOZtb3DQ3JmoefA@cluster0.teba24n.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
async function run() {
  try {
    const userCollection = client.db("simpleNode").collection("user");
    const user = { name: "Pori Moni", email: "Heroalom@gmail.com" };
    // const result = await userCollection.insertOne(user);
    // console.log(result);
    app.post("/users", async (req, res) => {
      console.log("post api called");
      const user = req.body;

      // users.push(user);
      // console.log(user);
      const result = await userCollection.insertOne(user);
      console.log(result);
      user.id = result.insertedId;
      res.send(user);
      users.push(user);
    });
  } finally {
  }
}

run().catch((error) => {
  console.log(error);
});

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

// app.post("/users", (req, res) => {
//   console.log("post api called");
//   const user = req.body;
//   user.id = users.length + 1;
//   users.push(user);
//   console.log(user);
//   res.send(user);
// });

app.listen(port, () => {
  console.log(`simple node server Runiing on port ${port}`);
});
