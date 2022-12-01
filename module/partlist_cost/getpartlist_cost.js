const express = require('express');
const mysqlcon = require('../../db_env/db_connection.js');
const Router = express.Router();

///////////////////////// Get Partlist Cost All ////////////////////////////
Router.get("/",(req,res) => {
    var sql = "SELECT * FROM Partlistdb_TB";
    mysqlcon.query(sql , (err,rows,fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
})

module.exports = Router;