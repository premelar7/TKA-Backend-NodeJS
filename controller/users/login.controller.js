const db = require('./../../modules/connection.mysql');
const moment = require("moment");
const bcrypt = require("bcrypt");
const user_portal = db.user_portal;

const response = {
    success: false,
    code: null,
    http_status: 200,
    result: []
};

module.exports = {
    login: async function (req, res) {
        let data_login = await user_portal.findAll({
            //raw:true,
            where: {
                email: req.body.email
            }
        });
        if (data_login.length > 0) {
            let match = await bcrypt.compare(req.body.ps, data_login[0].password);
            if (match) {
                await user_portal.update({
                    lastlogin: moment().format('YYYY-MM-DD h:mm:ss')
                },
                    {
                        where: {
                            email: req.body.email
                        }
                    });
                response.result = ["Login Success!"];
                response.success = true;
                response.code = 4000; //4000 = Login Success!
            }
            else {
                response.result = ["Email or password incorrect."];
                response.success = false;
                response.code = 3000;
            }
        }
        else {
            response.result = ["Email or password incorrect."];
            response.success = false;
            response.code = 3000; //3000 = Email or password incorrect
        }
        res.status(response.http_status).json(response);
    }
}
