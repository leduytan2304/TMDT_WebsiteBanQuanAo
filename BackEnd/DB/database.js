var mysql = require('mysql');

var con = mysql.createConnection({
  host: "sql6.freesqldatabase.com",
  user: "sql6637195",
  password: "EZUmHNNy3R",
  database: "sql6637195"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});
module.exports = con;