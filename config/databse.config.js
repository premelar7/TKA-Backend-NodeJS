const mysql = require('mysql');

module.exports = {
    ConnnectMySQL: async function () {
        return new Promise(async (resolve, reject) => {
            try {
                let connection = mysql.createConnection({
                    host: process.env.SQL_HOST,
                    user: process.env.SQL_USER,
                    password: process.env.SQL_PASSWORD,
                    database: process.env.SQL_DATABASE
                })

                connection.connect(function (error) {
                    if (error) {
                        console.log(error);
                        reject(error);
                    } else {
                        console.log("MySQL Connected!", connection.threadId);
                        resolve(connection);
                    }
                });
            } catch (error) {
                console.log(error);
                reject(error);
            }
        });
    },
    DisConnectMySQL: async function (connection) {
        connection.end();
        console.log("MySQL DisConnected!", connection.threadId);
    }
}