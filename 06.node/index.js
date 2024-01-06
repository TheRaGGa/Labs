const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

let users = [
  {
    userName: "Rashad",
    id: 1,
  },
  {
    userName: "Nihad",
    id: 2,
  },
  {
    userName: "Ulfat",
    id: 3,
  },
  {
    userName: "Rafig",
    id: 4,
  },
];

app.get("/code/users", (req, res) => {
  res.json(users);
});

app.delete("/code/users/:id", (req, res) => {
  const { id } = req.params;
  users = users.filter((item) => item.id != id);
  res.json("Users deleted successfully!");
});

app.post("/code/users", (req, res) => {
  const userBody = req.body;
  users.push(userBody);
  res.send("Users added successfully!");
});

const PORT = process.env.PORT;

app.listen(PORT, () =>
  console.log("Server is running: http://localhost:${PORT}")
);
