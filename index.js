const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const cors = require('cors')
const bodyParser = require('body-parser')
const dotenv = require('dotenv').config()

const env = process.env.NODE_ENV || 'development';
const config = require('./knexfile.js')[env];
const knex = require('knex')(config);


app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.get('/', (req, res, next) => {
    knex.select('*').from('methods')
    .then((rows) => {
      res.send(rows);
    })
    .catch((err) => {
      console.log(err);
    });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
