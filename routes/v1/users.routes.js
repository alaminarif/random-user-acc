const express = require("express");
const usersData = require("../../public/user.json");
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

// router.get("/:id", (req, res) => {
//   res.send("user id");
// });

// user save
router.post("/save", (req, res) => {
  const save = req.body;
  const result = usersData.push(save);
  console.log(save);
  res.send(usersData);
});

router.patch("/update/:id", (req, res) => {
  const { id } = req.params;
  const query = { id: id };
  const updateData = usersData.find((user) => user.id == id);
  updateData.id = id;
  updateData.name = req.body.name;
  updateData.gender = req.body.gender;

  res.send(updateData);
  res.send("2");
});

module.exports = router;
