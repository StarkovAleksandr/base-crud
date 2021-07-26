const express = require("express");

const routes = require("./modules/users/user.router");

const app = express();

app.use(express.json());
app.use(routes);

module.exports = app;
