const express = require('express')
const app = express()
const port = 3000

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

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
