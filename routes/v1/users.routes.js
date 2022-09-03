const express = require("express");
usersData = require("../../public/user.json");
const router = express.Router();

//all user
router.get("/all", (req, res) => {
  const { limit, page } = req.query;

  res.send(usersData.slice(0, limit));
});

// random user
router.get("/random", (req, res) => {
  const randomUser = usersData[Math.floor(Math.random() * usersData.length)];
  res.send(randomUser);
});

// user save
router.post("/save", (req, res) => {
  const save = req.body;
  usersData.push(req.body);
  console.log(save);
  res.send(usersData);
});

// user update
router.patch("/update/:id", (req, res) => {
  const { id } = req.params;
  const query = { id: id };
  const updateData = usersData.find((user) => user.id == id);
  updateData.id = id;
  updateData.name = req.body.name;
  updateData.contact = req.body.contact;
  res.send(updateData);
});

// multi user update
// router.patch("/bulk-update/", (req, res) => {
//   const body = req.body;
//   console.log(body);
//   res.send("multiple obj update");
// });

// user delete
router.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  const filter = { id: id };
  const newData = usersData.filter((user) => user.id != id);
  res.send(newData);
});

module.exports = router;
