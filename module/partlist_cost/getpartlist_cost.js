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

///////////////////////// Get Partlist Cost By Part No. ////////////////////////////
Router.get("/partno/:partno",(req,res) => {
    const Partno = req.params.partno;
    var sql = "SELECT * FROM Partlistdb_TB WHERE Part_no = ?";
    mysqlcon.query(sql,[Partno],(err,rows,fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
})

///////////////////////// Get Partlist Cost By Description ////////////////////////////
Router.get("/description/:description",(req,res) => {
    const Description = req.params.description;
    var sql = "SELECT * FROM Partlistdb_TB WHERE Description = ?";
    mysqlcon.query(sql,[Description],(err,rows,fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
})

///////////////////////// Get Partlist Cost By Type ////////////////////////////
Router.get("/type/:type",(req,res) => {
    const Type = req.params.type;
    var sql = "SELECT * FROM Partlistdb_TB WHERE Type = ?";
    mysqlcon.query(sql,[Type],(err,rows,fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
})

///////////////////////// Get Partlist Cost By Vandor ////////////////////////////
Router.get("/vendor/:vendor",(req,res) => {
    const Vendor = req.params.vendor;
    var sql = "SELECT * FROM Partlistdb_TB WHERE Vendor = ?";
    mysqlcon.query(sql,[Vendor],(err,rows,fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
})

///////////////////////// Get Partlist Cost By Brand ////////////////////////////
Router.get("/brand/:brand",(req,res) => {
    const Brand = req.params.brand;
    var sql = "SELECT * FROM Partlistdb_TB WHERE Brand = ?";
    mysqlcon.query(sql,[Brand],(err,rows,fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
})