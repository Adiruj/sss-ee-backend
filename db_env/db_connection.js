const mysql =  require('mysql');

var mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Admin@ee1",
    database: "EE_DB"
});

mysqlConnection.connect((err)=>{
    if(!err)
      {
        console.log("Connected");
      }else{
        console.log("Connection Failed");
      }
  });

  module.exports = mysqlConnection;