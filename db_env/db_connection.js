import { createConnection } from 'mysql';

var mysqlcon = createConnection({
    host: "localhost",
    user: "root",
    password: "Admin@ee1",
    database: "EE_DB"
});

mysqlcon.connect((err)=>{
    if(!err)
      {
        console.log("Connected");
      }else{
        console.log("Connection Failed");
      }
  });

export default mysqlcon ;