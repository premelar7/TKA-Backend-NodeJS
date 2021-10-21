const sql = require("./../config/databse.config");

module.exports = async (req, res, next) => {
    let connection = await sql.ConnnectMySQL();
    req["mysql"] = connection;
    next();
}