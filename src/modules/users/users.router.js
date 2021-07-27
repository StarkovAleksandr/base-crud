const express = require("express");

const userController = require("./users.controller");

const router = express.Router();

router.post("/users", userController.create);
router.get("/users", userController.findAll);
router.get("/users/:id", userController.findOne);
router.put("/users/:id", userController.update);
router.delete("/users/:id", userController.remove);

module.exports = router;
