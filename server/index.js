// imports
const express = require("express");
const cors = require("cors");
const { myQuery } = require("./DB-config");

// inits
const app = express();

// middlewares
app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  try {
    const todos = await myQuery("SELECT * FROM todos");
    res.send(todos);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

app.post("/", async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) {
      return res.status(400).send({ err: "text is required" });
    }
    await myQuery(`INSERT INTO todos (text) VALUES ("${text}")`);
    res.sendStatus(201);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

app.listen(1000, () => console.log("server up & running on port 1000"));
