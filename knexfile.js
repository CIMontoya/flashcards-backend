module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/notecards'
  },
  production: {
    client: 'postgresql',
    connection: {
      database: 'postgres://ohoifizpttzwbi:5350a12dfebf96d1cd618a87afe15d8f96c5474f0cbb60cfbcd507ab0e0a1d2d@ec2-54-83-17-151.compute-1.amazonaws.com:5432/dcsl5bfkgd2fpb',
      user:     'username',
      password: 'password'
    }
}
}
