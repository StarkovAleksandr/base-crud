const express = require("express");
const mappedUser = require("./utils");

const router = express.Router();

const userStore = new Map([
  mappedUser({
    name: "Elon",
    username: "Elon_Musk",
    email: "@gmail.com",
    address: "1 Rocket Rd, Hawthorne, CA 90250",
  }),
]);

router.post("/users", (req, res) => {
  const [id, user] = mappedUser(req.body);
  userStore.set(id, user);
  res.status(201).json(user);
});

router.get("/users", (req, res) => {
  res.status(200).json([...userStore.values()]);
});

router.get("/users/:id", (req, res) => {
  res.status(200).json(userStore.get(req.params.id));
});

router.put("/users/:id", (req, res) => {
  const [id, user] = mappedUser(req.body, req.params.id);
  userStore.set(id, user);
  res.status(200).json(user);
});

router.delete("/users/:id", (req, res) => {
  userStore.delete(req.params.id);
  res.status(200).json(true);
});

module.exports = router;
