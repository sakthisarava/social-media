const mysql = require("mysql")


const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Sakthi@6',
  database : 'socialmedia'
});

module.exports = db;