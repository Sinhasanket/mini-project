const mysql = require("mysql2");
      config = require("../config/databaseConfiguration");

const pool = mysql.createPool(config.mysql);
module.exports = pool.promise();