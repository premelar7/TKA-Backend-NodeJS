const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.SQL_DATABASE, process.env.SQL_USER, process.env.SQL_PASSWORD, {
    host: process.env.SQL_HOST,
    dialect: 'mysql',
    logging: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

//Update Login

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

//import model
db.user_portal = require('../models/user.portal')(sequelize, Sequelize);
db.user_profile = require('../models/user.profile')(sequelize, Sequelize);

module.exports = db;