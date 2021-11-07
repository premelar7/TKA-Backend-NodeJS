const express = require('express');
const app = express();

const users_api = require("./api/users");
const authen_api = require("./api/authen");
const login_api = require("./api/login");

const logger = require("./../middleware/log.middleware");

app.use(logger);
app.use("/v1/users", users_api);
app.use("/v1/authen", authen_api);
app.use("/v1/login", login_api);

module.exports = app;