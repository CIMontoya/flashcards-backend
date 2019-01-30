module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/notecards'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
}
}
