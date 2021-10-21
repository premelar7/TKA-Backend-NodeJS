
const db = require('../../config/database.config');
const moment = require("moment");
const sequelize = db.sequelize;
const user_portal = db.user_portal;
const user_profile = db.user_profile;
const response = {
    "success": false,
    "code": null,
    "http_status": 200,
    "result": []
};

module.exports = {
    users_create: async function (req, res) {
        res.status(200).json(req.body);
    },
    users_update: async function (req, res) {
        res.status(200).json(req.body);
    },
    users_search: async function (req, res) {
        let user = await user_portal.findAll();
        if (user) {
            response.success = true;
            response.code = "SUCCESS";
            response.result = user.map(obj => {
                let rObj = {
                    "user_id": obj.user_id,
                    "email": obj.email,
                    "firstname": obj.firstname,
                    "lastname": obj.lastname,
                    "datecreate": moment(obj.datecreate).format('YYYY-MM-DD h:mm:ss')
                }
                return rObj;
            });
        } else {
            response.http_status = 404;
            response.code = "EMPTY";
        }

        res.status(200).json(response);

    }
};