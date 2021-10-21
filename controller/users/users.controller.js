const sql = require("./../../config/databse.config");
module.exports = {
    users_create: async function (req, res) {
        await sql.DisConnectMySQL(req["mysql"]);
        res.status(200).json({
            "youtube": 111
        });
    },
    users_update: async function (req, res) {
        res.status(200).json(req.body);
    },
    users_search: async function (req, res) {
    }
};