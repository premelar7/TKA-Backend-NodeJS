const express = require('express');
const app = express();

const users_api = require("./api/users");
const authen_api = require("./api/authen");

app.use("/v1/users", users_api);
app.use("/v1/authen", authen_api);

module.exports = app;