const express = require('express')
const app = express()
var cors = require('cors')

app.use(cors())

const env = 'development';
const config = require('./knexfile.js')[env];
const knex = require('knex')(config);

app.get('/', (req, res) => {
    knex.select('*').from('methods')
    .then((rows) => {
      res.send(rows);
    })
    .catch((err) => {
      next(err);
    });
})

app.listen(process.env.PORT)
