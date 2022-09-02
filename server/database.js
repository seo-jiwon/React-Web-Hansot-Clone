const mysql = require("mysql");

const connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "1234",
    database : "hansot"
});
connection.connect();

connection.query('SELECT * FROM user', function(err, results, fields) {
    if (err) {
      console.log(err);
    }
    console.log(results);
  });
  
  connection.end();

module.exports = connection;