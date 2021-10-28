const Sequelize = require('sequelize');
const mysql = require('./../config/database.config').MySQL;

const sequelize = new Sequelize(mysql.database, mysql.user, mysql.password, {
    host: mysql.host,
    dialect: mysql.dialect,
    logging: mysql.logging,
    pool: mysql.pool
});

//Update Login

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

//import model
db.user_portal = require('../models/user.portal')(sequelize, Sequelize);
db.user_profile = require('../models/user.profile')(sequelize, Sequelize);

module.exports = db;