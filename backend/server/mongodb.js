const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");
const cors = require("cors");
const PORT = 5500;
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
const connectDB = async () => {
  const conn = await mongoose
    .connect(
      "mongodb+srv://jpoa95:NCsJ2o43bYOvGiZf@firstmongo.yvxsc65.mongodb.net/firstMongo",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .catch((err) => {
      console.log("error: ", err);
    });
};
connectDB();
const client = new MongoClient(
  "mongodb+srv://jpoa95:NCsJ2o43bYOvGiZf@firstmongo.yvxsc65.mongodb.net/firstMongo"
);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("mongoDB ONLINE");
});

app.listen(PORT, () => {
  console.log(`RUNNING ON ${PORT}`);
});

const db = client.db("firstMongo");

app.post("/create", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const fname = req.body.fname;
  const email = req.body.email;
  console.log("create", username, password, fname, email);
  const signup = await db.collection("users").insertOne({
    fname,
    email,
    username,
    password,
  });
});

app.post("/login", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const logValues = await db
    .collection("users")
    .findOne({ username: username, password: password });
  console.log(logValues);
  if (logValues !== null) {
    res.send("Success");
  }
});

app.post("/addItem", async (req, res) => {
  console.log("additem");
  const item = req.body.item;
  const price = req.body.price;
  const todo = req.body.todo;
  const logValues = await db
    .collection("items")
    .insertOne({ todo: todo, item: item, price: price });
  res.send("Success");
});
app.post("/getItems", async (req, res) => {
  const logValues = await db.collection("items").find().toArray();
  res.send(logValues);
});

app.post("/updateItem", async (req, res) => {
  const item = req.body.item;
  console.log(item)
  const logValues = await db.collection('items').updateOne(
    {item:item},
    {$set: { todo: 1 }}
);
    console.log(logValues);
});

app.post("/dropItems", async (req, res) => {
  const logValues = await db.collection("items").deleteMany({});
});
