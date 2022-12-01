const express = require('express');
const mysqlcon = require('./db_env/db_connection.js');
const http = require('http');

const port = 3000;
const app = express()

const server = http.createServer(app);

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use(express.static('public'));

//////////////////////////////////////////////// User Profile /////////////////////////////////////////////////////////
const Getprofile = require('./module/user/getprofile.js');
app.use('/api/user/', Getprofile); //DeleteExperience



//////////////////////////////////////////////// Server listen /////////////////////////////////////////////////////////
server.listen(port, () => {
  console.log('Start server at port 3000.')
})