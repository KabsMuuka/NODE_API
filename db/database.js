const mysql = require('mysql');

// Create a connection to the MySQL server
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'publicDB', 
  password: 'password', 
  database: 'students'
});

connection.connect((error) => {
  if (error) throw error;
  return console.log("Connected! to mysql");
});


module.exports = connection;