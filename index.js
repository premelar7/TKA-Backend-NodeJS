const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get("/users", (req, res) => {
    res.status(200).json({
        "user_id": 1,
        "username": "authachai",
        "lastname": "premelar"
    });
});

app.listen(port, () => {
    console.log("node is running with port " + port);
});