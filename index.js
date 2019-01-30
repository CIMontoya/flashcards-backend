const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const cors = require('cors')
const bodyParser = require('body-parser')
const dotenv = require(‘dotenv’).config()
const environment = process.env.NODE_ENV || ‘development’


app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const env = process.env.NODE_ENV || 'development';
const config = require('./knexfile.js')[env];
const knex = require('knex')(config);

app.get('/', (req, res, next) => {
    knex.select('*').from('methods')
    .then((rows) => {
      res.send(rows);
    })
    .catch((err) => {
      next(err);
    });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
