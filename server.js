const mysql = require("mysql2");

const db = mysql.createConnection(
  {
    host: "localhost",

    user: "root",

    password: "",
    database: "business_db",
  },
  console.log(`your business_db`)
);
module.exports = db;