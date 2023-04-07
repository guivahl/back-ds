module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'ds_dev',
      user:     'postgres',
      password: '1234'
    },
    migrations: {
      directory: './src/database/migrations'
    }
  }
}