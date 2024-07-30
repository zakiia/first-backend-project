const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Look i can code now, but i dont more");
});

const users = [
  { id: 1, name: "Shabana", email: "shabana@gmail.com", phone: "01788888888" },
  {
    id: 2,
    name: "Shabnoor",
    email: "shabnoor@gmail.com",
    phone: "01788888888",
  },
  {
    id: 3,
    name: "Shuchorita",
    email: "shuchorita@gmail.com",
    phone: "01788888888",
  },
  {
    id: 4,
    name: "Shuchondra",
    email: "shuchondra@gmail.com",
    phone: "01788888888",
  },
  {
    id: 5,
    name: "Srabonti",
    email: "srabonti@gmail.com",
    phone: "01788888888",
  },
  { id: 6, name: "sabila", email: "sabila@gmail.com", phone: "01788888888" },
  { id: 7, name: "sohana", email: "sohana@gmail.com", phone: "01788888888" },
];

app.get("/user", (req, res) => {
  if (req.query.name) {
    const search = req.query.name.toLowerCase();
    const matched = users.filter((user) =>
      user.name.toLowerCase().includes(search)
    );
    res.send(matched);
  } else {
    res.send(users);
  }
});

app.get("/user/:id", (req, res) => {
  console.log(req.params);
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);
  res.send(user);
});
// app.get("/user/:id", (req, res) => {
//   console.log(req.params);
//   const id = req.params.id;
//   const user = users[id];
//   res.send(user);
// });

app.post("/user", (req, res) => {
  console.log(req.body);
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);
});

app.get("/fruits", (req, res) => {
  res.send(["mango", "apple", "oranges"]);
});

app.listen(port, () => {
  console.log("listening to port", port);
});
