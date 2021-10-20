const express = require("express");
const logger = require("./middleware/log.middleware");
const app = express();

const api = require("./routes/main");

const port = process.env.PORT || 3000;

//MIDDILEWARE
app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//DEFAULT PATH
app.get("/", (req, res) => {
    res.send("Express.js Framework development.");
});

//API PATH
app.use("/api", api);

//RUN NODE SERVER
app.listen(port, () => {
    console.log("node is running with port " + port);
});