import express from 'express';
import mysqlcon from './db_env/db_connection.js';

import http from 'http';
const app = express()


app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(3000, () => {
  console.log('Start server at port 3000.')
})