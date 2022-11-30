import express from 'express';
import mysqlcon from './db_env/db_connection.js';

import http from 'http';

const port = 3000;
const app = express()

const server = http.createServer(app);

app.get('/', (req, res) => {
  res.send('Hello World')
})

server.listen(port, () => {
  console.log('Start server at port 3000.')
})