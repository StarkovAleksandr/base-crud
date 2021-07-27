const express = require("express");

const routes = require("./modules/users/users.router");

const app = express();

app.use(express.json());
app.use(routes);

module.exports = app;
