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

// ./users
router
  .route("/users")
  //POST
  .post((req, res) => {
    const [id, user] = mappedUser(req.body);
    userStore.set(id, user);
    res.status(201).json(user);
  })

  //GET
  .get((req, res) => {
    res.status(200).json([...userStore.values()]);
  });

// ./users/:id
router
  .route("/users/:id")
  //GET
  .get((req, res) => {
    res.status(200).json(userStore.get(req.params.id));
  })

  //PUT
  .put((req, res) => {
    const [id, user] = mappedUser(req.body, req.params.id);
    userStore.set(id, user);
    res.status(200).json(user);
  })

  //DELETE
  .delete((req, res) => {
    userStore.delete(req.params.id);
    res.status(200).json(true);
  });

// user.ctrl.ts || user.controller.ts

module.exports = router;

// src/modules/user/user.controller.ts
