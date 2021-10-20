const express = require('express');
const router = express.Router();

const controller = require('../../controller/users/users.controller');

router.post("/create", controller.users_create);
router.post("/update", controller.users_update);

module.exports = router;