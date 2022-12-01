const express = require('express');
const mysqlcon = require('../../db_env/db_connection');
const Router = express.Router();

///////////////////////// Get User All ////////////////////////////
Router.get("/",(req,res)=>{
    var sql = "SELECT * FROM profile";
    mysqlcon.query(sql, (err,rows,fields)=>{
        if(!err){
            res.json(rows)
        }else{
            console.log(err);
        }
    })
})
module.exports = Router;