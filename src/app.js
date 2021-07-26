const express = require("express");

const mappedUser = require("./modules/users/utils");
const routes = require("./modules/users/user.controller");

const app = express();

app.use(express.json());

app.use(routes);

module.exports = app;
