const express = require('express')
const app = express()
const port = 3001
var cors = require('cors')
var bodyParser = require('body-parser')

app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

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

app.listen(process.env.PORT || port, () => console.log(`Example app listening on port ${port}!`))
