const db = require('./../../modules/connection.mysql');
const moment = require("moment");
const bcrypt = require("bcrypt");
const user_portal = db.user_portal;

module.exports = {
    login: async function (req, res) {
        let response = {
            success: false,
            code: null,
            http_status: 200,
            result: []
        };
        let data_login = await user_portal.findAll({
            //raw:true,
            where: {
                email: req.body.email
            }
        });
        if (data_login.length > 0) {
            let match = await bcrypt.compare(req.body.ps, data_login[0].password);
            if (match) {
                let jwt = require('jsonwebtoken');
                let token = jwt.sign({ user_id: data_login[0].user_id }, process.env.TOKEN_KEY, { expiresIn: '1h' });
                await user_portal.update({
                    lastlogin: moment().format('YYYY-MM-DD h:mm:ss')
                },
                    {
                        where: {
                            email: req.body.email
                        }
                    });
                response.result = [{ access_token: token }];
                response.success = true;
                response.code = 40101;
            }
            else {
                response.result = ["Email or password incorrect."];
                response.success = false;
                response.code = 30101;
                response.http_status = 422;
            }
        }
        else {
            response.result = ["Email or password incorrect."];
            response.success = false;
            response.code = 30101;
            response.http_status = 422;
        }
        res.status(response.http_status).json(response);
    }
}
