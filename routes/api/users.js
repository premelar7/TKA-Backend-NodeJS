const express = require('express');
const sql = require("./../../middleware/sql.connect.middleware");
const router = express.Router();
router.use(sql);

const controller = require('../../controller/users/users.controller');

router.post("/create", controller.users_create);
router.post("/update", controller.users_update);

module.exports = router;