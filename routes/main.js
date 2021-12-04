const express = require('express');
const rateLimit = require("express-rate-limit");
const app = express();

const users_api = require("./api/users");
const authen_api = require("./api/authen");
const login_api = require("./api/login");

const logger = require("./../middleware/log.middleware");
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: {
        success: false,
        code: null,
        http_status: 429,
        result: ["Too many requests, please try again later."]
    }
});

app.use(logger);
app.use(apiLimiter);
app.use("/v1/users", users_api);
app.use("/v1/authen", authen_api);
app.use("/v1/login", login_api);

module.exports = app;