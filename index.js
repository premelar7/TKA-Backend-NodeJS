const express = require("express");
const logger = require("./middleware/LogMiddleware");
const app = express();

const port = process.env.PORT || 3000;

//MIDDILEWARE
app.use(logger);

//ROUTE PATH
app.get("/", (req, res) => {
    res.send("Express.js Framework development.");
});

//RUN NODE SERVER
app.listen(port, () => {
    console.log("node is running with port " + port);
});