
const db = require('./../../modules/connection.mysql');
const moment = require("moment");
const els_mail = require("./../../modules/elastic.mail");
const sequelize = db.sequelize;

const user_portal = db.user_portal;
const user_profile = db.user_profile;

const response = {
    success: false,
    code: null,
    http_status: 200,
    result: []
};

module.exports = {
    users_create: async function (req, res) {
        let mail = await els_mail.send_email({
            to_mail: "premelar7@gmail.com",
            subject: "Verify Your email",
            message: "12355"
        });
        response.result = JSON.parse(mail);
        res.status(200).json(response);
    },
    users_update: async function (req, res) {
        res.status(200).json(req.body);
        //Update release branch
    },
    users_search: async function (req, res) {
        let user = await user_portal.findAll();
        if (user) {
            response.success = true;
            response.code = "SUCCESS";
            response.result = user.map(obj => {
                let rObj = {
                    user_id: obj.user_id,
                    email: obj.email,
                    firstname: obj.firstname,
                    lastname: obj.lastname,
                    datecreate: moment(obj.datecreate).format('YYYY-MM-DD h:mm:ss')
                }
                return rObj;
            });
        } else {
            response.http_status = 404;
            response.code = "EMPTY";
        }

        res.status(response.http_status).json(response);

    }
};