const express = require('express');
const mysqlcon = require('./db_env/db_connection.js');
const http = require('http');
const SECRET = "MY_SECRET_KEY";

const port = 3000;
const app = express()

const server = http.createServer(app);

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use(express.static('public'));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", 
  "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods","DELETE, POST, GET, OPTIONS");
  next();
});

const corsOptions = {
  origin: 'http://192.168.1.80:3000',
  credentials: true,
};

app.use(cors(corsOptions));

//////////////////////////////////////////////// User Profile /////////////////////////////////////////////////////////
const Getprofile = require('./module/user/getprofile.js');
app.use('/api/user/', Getprofile);

//////////////////////////////////////////////// Partlist Cost /////////////////////////////////////////////////////////
const Getpartlistcost = require('./module/partlist_cost/getpartlist_cost.js');
app.use('/api/partlist/cost/', Getpartlistcost);



//////////////////////////////////////////////// Server listen /////////////////////////////////////////////////////////
server.listen(port, () => {
  console.log('Start server at port 3000.')
})